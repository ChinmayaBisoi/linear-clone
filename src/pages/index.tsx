import { HeaderAuth } from "~/components/HeaderAuth";
import { Logo } from "~/components/Logo";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

const featureBlocks = [
  {
    title: "Built for purpose",
    body: "Linear is shaped by the practices and principles of world-class product teams.",
  },
  {
    title: "Powered by AI agents",
    body: "Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.",
  },
  {
    title: "Designed for speed",
    body: "Reduces noise and restores momentum to help teams ship with high velocity and focus.",
  },
];

const productColumns = [
  {
    title: "Make product operations self-driving",
    items: [
      "Turn customer conversations into routed and labeled issues.",
      "Auto-prioritize incoming requests with a triage loop.",
      "Keep noisy intake out of your core sprint flow.",
    ],
  },
  {
    title: "Define the product direction",
    items: [
      "Plan from idea to launch with initiative-level visibility.",
      "Track milestones without losing issue-level granularity.",
      "Give teams one source of truth for roadmap context.",
    ],
  },
  {
    title: "Move work forward across teams and agents",
    items: [
      "Delegate complex issue execution end-to-end to coding agents.",
      "Collaborate with human engineers and agents in one timeline.",
      "Keep branch, PR, and cycle progress connected to execution.",
    ],
  },
];

const issueRows = [
  { code: "ENG-2703", title: "Faster app launch", status: "In Progress" },
  {
    code: "ENG-2085",
    title: "Reduce UI flicker during startup",
    status: "Todo",
  },
  { code: "ENG-2092", title: "Reduce startup delay from sync", status: "Todo" },
  {
    code: "ENG-2187",
    title: "Prevent duplicate ride requests",
    status: "Done",
  },
];

const sectionTracks = [
  {
    id: "intake",
    index: "1.0",
    title: "Make product operations self-driving",
    body: "Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team.",
    tags: [
      "Linear Agent +",
      "Triage +",
      "Customer Requests +",
      "Linear Asks +",
    ],
  },
  {
    id: "plan",
    index: "2.0",
    title: "Define the product direction",
    body: "Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.",
    tags: ["Projects +", "Documents +", "Initiatives +", "Visual planning +"],
  },
  {
    id: "build",
    index: "3.0",
    title: "Move work forward across teams and agents",
    body: "Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end.",
    tags: [
      "Issues +",
      "Agents +",
      "Linear MCP +",
      "Git automations +",
      "Cycles +",
    ],
  },
  {
    id: "review",
    index: "4.0",
    title: "Review PRs and agent output",
    body: "Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge all in one loop.",
    tags: ["Diffs (Coming soon)"],
  },
  {
    id: "monitor",
    index: "5.0",
    title: "Understand progress at scale",
    body: "Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.",
    tags: ["Pulse +", "Insights +", "Dashboards +"],
  },
];

