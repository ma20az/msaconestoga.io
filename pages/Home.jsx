export default function Home() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#0F1C2E] dark:text-white">
        Conestoga College
        <span className="block text-[#C9A24D] mt-2">
          Muslim Students’ Association
        </span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-white/70">
        Building faith, unity, and community among Muslim students at
        Conestoga College.
      </p>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <a
          href="/events"
          className="bg-[#0F1C2E] text-white px-6 py-3 rounded-full
                     hover:bg-[#162B45] transition
                     dark:bg-[#C9A24D] dark:text-[#0F1C2E] dark:hover:bg-[#b8923f]"
        >
          Upcoming Events
        </a>

        <a
          href="/contact"
          className="border border-[#0F1C2E] text-[#0F1C2E] px-6 py-3 rounded-full
                     hover:bg-[#0F1C2E] hover:text-white transition
                     dark:border-white/30 dark:text-white
                     dark:hover:bg-white dark:hover:text-[#0F1C2E]"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
