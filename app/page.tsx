import Link from "next/link";
import { categories, categorySlug } from "./reviews";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm uppercase tracking-[0.22em] text-[#8a3d2f]">Noted</p>
      <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-none sm:text-7xl">
        Choose a place.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-[#5e564e]">
        Open a type, then a name. The photo comes first, then the review.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${categorySlug(category)}`}
            className="card rounded-[1.4rem] border border-transparent bg-white p-8 shadow-[0_12px_30px_rgba(27,23,20,0.05)]"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl">{category}</h2>
            <p className="mt-2 text-[#5e564e]">4 reviews</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