const footerColumns = [
  {
    title: "Product",
    links: [
      "Intake",
      "Plan",
      "Build",
      "Diffs",
      "Monitor",
      "Pricing",
      "Security",
    ],
  },
  {
    title: "Features",
    links: [
      "Asks",
      "Agents",
      "Customer Requests",
      "Insights",
      "Mobile",
      "Integrations",
      "Changelog",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Customers",
      "Careers",
      "Blog",
      "Method",
      "Quality",
      "Brand",
    ],
  },
  {
    title: "Resources",
    links: [
      "Switch",
      "Download",
      "Documentation",
      "Developers",
      "Status",
      "Enterprise",
      "Startups",
    ],
  },
  {
    title: "Connect",
    links: ["Contact us", "Community", "X (Twitter)", "GitHub", "YouTube"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA"],
  },
];

export default function Home() {
  return (
    <div className="linear-grid flex min-h-screen flex-col bg-[#08090c] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <Logo size="sm" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a
              href="#product"
              className="transition-colors hover:text-zinc-100"
            >
              Product
            </a>
            <a
              href="#resources"
              className="transition-colors hover:text-zinc-100"
            >
              Resources
            </a>
            <a
              href="#customers"
              className="transition-colors hover:text-zinc-100"
            >
              Customers
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-zinc-100"
            >
              Pricing
            </a>
          </nav>
          <HeaderAuth />
        </div>
      </header>
      <main className="flex-1">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-20 md:pt-24">
          <Badge
            variant="outline"
            className="w-fit border-violet-300/30 text-violet-200"
          >
            New: Linear Diffs (Beta)
          </Badge>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              The product development system for teams and agents.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-400">
              Purpose-built for planning and building products. Designed for the
              AI era.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="rounded-full px-6">Get started</Button>
            <Button
              variant="secondary"
              className="rounded-full border border-white/15 bg-white/5 px-6 text-zinc-100 hover:bg-white/10"
            >
              Contact sales
            </Button>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-20 lg:grid-cols-[1.4fr_1fr]">
          <Card className="border border-white/10 bg-white/[0.04]">
            <CardContent className="p-0">
              <div className="border-b border-white/10 px-6 py-4 text-sm font-medium">
                Workspace
              </div>
              <div className="space-y-2 px-3 py-3">
                {issueRows.map((issue) => (
                  <div
                    key={issue.code}
                    className="flex items-center justify-between rounded-md border border-white/10 bg-black/20 px-3 py-2"
                  >
                    <div className="min-w-0">
                      <p className="text-xs text-zinc-400">{issue.code}</p>
                      <p className="truncate text-sm">{issue.title}</p>
                    </div>
                    <Badge
                      variant={issue.status === "Done" ? "default" : "outline"}
                      className="ml-3 shrink-0"
                    >
                      {issue.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/[0.04]">
            <CardContent className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                Weekly pulse
              </p>
              <p className="text-lg font-medium leading-snug">
                iOS implementation is mostly complete, but Android updates are
                still in progress.
              </p>
              <p className="text-sm text-zinc-400">
                Risk of timeline slip if remaining design decisions are not
                finalized.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="product" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-4 md:grid-cols-3">
            {featureBlocks.map((block) => (
              <Card
                key={block.title}
                className="border border-white/10 bg-white/[0.03]"
              >
                <CardContent className="space-y-3 p-6">
                  <h2 className="text-lg font-medium">{block.title}</h2>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {block.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="resources" className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="grid gap-4 md:grid-cols-3">
            {productColumns.map((column) => (
              <Card
                key={column.title}
                className="border border-white/10 bg-white/[0.03]"
              >
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-base font-semibold">{column.title}</h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="space-y-4">
            {sectionTracks.map((section) => (
              <Card
                key={section.id}
                className="border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]"
              >
                <CardContent className="space-y-5 p-6 md:p-8">
                  <div className="text-sm text-zinc-400">{section.index}</div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {section.title}
                  </h3>
                  <p className="max-w-3xl text-zinc-400">{section.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16">
          <Card className="border border-white/10 bg-white/[0.03]">
            <CardContent className="space-y-5 p-8">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Built for the future. Available today.
              </h3>
              <p className="max-w-3xl text-zinc-400">
                Linear powers over 25,000 product teams. From ambitious startups
                to major enterprises.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full px-6">Get started</Button>
                <Button variant="outline" className="rounded-full px-6">
                  Contact sales
                </Button>
                <Button variant="ghost" className="rounded-full px-6">
                  Open app
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-6">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-3">
                <h4 className="text-sm font-semibold text-zinc-200">
                  {column.title}
                </h4>
                <div className="space-y-2 text-sm text-zinc-400">
                  {column.links.map((link) => (
                    <a
                      key={link}
                      href="/"
                      className="block transition-colors hover:text-zinc-100"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
            <a href="/" className="transition-opacity hover:opacity-80">
              <Logo size="sm" />
            </a>
            <div className="flex flex-wrap items-center gap-4">
              <span>Privacy</span>
              <span>Terms</span>
              <span>DPA</span>
              <span>© Linear Clone</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
