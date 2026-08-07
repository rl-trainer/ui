import Link from "next/link";

const FEATURES = [
  {
    title: "Log Your Sessions",
    description:
      "Track every training pack rep and result so you always know what you've worked on.",
  },
  {
    title: "Earn Points",
    description:
      "Build up a balance as you train, with multipliers that reward consistency.",
  },
  {
    title: "See Your Growth",
    description:
      "Watch your progress over time and spot exactly where to focus next.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <section className="flex flex-col items-center gap-6 px-6 py-32 text-center">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Train smarter. Track every rep.
        </h1>
        <p className="max-w-xl text-lg text-foreground/70">
          RL Trainer helps you log your Rocket League training, earn points
          for showing up, and see your progress add up over time.
        </p>
        <Link
          href="/signup"
          className="mt-2 rounded-full bg-accent px-8 py-3 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Sign Up
        </Link>
      </section>

      <section className="border-t border-foreground/10 px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 border-t border-foreground/10 px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to level up your training?
        </h2>
        <Link
          href="/signup"
          className="rounded-full bg-accent px-8 py-3 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
