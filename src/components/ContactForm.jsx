import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { emailJsEnabled, site, whatsappLink } from "../config";

const field =
  "w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { name: "", email: "", message: "", website: "" } });

  const onSubmit = async (data) => {
    if (data.website) return; // honeypot: bots fill this hidden field

    if (!emailJsEnabled) {
      // No sending service configured: hand the message to WhatsApp instead of faking a send.
      const text = `Hello Sharifullah, I'm ${data.name} (${data.email}).\n\n${data.message}`;
      window.open(whatsappLink(text), "_blank", "noopener");
      return;
    }

    setStatus("loading");
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        site.emailjs.serviceId,
        site.emailjs.templateId,
        { from_name: data.name, reply_to: data.email, message: data.message },
        { publicKey: site.emailjs.publicKey }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-5 p-6 sm:p-8" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">Your name</label>
        <input
          id="name"
          autoComplete="name"
          className={field}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-err" : undefined}
          {...register("name", { required: "Please enter your name.", minLength: { value: 2, message: "Name must be at least 2 characters." } })}
        />
        {errors.name && <p id="name-err" role="alert" className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">Your email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={field}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-err" : undefined}
          {...register("email", {
            required: "Please enter your email.",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
          })}
        />
        {errors.email && <p id="email-err" role="alert" className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">Message</label>
        <textarea
          id="message"
          rows={5}
          className={`${field} resize-y`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : undefined}
          {...register("message", { required: "Please write a message.", minLength: { value: 10, message: "Message must be at least 10 characters." } })}
        />
        {errors.message && <p id="message-err" role="alert" className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      {/* Honeypot field for spam bots; hidden from people and assistive tech */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full disabled:opacity-60">
        {status === "loading" ? (
          <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending...</>
        ) : emailJsEnabled ? (
          <><Send size={18} aria-hidden="true" /> Send message</>
        ) : (
          <><MessageCircle size={18} aria-hidden="true" /> Send via WhatsApp</>
        )}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 size={18} aria-hidden="true" /> Message sent. I'll reply as soon as I can.</p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-red-400">
            <AlertCircle size={18} aria-hidden="true" /> The message could not be sent. Please use WhatsApp or LinkedIn instead.
          </p>
        )}
      </div>
    </form>
  );
}
