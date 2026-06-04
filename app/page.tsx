"use client"

import ApplyForm from "@/components/apply-form"

export default function Home() {
return ( <div className="bg-black text-white min-h-screen font-sans">

```
  {/* HEADER */}
  <header className="flex justify-between items-center px-8 md:px-12 py-6 border-b border-yellow-500/10">
    <div>
      <h1 className="text-yellow-500 font-serif text-xl font-bold">
        LEO OFM ELITE
      </h1>
      <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase">
        Private Creator Management
      </p>
    </div>

    <nav className="hidden md:flex space-x-8 text-sm text-gray-300">
      <a href="#services" className="hover:text-yellow-500">
        Services
      </a>
      <a href="#process" className="hover:text-yellow-500">
        Process
      </a>
      <a href="#apply" className="hover:text-yellow-500">
        Apply
      </a>
    </nav>
  </header>

  {/* HERO */}
  <section className="relative min-h-screen flex items-center justify-center text-center px-6">
    <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent blur-3xl" />

    <div className="relative z-10 max-w-5xl">
      <p className="uppercase tracking-[0.35em] text-xs text-yellow-500 mb-6">
        Exclusive Creator Partnerships
      </p>

      <h1 className="text-5xl md:text-7xl font-serif text-yellow-500 leading-tight mb-8">
        Private Management For Ambitious Creators
      </h1>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
        Leo OFM Elite helps creators build scalable subscription businesses
        through audience acquisition, monetization systems and strategic growth.
      </p>

      <div className="flex justify-center">
        <a
          href="#apply"
          className="bg-yellow-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Apply For Private Management →
        </a>
      </div>

      <p className="text-gray-600 text-sm mt-8">
        Applications are reviewed individually.
        We only partner with creators aligned with our long-term growth standards.
      </p>
    </div>
  </section>

  {/* SERVICES */}
  <section
    id="services"
    className="py-32 px-6 border-t border-yellow-500/10"
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-serif text-yellow-500 mb-4">
        Our Services
      </h2>

      <p className="text-center text-gray-500 mb-16">
        A complete growth infrastructure for creators looking to scale.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-yellow-500/20 p-8 rounded-xl">
          <h3 className="text-yellow-500 mb-3">
            Creator Growth Strategy
          </h3>
          <p className="text-gray-400 text-sm">
            Personalized growth roadmap built around your content,
            audience and long-term objectives.
          </p>
        </div>

        <div className="border border-yellow-500/20 p-8 rounded-xl">
          <h3 className="text-yellow-500 mb-3">
            Monetization Systems
          </h3>
          <p className="text-gray-400 text-sm">
            Revenue optimization through pricing, offers,
            retention and conversion strategies.
          </p>
        </div>

        <div className="border border-yellow-500/20 p-8 rounded-xl">
          <h3 className="text-yellow-500 mb-3">
            Audience Acquisition
          </h3>
          <p className="text-gray-400 text-sm">
            Sustainable traffic systems focused on long-term growth.
          </p>
        </div>

        <div className="border border-yellow-500/20 p-8 rounded-xl">
          <h3 className="text-yellow-500 mb-3">
            Private Management
          </h3>
          <p className="text-gray-400 text-sm">
            Strategic support, performance monitoring and guidance.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* STATS */}
  <section className="py-24 border-y border-yellow-500/10">
    <div className="flex flex-wrap justify-center gap-20 text-center">
      <div>
        <h4 className="text-yellow-500 text-3xl font-serif">
          Selective
        </h4>
        <p className="text-gray-500 text-sm mt-2">
          Limited creator partnerships
        </p>
      </div>

      <div>
        <h4 className="text-yellow-500 text-3xl font-serif">
          Private
        </h4>
        <p className="text-gray-500 text-sm mt-2">
          Management & monetization
        </p>
      </div>

      <div>
        <h4 className="text-yellow-500 text-3xl font-serif">
          Elite
        </h4>
        <p className="text-gray-500 text-sm mt-2">
          Growth-focused agency
        </p>
      </div>
    </div>
  </section>

  {/* PROCESS */}
  <section
    id="process"
    className="py-32 text-center px-6"
  >
    <h2 className="text-4xl font-serif text-yellow-500 mb-12">
      Why Leo OFM Elite
    </h2>

    <div className="max-w-2xl mx-auto space-y-5 text-gray-300">
      <p>✓ Personalized creator management</p>
      <p>✓ Revenue optimization systems</p>
      <p>✓ Audience acquisition framework</p>
      <p>✓ Long-term brand development</p>
      <p>✓ Growth-focused strategy</p>
      <p>✓ Dedicated support</p>
    </div>
  </section>

  {/* APPLY */}
  <section
    id="apply"
    className="py-32 px-6 border-t border-yellow-500/10"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-serif text-yellow-500 mb-6">
        Apply For Private Management
      </h2>

      <p className="text-gray-400 mb-10">
        Every application is reviewed individually.
        We only work with creators who are serious about growth.
      </p>

      <ApplyForm />

      <p className="text-gray-600 text-sm mt-8">
        Only selected creators will be contacted.
      </p>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="border-t border-yellow-500/10 py-10 text-center">
    <p className="text-gray-500">
      © 2026 Leo OFM Elite — Private Creator Management
    </p>
  </footer>

</div>
```

)
}
