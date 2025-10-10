import { Button } from "@/components/ui/button";
import { Calendar, Facebook, Linkedin, User, Twitter, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import GOT from "@/assets/images/GOT.jpg";
import Blog1 from "@/assets/images/Blog1.png";
import Blog2 from "@/assets/images/Blog2.png";

type TocItem = { id: string; label: string };

const toc: TocItem[] = [
  { id: "how-it-works", label: "How an AI Receptionist Works" },
  { id: "challenges", label: "Business Challenges Solved" },
  { id: "standout", label: "Standout Features" },
  { id: "benefits", label: "How Does AI Receptionist Benefit" },
  { id: "results", label: "Real Impact: Australian Insights" },
  { id: "conclusion", label: "Conclusion" },
];

export default function BlogPost() {
  return (
    <div className="w-full py-10">
      <div className="container">
        {/* Title + meta */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="font-arialRounded text-4xl text-primary-500">
              Why Australian Businesses Need an AI Receptionist
            </h1>
            <p className="font-openSans text-sm text-[#B0B0B0] mt-2">
              The benefits of using an AI receptionist for your business
            </p>
          </div>

          <div className="hidden md:flex flex-col text-right text-sm leading-6">
            <div className="text-[#A6A6A6] flex items-center justify-end gap-2">
              <User size={16} /> <span>Written by</span>
            </div>
            <div className="font-semibold text-[#CFCFE6]">Sophie Bankoher</div>
            <div className="text-[#A6A6A6] flex items-center justify-end gap-2 mt-3">
              <Calendar size={16} /> <span>Published on</span>
            </div>
            <div className="text-[#CFCFE6]">Aug 14, 2025</div>
          </div>
        </div>

        {/* Hero image */}
        <div className="rounded-xl overflow-hidden border border-[#B0B0B0]/40 mt-6">
          <img
            src={GOT}
            alt="AI receptionist article banner"
            className="w-full h-[340px] md:h-[520px] lg:h-[680px] xl:h-[760px] object-cover"
          />
        </div>

        {/* Content with table of contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <aside className="lg:col-span-3">
            <div className="rounded-lg border border-[#2d2d2d] p-4 bg-black/60 sticky top-24">
              <h4 className="text-sm font-semibold text-[#CFCFE6] mb-3">Table of contents</h4>
              <ul className="space-y-2 text-sm">
                {toc.map((item, idx) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block hover:text-primary-500 ${idx === 0 ? "text-primary-500" : "text-[#B0B0B0]"}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mt-5">
                <a href="#" aria-label="Share on X" className="p-2 rounded bg-[#0e0e0e] hover:bg-[#171717]">
                  <Twitter size={16} />
                </a>
                <a href="#" aria-label="Share on Facebook" className="p-2 rounded bg-[#0e0e0e] hover:bg-[#171717]">
                  <Facebook size={16} />
                </a>
                <a href="#" aria-label="Share on LinkedIn" className="p-2 rounded bg-[#0e0e0e] hover:bg-[#171717]">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <section id="how-it-works" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">How an AI Receptionist Works</h2>
              <p className="mt-3 text-[#B0B0B0]">
                Before diving into the advantages, let’s break down how an AI receptionist operates and why it
                outperforms traditional systems. Think of it as a human receptionist powered by AI.
              </p>
              <h3 className="mt-6 text-xl font-semibold text-[#D7D9FB]">Instant call handling</h3>
              <p className="mt-2 text-[#B0B0B0]">
                Many Australian businesses lose leads because calls go unanswered during peak periods or after hours.
                An AI receptionist answers instantly, 24/7 — without placing customers on hold.
              </p>
              <h3 className="mt-6 text-xl font-semibold text-[#D7D9FB]">Smart routing</h3>
              <p className="mt-2 text-[#B0B0B0]">
                Using natural language understanding, the AI identifies caller intent and routes them to the right
                outcome quickly — reducing back‑and‑forth and overall call handling time.
              </p>
              <h3 className="mt-6 text-xl font-semibold text-[#D7D9FB]">Knowledge base lookups</h3>
              <p className="mt-2 text-[#B0B0B0]">
                The agent can search policies, price books, and FAQs while talking, so answers are consistent and
                accurate. You control the source of truth.
              </p>
              <h3 className="mt-6 text-xl font-semibold text-[#D7D9FB]">Multi‑language support</h3>
              <p className="mt-2 text-[#B0B0B0]">
                For diverse communities, the agent can greet and respond in multiple languages to reduce friction for
                callers and expand reach.
              </p>
            </section>

            <section id="challenges" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">Business Challenges Solved by AI</h2>
              <p className="mt-3 text-[#B0B0B0]">
                Missed calls, long waits, and manual note taking slow teams down. AI automation helps capture details,
                schedule jobs, and hand off requests to the right person without friction.
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-[#B0B0B0]">
                <li>After‑hours coverage without staffing overhead</li>
                <li>Consistent qualification questions every time</li>
                <li>Automatic logging of caller details and intent</li>
                <li>Faster triage to the right queue or calendar</li>
              </ul>
            </section>

            <section id="standout" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">Standout Features of an AI Receptionist</h2>
              <ul className="mt-3 space-y-2 text-[#B0B0B0] list-disc pl-5">
                <li>Natural, human‑like conversation quality</li>
                <li>Real‑time CRM and scheduling integrations</li>
                <li>Configurable scripts and escalation paths</li>
                <li>Live transcription and call summaries</li>
                <li>Spam detection and auto‑blocking for nuisance callers</li>
                <li>Consent, compliance, and redaction options</li>
              </ul>
              <p className="mt-3 text-[#B0B0B0]">
                These capabilities can be tailored per business unit, so the experience feels bespoke while maintaining
                standards.
              </p>
            </section>

            <section id="benefits" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">How Does an AI Receptionist Benefit Australian Teams?</h2>
              <p className="mt-3 text-[#B0B0B0]">
                Teams reclaim time, customers get faster responses, and businesses convert more enquiries into booked
                work. It’s a dependable front‑door for every call.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div className="rounded-md border border-[#2d2d2d] p-4">
                  <h4 className="font-semibold text-white">For operations</h4>
                  <ul className="mt-2 list-disc pl-5 text-[#B0B0B0] space-y-1">
                    <li>Less time on intake; more on delivery</li>
                    <li>Cleaner handoffs with structured notes</li>
                    <li>Better forecast of appointment demand</li>
                  </ul>
                </div>
                <div className="rounded-md border border-[#2d2d2d] p-4">
                  <h4 className="font-semibold text-white">For customers</h4>
                  <ul className="mt-2 list-disc pl-5 text-[#B0B0B0] space-y-1">
                    <li>Instant answers and fewer transfers</li>
                    <li>24/7 response even after hours</li>
                    <li>Faster bookings with fewer back‑and‑forths</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="results" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">Real Impact: Australian Insights & Results</h2>
              <p className="mt-3 text-[#B0B0B0]">
                Companies report higher answer rates and better CSAT after deploying AI on phones. With better data
                capture and routing, downstream teams can focus on delivery.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-[#CFCFE6]">
                <div className="rounded-md border border-[#2d2d2d] p-4">
                  <div className="text-3xl font-semibold text-primary-500">+65%</div>
                  <div className="text-sm text-[#B0B0B0]">Increase in answered calls</div>
                </div>
                <div className="rounded-md border border-[#2d2d2d] p-4">
                  <div className="text-3xl font-semibold text-primary-500">‑35%</div>
                  <div className="text-sm text-[#B0B0B0]">Lower average handling time</div>
                </div>
                <div className="rounded-md border border-[#2d2d2d] p-4">
                  <div className="text-3xl font-semibold text-primary-500">+22%</div>
                  <div className="text-sm text-[#B0B0B0]">More bookings from inbound</div>
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-4 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">Conclusion</h2>
              <p className="mt-3 text-[#B0B0B0]">
                An AI receptionist helps businesses respond instantly and consistently. It improves customer
                experience, boosts conversion, and frees staff to focus on high‑value work.
              </p>
              <p className="mt-2 text-[#B0B0B0]">
                When you’re ready, we can tailor the call flows to your trade, region, and tooling — so you get value
                on day one.
              </p>
              <Button variant="primary" size="sm" className="mt-6">Talk to our team</Button>
            </section>
          </main>
        </div>

        {/* From the blog */}
        <section className="mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-arialRounded text-primary-500">From the blog</h3>
              <p className="mt-2 text-[#B0B0B0] text-sm">
                The latest industry news, interviews, technologies, and resources.
              </p>
              <Button asChild variant="primary" size="sm" className="mt-4 rounded-md">
                <Link to="/blog">View all posts</Link>
              </Button>
            </div>

            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <article className="rounded-xl overflow-hidden border border-[#2d2d2d] bg-black">
                  <Link to="/blog/what-are-chatbots" className="block">
                    <img src={Blog1} alt="What Are Chatbots?" className="w-full h-44 object-cover" />
                    <div className="p-4">
                      <div className="text-primary-500 font-semibold inline-flex items-center">
                        What Are Chatbots?
                        <ArrowUpRight size={16} className="ml-1" />
                      </div>
                      <p className="mt-1 text-[#B0B0B0] text-sm">
                        Understand what chatbots are and how they play an important role for different businesses nowadays.
                      </p>
                    </div>
                  </Link>
                </article>

                {/* Card 2 */}
                <article className="rounded-xl overflow-hidden border border-[#2d2d2d] bg-black">
                  <Link to="/blog/ai-phone-answering-vs-real-human-answering-service" className="block">
                    <img src={Blog2} alt="AI Phone Answering vs. Human Answering" className="w-full h-44 object-cover" />
                    <div className="p-4">
                      <div className="text-primary-500 font-semibold inline-flex items-center">
                        AI Phone Answering vs. Real (Human) Answering Service
                        <ArrowUpRight size={16} className="ml-1" />
                      </div>
                      <p className="mt-1 text-[#B0B0B0] text-sm">
                        Comparing AI phone services and traditional answering services.
                      </p>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
