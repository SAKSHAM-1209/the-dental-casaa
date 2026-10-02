import { useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, LoaderCircle, Mail, Phone, UserRound } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { appointmentTimes, treatments, type Appointment } from "@/data/clinic";
import { cn } from "@/lib/utils";

const fieldClass = "h-12 rounded-sm border-border bg-surface px-4 shadow-none focus-visible:ring-primary";
const appointmentSchema = z.object({
  treatment: z.string().trim().min(1, "Choose a treatment or reason for your visit."),
  preferredDate: z.string().trim().min(1, "Choose a preferred date."),
  preferredTime: z.string().trim().min(1, "Choose an available time."),
  name: z.string().trim().min(2, "Enter your full name.").max(100, "Name must be under 100 characters."),
  phone: z.string().trim().regex(/^[+()\d\s-]{7,20}$/, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address.").max(255, "Email must be under 255 characters."),
  message: z.string().trim().max(1000, "Message must be under 1,000 characters."),
});

type AppointmentField = keyof z.infer<typeof appointmentSchema>;
type AppointmentDraft = Omit<Appointment, "status">;

const initialDraft: AppointmentDraft = { name: "", phone: "", email: "", preferredDate: "", preferredTime: "", treatment: "", message: "" };

function getDateLabel(value: string) {
  if (!value) return "Not selected";
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "long" }).format(date);
}

