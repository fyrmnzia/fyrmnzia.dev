import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-xl mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-6">Contact</h3>
      <p className="text-white/60 mb-6">
        Feel free to reach out via email. I'm open to collaboration, freelance,
        or just chat.
      </p>
      <Link
        href="mailto:fyrmnzia@gmail.com"
        className="inline-block px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
      >
        fyrmnzia@gmail.com
      </Link>
    </section>
  );
}
