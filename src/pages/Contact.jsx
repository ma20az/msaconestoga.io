import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSending(true);

      await emailjs.sendForm(
        "service_988l2r9",
        "template_fhnzefn",
        formRef.current,
        "6mHV5EQmGVwJ3HebC"
      );

      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#0F1C2E] dark:text-white">
            Contact Conestoga MSA
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-gray-600 dark:text-white/70">
            Reach out for events, collaborations, or general inquiries. We’ll
            get back to you as soon as possible.
          </p>
        </div>

        {/* Content */}
        <div className="grid min-w-0 gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Form Card */}
          <div className="w-full min-w-0 p-6 bg-white shadow-md sm:p-8 dark:bg-white/5 dark:border dark:border-white/10 rounded-2xl">
            <h3 className="text-xl font-semibold text-[#0F1C2E] dark:text-white mb-6">
              Send a message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="min-w-0 space-y-5"
            >
              <div className="min-w-0">
                <label className="block text-sm font-medium text-[#0F1C2E] dark:text-white/80 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full min-w-0 rounded-xl border border-gray-200 dark:border-white/10
                             bg-white dark:bg-white/5 px-4 py-3
                             text-[#0F1C2E] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40
                             outline-none focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/20
                             transition"
                />
              </div>

              <div className="min-w-0">
                <label className="block text-sm font-medium text-[#0F1C2E] dark:text-white/80 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full min-w-0 rounded-xl border border-gray-200 dark:border-white/10
                             bg-white dark:bg-white/5 px-4 py-3
                             text-[#0F1C2E] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40
                             outline-none focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/20
                             transition"
                />
              </div>

              <div className="min-w-0">
                <label className="block text-sm font-medium text-[#0F1C2E] dark:text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we help?"
                  className="w-full min-w-0 rounded-xl border border-gray-200 dark:border-white/10
                             bg-white dark:bg-white/5 px-4 py-3
                             text-[#0F1C2E] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40
                             outline-none focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/20
                             transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-full bg-[#0F1C2E] text-white font-semibold
                           py-3 hover:bg-[#162B45] transition
                           dark:bg-[#C9A24D] dark:text-[#0F1C2E] dark:hover:bg-[#b8923f]
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>

              <p className="text-xs text-center text-gray-500 dark:text-white/50">
                By submitting, you agree to be contacted by Conestoga MSA.
              </p>
            </form>
          </div>

          {/* Info Card */}
          <div className="w-full min-w-0 bg-[#0F1C2E] rounded-2xl shadow-md p-6 sm:p-8 text-white dark:bg-white/5 dark:border dark:border-white/10">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="leading-relaxed text-white/80 dark:text-white/70">
              Prefer quick updates? Follow our socials through Linktree. For
              official inquiries, email is best.
            </p>

            <div className="mt-8 space-y-4 text-white/90 dark:text-white/80">
              <div className="flex items-start min-w-0 gap-3">
                <span className="text-[#C9A24D]">📧</span>
                <div className="min-w-0">
                  <p className="font-medium text-white">Email</p>
                  <p className="break-words text-white/80 dark:text-white/60">
                    csistudentexperience@conestogac.on.ca
                  </p>
                </div>
              </div>

              <div className="flex items-start min-w-0 gap-3">
                <span className="text-[#C9A24D]">📍</span>
                <div className="min-w-0">
                  <p className="font-medium text-white">Location</p>
                  <p className="break-words text-white/80 dark:text-white/60">
                    Conestoga College - Doon
                  </p>
                </div>
              </div>

              <div className="flex items-start min-w-0 gap-3">
                <span className="text-[#C9A24D]">🔗</span>
                <div className="min-w-0">
                  <p className="font-medium text-white">Linktree</p>
                  <a
                    href="https://linktr.ee/msaconestoga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A24D] hover:underline break-words"
                  >
                    View our socials & updates
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 mt-10 border rounded-2xl bg-white/5 border-white/10 dark:bg-white/5 dark:border-white/10">
              <p className="text-sm text-white/80 dark:text-white/60">
                Tip: If you’re reaching out about an event, include your
                preferred date/time and what you’d like to collaborate on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
