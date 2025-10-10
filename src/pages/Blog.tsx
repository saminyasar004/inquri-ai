import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import GOT from "@/assets/images/GT.png";
import Blog1 from "@/assets/images/Blog1.png";
import Blog2 from "@/assets/images/Blog2.png";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const featured: Post = {
  id: 0,
  title: "Why Australian Businesses Need an AI Receptionist",
  excerpt: "The right AI on phones can transform how teams work.",
  category: "Case study",
};

const posts: Post[] = [
  { id: 1, title: "Why Automations Belong in Field Service", excerpt: "Work smarter and reclaim hours every week.", category: "Workflow" },
  { id: 2, title: "What Is a Missed-Call Playbook?", excerpt: "Turn missed calls into booked revenue.", category: "Playbook" },
  { id: 3, title: "Phones Answering in Real Situations", excerpt: "See how AI handles everyday call flows.", category: "Demo" },
  { id: 4, title: "The Complete First-Call Handoff", excerpt: "From hello to booked — end to end.", category: "Guide" },
  { id: 5, title: "Smarter Call Routing with AI", excerpt: "Match callers to the right outcomes fast.", category: "How-to" },
  { id: 6, title: "Build a Receptionist Script for Every Trade", excerpt: "Templates you can adapt to your business.", category: "Templates" },
  { id: 7, title: "AI on the Phones: Best Practices", excerpt: "Tips for smooth rollouts and happier callers.", category: "Best practices" },
  { id: 8, title: "From Missed Calls to Booked Jobs", excerpt: "Playbooks that rescue revenue without headcount.", category: "Playbook" },
  { id: 9, title: "Measuring Call Performance with KPIs", excerpt: "Metrics that matter when AI answers.", category: "Analytics" },
];

export default function Blog() {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    const timer = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => {
      clearInterval(timer);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="w-full py-10">
      <div className="container">
        <header className="mb-6">
          <h1 className="font-arialRounded text-4xl">
            Blog and <span className="text-primary-500">insights</span>
          </h1>
          <p className="font-openSans text-sm text-[#B0B0B0] mt-2">
            The latest industry news, seminars, technologies, and resources.
          </p>
        </header>

        {/* Featured carousel (hero) */}
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-xl border border-[#B0B0B0]/40 bg-black h-[340px] md:h-[420px] lg:h-[60vh] xl:h-[50vh] 2xl:h-[45vh] max-h-[640px]">
            <div ref={emblaRef} className="h-full overflow-hidden">
              <div className="flex h-full touch-pan-y touch-action-pan-y">
                {/* First slide: featured */}
                <div className="min-w-0 flex-[0_0_100%] relative h-full">
                  <img
                    src={GOT}
                    alt="Featured article"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-flex items-center text-xs font-semibold text-black bg-[#D7D9FB] px-2 py-1 rounded">{featured.category}</span>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">{featured.title}</h2>
                    <p className="text-sm text-[#CFCFE6] mt-1">{featured.excerpt}</p>
                    <Button asChild variant="primary" size="sm" className="mt-4 rounded-md px-4 py-2">
                      <Link to={`/blog/${slugify(featured.title)}`}>
                        Read article
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
                {/* Additional slides from posts */}
                {posts.map((post, idx) => (
                  <div key={`feat-slide-${post.id}`} className="min-w-0 flex-[0_0_100%] relative h-full">
                    <img
                      src={idx % 2 === 0 ? Blog1 : Blog2}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="inline-flex items-center text-xs font-semibold text-black bg-[#D7D9FB] px-2 py-1 rounded">{post.category}</span>
                      <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">{post.title}</h3>
                      <p className="text-sm text-[#CFCFE6] mt-1 line-clamp-2">{post.excerpt}</p>
                      <Button asChild variant="primary" size="sm" className="mt-3 rounded-md">
                        <Link to={`/blog/${slugify(post.title)}`}>
                          Read article
                          <ArrowRight size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {[featured, ...posts].map((_, i) => (
              <button
                key={`dot-${i}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${selectedIndex === i ? "bg-[#06D206]" : "bg-[#2a2a2a]"}`}
              />
            ))}
          </div>
        </section>

        {/* Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <article
                key={post.id}
                onClick={() => navigate(`/blog/${slugify(post.title)}`)}
                className="group overflow-hidden rounded-xl border border-[#B0B0B0]/40 bg-black cursor-pointer"
              >
                <img src={idx % 2 === 0 ? Blog1 : Blog2} alt={post.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-primary-500">
                    <span className="inline-block">{post.category}</span>
                    <span className="-mb-[2px]">•</span>
                    <span>3 min read</span>
                  </div>
                  <h3 className="mt-2 font-semibold text-white">{post.title}</h3>
                  <p className="mt-1 text-[#B0B0B0] text-sm">{post.excerpt}</p>
                  <div className="mt-3 inline-flex items-center text-primary-500 font-semibold">
                    Read more
                    <ArrowRight className="ml-1 transition-transform group-hover:translate-x-0.5" size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-10">
            <Button size="sm" className="rounded-md border border-[#40DF40] bg-transparent text-primary-500 hover:bg-[#0f0f0f]">
              <ChevronLeft size={16} /> Prev
            </Button>

            <div className="flex items-center gap-2">
              <button className="h-9 w-9 rounded-md bg-[#00FF00] text-black font-semibold">1</button>
              <button className="h-9 w-9 rounded-md border border-[#2d2d2d] text-[#B0B0B0]">2</button>
              <button className="h-9 w-9 rounded-md border border-[#2d2d2d] text-[#B0B0B0]">3</button>
            </div>

            <Button size="sm" className="rounded-md border border-[#40DF40] bg-transparent text-primary-500 hover:bg-[#0f0f0f]">
              Next <ChevronRight size={16} />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
