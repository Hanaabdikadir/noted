import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categorySlug, reviews } from "../../reviews";

export function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.slug }));
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = reviews.find((item) => item.slug === slug);
  if (!review) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <div className="relative h-[420px] overflow-hidden rounded-[2rem] sm:h-[520px]">
        <Image src={review.image} alt={review.alt} fill className="object-cover" priority />
      </div>
      <article className="mt-8">
        <p className="text-sm uppercase tracking-[0.22em] text-[#8a3d2f]">{review.score}</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none">{review.title}</h1>
        <p className="mt-4 text-lg text-[#5e564e]">{review.summary}</p>
        <h2 className="mt-8 font-[family-name:var(--font-display)] text-2xl">Review</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[#5e564e]">
          {review.saw.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <Link href={`/category/${categorySlug(review.category)}`} className="mt-8 inline-block text-[#8a3d2f]">
          Back to {review.category}
        </Link>
      </article>
    </main>
  );
}
