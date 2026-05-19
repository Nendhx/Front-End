import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-900 px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-200">
              Contact Center
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Reach out to us with ease.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              Whether you have a question, need support, or want to share feedback, our team is ready to help. Use the form or contact details below to connect instantly.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">support@nhs.edu.mn</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Phone</p>
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">+976 9911 2233</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 sm:p-10">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Send us a message</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Contact form</h2>
            </div>
            <form className="space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
                <input type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
                <textarea rows="5" placeholder="Tell us how we can help" className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900" />
              </label>
              <button type="button" className="cursor-pointer w-full rounded-3xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Office</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Ulaanbaatar, Mongolia</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Hours</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Support</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">We respond within 24 hours.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">Looking for more?</p>
          <Link href="/about-us" className="mt-4 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
            Learn more about us
          </Link>
        </div>
      </div>
    </div>
  );
}
