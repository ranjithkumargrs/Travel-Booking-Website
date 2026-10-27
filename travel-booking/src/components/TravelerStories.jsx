import { Heart, Star } from 'lucide-react'

const stories = [
  {
    quote: 'Bali felt effortless. The local recommendations and quiet stay in Ubud made the whole trip feel personal.',
    name: 'Priya S.',
    trip: 'Bali Island Escape',
    initials: 'PS',
    avatar: 'bg-rose-100 text-rose-800',
  },
  {
    quote: 'The Amalfi coast was even more beautiful than we imagined. Having the ferry and stay details together made planning simple.',
    name: 'Arun & Meera',
    trip: 'Amalfi Coast Hideaway',
    initials: 'AM',
    avatar: 'bg-amber-100 text-amber-800',
  },
  {
    quote: 'A lovely way to experience Tamil Nadu. The temple visits, local food, and slower pace were exactly what we wanted.',
    name: 'Karthik R.',
    trip: 'Tamil Nadu Temple Trail',
    initials: 'KR',
    avatar: 'bg-teal-100 text-teal-800',
  },
]

function TravelerStories() {
  return (
    <section className="bg-[#f5f7f5]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800"><Heart size={15} /> Traveler stories</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Little moments, lasting memories</h2>
            <p className="mt-3 max-w-xl text-slate-500">A few kind words from travelers who found their kind of trip.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            Thoughtfully planned, happily remembered
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 sm:p-7">
              <div className="mb-5 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={17} className="fill-amber-400 text-amber-400" />)}
              </div>
              <blockquote className="flex-1 text-[15px] leading-7 text-slate-700">“{story.quote}”</blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${story.avatar}`} aria-hidden="true">{story.initials}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{story.name}</p>
                  <p className="mt-1 truncate text-xs text-slate-500">{story.trip}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TravelerStories
