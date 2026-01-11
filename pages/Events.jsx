const events = []; // no events for now

export default function Events() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#0F1C2E] dark:text-white mb-10 text-center">
        Upcoming Events
      </h2>

      {events.length === 0 ? (
        /* Empty state */
        <div className="flex justify-center">
          <div className="bg-white dark:bg-white/5 dark:border dark:border-white/10
                          shadow-md rounded-2xl p-10 max-w-xl text-center">
            <h3 className="text-xl font-semibold text-[#0F1C2E] dark:text-white mb-3">
              No events scheduled at the moment
            </h3>
            <p className="text-gray-600 dark:text-white/70 leading-relaxed">
              Upcoming events will be announced soon. We are working behind the
              scenes to bring meaningful and engaging programs to our
              community.
            </p>

            <a
              href="https://linktr.ee/msaconestoga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[#C9A24D] font-medium hover:underline"
            >
              Follow us for updates →
            </a>
          </div>
        </div>
      ) : (
        /* Events grid (when events exist) */
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-white/5 dark:border dark:border-white/10
                         rounded-xl shadow hover:scale-105 transition"
            >
              <img
                src={event.poster}
                alt={event.title}
                className="rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#0F1C2E] dark:text-white">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/60">
                  {event.date}
                </p>
                <p className="text-sm text-gray-700 dark:text-white/70">
                  {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
