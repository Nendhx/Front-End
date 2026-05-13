import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-200">
            About NHS Platform
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Building an inclusive learning experience for every student and teacher.
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            Our mission is to deliver a modern, accessible educational platform that connects learners, educators, and resources in one polished experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Empower students and educators through intuitive tools, meaningful content, and seamless collaboration.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Our Vision</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Create a trusted digital campus where every learner can explore, grow, and succeed.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Our Values</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Innovation, inclusivity, trust, and continuous support are at the heart of every experience.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why Choose Us</h2>
            <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">✓</span>
                <span>Modern interface built for students and teachers.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">✓</span>
                <span>Fast access to content, schedules, and help.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">✓</span>
                <span>Responsive experience across every device.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What We Offer</h2>
            <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Student Profiles</p>
                <p className="mt-2 text-sm">Track progress, connect with peers, and access personalized resources.</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Teacher Tools</p>
                <p className="mt-2 text-sm">Manage classes, share content, and support learners efficiently.</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Community Support</p>
                <p className="mt-2 text-sm">Stay connected with announcements, help channels, and events.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/contact-us">
            <button className="inline-flex rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
              Contact our team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
