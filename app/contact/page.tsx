"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2">
      <section>
        <p className="text-sm uppercase tracking-[0.22em] text-[#8a3d2f]">Contact</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
          Write to Noted.
        </h1>
        <dl className="mt-8 space-y-4 text-[#5e564e]">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#8a3d2f]">Email</dt>
            <dd className="text-lg text-[#1b1714]">hello@noted.reviews</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#8a3d2f]">Phone</dt>
            <dd className="text-lg text-[#1b1714]">+252 61 555 0188</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#8a3d2f]">Address</dt>
            <dd className="text-lg text-[#1b1714]">Makkah Al Mukarramah Road, Mogadishu</dd>
          </div>
        </dl>
      </section>
      <section>
        {sent ? (
          <p className="rounded-3xl bg-white p-6 text-lg">Message received. Noted will write back.</p>
        ) : (
          <form onSubmit={send} className="grid gap-4">
            <input required name="name" placeholder="Name" className="rounded-2xl border border-[#e6ddd2] bg-white px-4 py-3 outline-none focus:border-[#8a3d2f]" />
            <input required type="email" name="email" placeholder="Email" className="rounded-2xl border border-[#e6ddd2] bg-white px-4 py-3 outline-none focus:border-[#8a3d2f]" />
            <textarea required name="message" rows={5} placeholder="Message" className="rounded-2xl border border-[#e6ddd2] bg-white px-4 py-3 outline-none focus:border-[#8a3d2f]" />
            <button className="rounded-full border border-[#8a3d2f] px-5 py-3 text-[#8a3d2f] transition hover:-translate-y-0.5 hover:bg-[#8a3d2f] hover:text-white">
              Send message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
