import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Clock, List, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "./components/header";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Stay organized and get more done
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  TaskMaster helps you manage your tasks, organize your life,
                  and achieve your goals with a simple and intuitive interface.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="px-8">
                    Get Started - It&apos;s Free
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[300px] sm:h-[400px] sm:w-[350px] md:h-[450px] md:w-[400px] lg:h-[500px] lg:w-[450px]">
                <Image
                  src="/task-landing.svg"
                  alt="TaskMaster App Screenshot"
                  fill
                  className="object-contain rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Everything you need to stay productive
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                TaskMaster comes packed with all the tools you need to organize
                your tasks and boost your productivity.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <List className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Task Management</h3>
              <p className="text-center text-muted-foreground">
                Create, organize, and prioritize your tasks with ease.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Clock className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Reminders</h3>
              <p className="text-center text-muted-foreground">
                Never miss a deadline with customizable reminders and
                notifications.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-center text-muted-foreground">
                Share tasks and projects with friends, family, or colleagues.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Star className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Smart Lists</h3>
              <p className="text-center text-muted-foreground">
                Automatically organize tasks based on due dates, priorities, and
                tags.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <h3 className="text-xl font-bold">Data Security</h3>
              <p className="text-center text-muted-foreground">
                Your data is encrypted and securely stored in the cloud.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 text-primary"
              >
                <path d="M2 12h5" />
                <path d="M17 12h5" />
                <path d="M12 2v5" />
                <path d="M12 17v5" />
                <path d="M4.93 4.93l3.54 3.54" />
                <path d="M15.54 15.54l3.54 3.54" />
                <path d="M4.93 19.07l3.54-3.54" />
                <path d="M15.54 8.46l3.54-3.54" />
              </svg>
              <h3 className="text-xl font-bold">Cross-Platform</h3>
              <p className="text-center text-muted-foreground">
                Access your tasks from anywhere on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Simple, intuitive, and powerful
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                TaskMaster is designed to be easy to use while providing
                powerful features to help you stay organized.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <Image
              src="/task-how-to-do-it.svg"
              width={500}
              height={400}
              alt="TaskMaster App Interface"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Create tasks</h3>
                    <p className="text-muted-foreground">
                      Quickly add new tasks with just a few taps. Set due dates,
                      priorities, and add notes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Organize with lists</h3>
                    <p className="text-muted-foreground">
                      Group related tasks into lists. Create lists for work,
                      personal, shopping, or any category you need.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Stay on track</h3>
                    <p className="text-muted-foreground">
                      Set reminders and receive notifications to ensure you
                      never miss an important task or deadline.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Loved by thousands of users
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Don&apos;t just take our word for it. Here&apos;s what our users
                have to say about TaskMaster.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "TaskMaster has completely transformed how I manage my daily
                  tasks. I&apos;m more productive than ever!"
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-3">
                <Image
                  src="/aiony-haust.jpg"
                  height={40}
                  width={40}
                  alt="Aiony Haust"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Aiony Haust</p>
                  <p className="text-xs text-muted-foreground">
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The collaboration features are game-changing. My team can now
                  work together seamlessly on projects."
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-3">
                <Image
                  src="/alex-suprun.jpg"
                  height={40}
                  width={40}
                  alt="Alex Suprun"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Alex Suprun</p>
                  <p className="text-xs text-muted-foreground">
                    Product Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "I&apos;ve tried many todo apps, but TaskMaster is by far the
                  most intuitive and feature-rich. Highly recommend!"
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-3">
                <Image
                  src="/julian-wan.jpg"
                  height={40}
                  width={40}
                  alt="Julian Wan"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Julian Wan</p>
                  <p className="text-xs text-muted-foreground">
                    Freelance Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Choose the plan that works best for you. All plans include a
                14-day free trial.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Free</h3>
                <p className="text-muted-foreground">
                  Perfect for getting started
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Up to 3 lists</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Up to 30 tasks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Basic reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Mobile app access</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/signup">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-muted-foreground">Perfect for individuals</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$5</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Unlimited lists</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Unlimited tasks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Advanced reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>File attachments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/signup?plan=pro">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Team</h3>
                <p className="text-muted-foreground">Perfect for small teams</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$12</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>User roles & permissions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Team analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/signup?plan=team">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Have questions? We&apos;ve got answers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Is there a mobile app?</h3>
              <p className="text-muted-foreground">
                Yes, TaskMaster is available on iOS and Android. You can
                download the app from the App Store or Google Play Store.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I sync across devices?</h3>
              <p className="text-muted-foreground">
                Your tasks will sync automatically across all your devices, so
                you can access them anywhere.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How secure is my data?</h3>
              <p className="text-muted-foreground">
                We take security seriously. All your data is encrypted both in
                transit and at rest, and we never share your information with
                third parties.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                Can I cancel my subscription?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. If you
                cancel, you&apos;ll still have access to your paid features
                until the end of your billing cycle.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                Is there a limit to how many tasks I can create?
              </h3>
              <p className="text-muted-foreground">
                Free accounts can create up to 30 tasks. Pro and Team accounts
                have unlimited tasks.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer a free trial?</h3>
              <p className="text-muted-foreground">
                Yes, all paid plans come with a 14-day free trial, no credit
                card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to get organized?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of users who are already boosting their
              productivity with TaskMaster.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link href="/signup">
              <Button size="lg" className="px-8">
                Get Started - It&apos;s Free
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
