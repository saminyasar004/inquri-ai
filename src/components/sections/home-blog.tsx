import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import Blog1 from "@/assets/images/Blog1.png";
import Blog2 from "@/assets/images/Blog2.png";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const posts: Post[] = [
  { id: 1, title: "Why Automations Belong in Field Service", excerpt: "Work smarter and reclaim hours every week.", category: "Workflow" },
  { id: 2, title: "What Is a Missed-Call Playbook?", excerpt: "Turn missed calls into booked revenue.", category: "Playbook" },
  { id: 3, title: "Phones Answering in Real Situations", excerpt: "See how AI handles everyday call flows.", category: "Demo" },
  { id: 4, title: "The Complete First-Call Handoff", excerpt: "From hello to booked — end to end.", category: "Guide" },
  { id: 5, title: "Smarter Call Routing with AI", excerpt: "Match callers to the right outcomes fast.", category: "How-to" },
  { id: 6, title: "Build a Receptionist Script for Every Trade", excerpt: "Templates you can adapt to your business.", category: "Templates" },
  { id: 7, title: "AI on the Phones: Best Practices", excerpt: "Tips for smooth rollouts and happier callers.", category: "Best practices" },
  { id: 8, title: "From Missed Calls to Booked Jobs", excerpt: "Playbooks that rescue revenue without headcount.", category: "Playbook" },
];

const HomeBlog: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <div className="w-full py-12">
      <div className="container">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h3 className="font-arialRounded text-3xl md:text-4xl">
              From our <span className="text-primary-500">blog</span>
            </h3>
            <p className="font-openSans text-sm text-[#B0B0B0] mt-2">Latest articles, guides and insights.</p>
          </div>
          <Button asChild variant="primary" size="sm" className="rounded-md hidden md:inline-flex">
            <Link to="/blog">
              View all
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="relative overflow-hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4 md:gap-6">
              {posts.map((post, idx) => (
                <article
                  key={post.id}
                  className="min-w-0 flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] rounded-xl border border-[#B0B0B0]/40 bg-black overflow-hidden"
                >
                  <img
                    src={idx % 2 === 0 ? Blog1 : Blog2}
                    alt={post.title}
                    className="h-36 md:h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[11px] text-primary-500">
                      <span className="inline-block">{post.category}</span>
                      <span className="-mb-[2px]">•</span>
                      <span>3 min read</span>
                    </div>
                    <h4 className="mt-2 font-semibold text-white text-base md:text-lg line-clamp-2">{post.title}</h4>
                    <p className="mt-1 text-[#B0B0B0] text-sm line-clamp-2">{post.excerpt}</p>
                    <Button asChild variant="ghost" size="sm" className="mt-2 px-0 text-primary-500">
                      <Link to={`/blog/${slugify(post.title)}`} className="inline-flex items-center">
                        Read article
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
