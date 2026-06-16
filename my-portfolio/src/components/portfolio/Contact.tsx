import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import emailjs from "@emailjs/browser";
const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

const contactLinks = [
  { icon: Mail, label: "Email", value: "gaurav94174@gmail.com", href: "mailto:gaurav94174@gmail.com", target: "_blank" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "/in/gaurav94", href: "https://www.linkedin.com/in/gaurav94", target: "_blank" },
  { icon: GithubIcon, label: "GitHub", value: "@Gaurav012221842", href: "https://github.com/Gaurav012221842", target: "_blank" },
  { icon: MapPin, label: "Location", value: "Bangalore, India", href: "#", target: "_blank" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  const result = schema.safeParse(form);

  if (!result.success) {
    toast.error(result.error.issues[0]?.message ?? "Invalid input");
    return;
  }

  try {
    setLoading(true);
    console.log("Service:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    toast.error("Failed to send message");
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, a project, or just want to chat? My inbox is open."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-3">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-accent-cyan/30">
                    <c.icon className="h-5 w-5 text-brand-glow" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="truncate font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="rounded-2xl glass p-6 md:p-8 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background/40 px-4 py-2.5 text-sm outline-none ring-ring/40 transition-all focus:border-brand focus:ring-2"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background/40 px-4 py-2.5 text-sm outline-none ring-ring/40 transition-all focus:border-brand focus:ring-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-input bg-background/40 px-4 py-3 text-sm outline-none ring-ring/40 transition-all focus:border-brand focus:ring-2"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.01] disabled:opacity-60 glow sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
