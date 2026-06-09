import { cn } from "@/lib/utils.ts";
import Marquee from "@/modules/core/design-system/marquee.tsx";

const reviews = [
  {
    name: "AstroJS",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/svg/logos/astro.svg",
  },
  {
    name: "HTML",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/svg/logos/html.svg",
  },
  {
    name: "NextJS",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/svg/logos/nextjs.svg",
  },
  {
    name: "Nuxt",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/svg/logos/nuxt.svg",
  },
  {
    name: "Preact",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/svg/logos/preact.svg",
  },
  {
    name: "React",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/svg/logos/react.svg",
  },
	  {
    name: "Svelte",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/svg/logos/svelte.svg",
  },
	  {
    name: "Vue",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/svg/logos/vue.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  img,
	name,
}: {
  img: string;
		name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
				<img width="50" height="50" alt={name} src={img} loading="lazy" decoding="async" />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg">
			<Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-background"></div>
    </div>
  );
}