export function AppointmentForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [draft, setDraft] = useState<AppointmentDraft>(initialDraft);
  const [errors, setErrors] = useState<Partial<Record<AppointmentField, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const selectedTreatment = treatments.find((treatment) => treatment.slug === draft.treatment)?.title ?? "General consultation";
  const minDate = useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().slice(0, 10);
  }, []);
  const unavailableTimes = useMemo(() => {
    if (!draft.preferredDate) return new Set<string>();
    const day = new Date(`${draft.preferredDate}T12:00:00`).getDay();
    return new Set(day % 2 === 0 ? ["10:30", "15:30"] : ["12:00", "17:00"]);
  }, [draft.preferredDate]);

  function update(field: AppointmentField, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validateStep(fields: AppointmentField[]) {
    const result = appointmentSchema.safeParse(draft);
    const nextErrors: Partial<Record<AppointmentField, string>> = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as AppointmentField;
        if (fields.includes(field) && !nextErrors[field]) nextErrors[field] = issue.message;
      }
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) requestAnimationFrame(() => feedbackRef.current?.focus());
    return Object.keys(nextErrors).length === 0;
  }

  function continueToContact() {
    if (validateStep(["treatment", "preferredDate", "preferredTime"])) setStep(2);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateStep(["name", "phone", "email", "message"])) return;
    setIsSubmitting(true);
    const payload: Appointment = { ...draft, status: "pending" };
    void payload;
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setIsSubmitting(false);
    setStep(3);
  }

  if (step === 3) return (
    <div className="min-h-[520px] border-l-2 border-success bg-surface px-6 py-10 sm:px-10" role="status" aria-live="polite">
      <span className="flex size-12 items-center justify-center bg-success text-success-foreground"><Check /></span>
      <p className="eyebrow mt-8 text-success">REQUEST PREPARED</p>
      <h3 className="mt-3 max-w-lg font-display text-4xl leading-tight text-heading">Thank you, {draft.name.split(" ")[0]}.</h3>
      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">Your preferred visit is ready to be sent. This preview does not transmit personal details, and the appointment is not confirmed until the clinic contacts you.</p>
      <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
        <div className="flex justify-between gap-5 py-4"><dt className="text-muted-foreground">Visit</dt><dd className="text-right font-semibold text-heading">{selectedTreatment}</dd></div>
        <div className="flex justify-between gap-5 py-4"><dt className="text-muted-foreground">Preferred time</dt><dd className="text-right font-semibold text-heading">{getDateLabel(draft.preferredDate)} · {appointmentTimes.find((time) => time.value === draft.preferredTime)?.label}</dd></div>
        <div className="flex justify-between gap-5 py-4"><dt className="text-muted-foreground">Contact</dt><dd className="text-right font-semibold text-heading">{draft.phone}</dd></div>
      </dl>
      <Button variant="outline" className="mt-8" onClick={() => { setDraft(initialDraft); setErrors({}); setStep(1); }}>Start a new request</Button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="border-t-2 border-primary bg-surface px-5 py-7 sm:px-9 sm:py-9" aria-label="Appointment request form" noValidate>
      <ol className="mb-9 grid grid-cols-3 border-b border-border" aria-label="Booking progress">
        {["Visit", "Details", "Confirm"].map((label, index) => <li key={label} aria-current={index + 1 === step ? "step" : undefined} className={cn("relative min-w-0 pb-4 text-[9px] font-semibold uppercase text-muted-foreground sm:text-[10px]", index + 1 <= step && "text-primary", index + 1 === step && "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-secondary")}><span className="mr-1 font-display text-sm sm:mr-2 sm:text-base">0{index + 1}</span>{label}</li>)}
      </ol>

      {Object.keys(errors).length > 0 && <div ref={feedbackRef} tabIndex={-1} role="alert" className="mb-6 border-l-2 border-destructive bg-muted px-4 py-3 text-sm text-destructive outline-none"><p className="font-semibold">Please check the highlighted fields.</p><p className="mt-1 text-xs">Your information has been kept so you can correct it.</p></div>}

      {step === 1 && <div className="animate-fade-in">
        <div className="flex items-center gap-3"><CalendarDays className="size-5 text-secondary" /><h3 className="font-display text-2xl text-heading">Choose your preferred visit</h3></div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <label className="field-label sm:col-span-2">Treatment / reason<select className={`${fieldClass} w-full border`} value={draft.treatment} onChange={(event) => update("treatment", event.target.value)} aria-invalid={Boolean(errors.treatment)}><option value="">Select a treatment</option>{treatments.map((treatment) => <option key={treatment.id} value={treatment.slug}>{treatment.title}</option>)}<option value="consultation">General consultation</option></select>{errors.treatment && <span className="normal-case text-destructive" role="alert">{errors.treatment}</span>}</label>
          <label className="field-label sm:col-span-2">Preferred date<Input className={fieldClass} value={draft.preferredDate} onChange={(event) => { update("preferredDate", event.target.value); update("preferredTime", ""); }} type="date" min={minDate} aria-invalid={Boolean(errors.preferredDate)} />{errors.preferredDate && <span className="normal-case text-destructive" role="alert">{errors.preferredDate}</span>}</label>
        </div>
        <fieldset className="mt-7" disabled={!draft.preferredDate}><legend className="field-label mb-3">Available request times</legend><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{appointmentTimes.map((time) => { const unavailable = unavailableTimes.has(time.value); return <button key={time.value} type="button" disabled={unavailable || !draft.preferredDate} onClick={() => update("preferredTime", time.value)} className={cn("min-h-12 border px-3 text-sm font-semibold transition-colors", draft.preferredTime === time.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-heading hover:border-primary", unavailable && "cursor-not-allowed bg-muted text-muted-foreground line-through opacity-60")} aria-pressed={draft.preferredTime === time.value}>{time.label}</button>; })}</div>{!draft.preferredDate && <p className="mt-3 text-xs text-muted-foreground">Choose a date to see preferred times.</p>}{errors.preferredTime && <p className="mt-3 text-xs font-semibold text-destructive" role="alert">{errors.preferredTime}</p>}<p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="size-3.5" />Times shown are request windows and require clinic confirmation.</p></fieldset>
        <Button size="lg" type="button" className="mt-8 w-full sm:w-auto" onClick={continueToContact}>Continue to your details <ArrowRight /></Button>
      </div>}

      {step === 2 && <div className="animate-fade-in">
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-primary">YOUR PREFERRED VISIT</p><p className="mt-2 font-display text-xl text-heading">{getDateLabel(draft.preferredDate)} · {appointmentTimes.find((time) => time.value === draft.preferredTime)?.label}</p><p className="mt-1 text-sm text-muted-foreground">{selectedTreatment}</p></div><Button type="button" variant="link" className="h-auto justify-start p-0" onClick={() => setStep(1)}>Edit visit</Button></div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <label className="field-label"><span className="flex items-center gap-2"><UserRound className="size-3.5 text-secondary" />Full name</span><Input className={fieldClass} value={draft.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" maxLength={100} aria-invalid={Boolean(errors.name)} />{errors.name && <span className="normal-case text-destructive" role="alert">{errors.name}</span>}</label>
          <label className="field-label"><span className="flex items-center gap-2"><Phone className="size-3.5 text-secondary" />Phone</span><Input className={fieldClass} value={draft.phone} onChange={(event) => update("phone", event.target.value)} type="tel" inputMode="tel" autoComplete="tel" maxLength={20} aria-invalid={Boolean(errors.phone)} />{errors.phone && <span className="normal-case text-destructive" role="alert">{errors.phone}</span>}</label>
          <label className="field-label sm:col-span-2"><span className="flex items-center gap-2"><Mail className="size-3.5 text-secondary" />Email</span><Input className={fieldClass} value={draft.email} onChange={(event) => update("email", event.target.value)} type="email" autoComplete="email" maxLength={255} aria-invalid={Boolean(errors.email)} />{errors.email && <span className="normal-case text-destructive" role="alert">{errors.email}</span>}</label>
          <label className="field-label sm:col-span-2">Anything we should know? <span className="normal-case text-muted-foreground">(optional)</span><Textarea className="min-h-28 rounded-sm border-border bg-surface px-4 py-3 shadow-none focus-visible:ring-primary" value={draft.message} onChange={(event) => update("message", event.target.value)} maxLength={1000} />{errors.message && <span className="normal-case text-destructive" role="alert">{errors.message}</span>}</label>
        </div>
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row"><Button type="button" variant="outline" onClick={() => setStep(1)} disabled={isSubmitting}><ArrowLeft /> Back</Button><Button size="lg" type="submit" className="w-full sm:w-auto" disabled={isSubmitting} aria-describedby="submission-note">{isSubmitting ? <><LoaderCircle className="animate-spin" /> Preparing your request…</> : <>Prepare appointment request <ArrowRight /></>}</Button></div>
        <p id="submission-note" className="mt-3 text-xs text-muted-foreground" aria-live="polite">{isSubmitting ? "Please wait while your request is prepared. Do not close this page." : "Your appointment is confirmed only after the clinic contacts you."}</p>
      </div>}
    </form>
  );
}
