type CaseStudy = {
  id: number;
  title: string;
  description: string;
  logo: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Skin With Bea Esthetics",
    description:
      "Discover how Beatrice built a five-star solo practice with Pabau, automating emails and forms, collecting reviews and delivering a premium client experience.",
    logo: "Skin with Bea",
  },
  {
    id: 2,
    title: "Esteem Life Medical Group",
    description:
      "This longevity clinic was searching for a versatile all-in-one platform to support both medical and aesthetic workflows with less admin work.",
    logo: "ESTEEM LIFE",
  },
  {
    id: 3,
    title: "Balanced Aesthetics",
    description:
      "Jamila Shafi transformed her booking process and client journey by moving away from DMs and manual scheduling into one seamless system.",
    logo: "BALANCED",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full bg-[#eef7fb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans tracking-tight text-[#151515]">
            Case Studies
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
            Take a look how clinics like yours use Pabau to save time, improve
            patient experience, and secure more clients.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.id} className="group cursor-pointer rounded-2xl">
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-200 to-cyan-400 h-[240px] md:h-[260px] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* abstract shapes */}
                <div className="absolute left-0 bottom-0 h-32 w-40 rounded-full bg-white/15 blur-sm" />
                <div className="absolute right-10 top-0 h-40 w-52 rounded-full bg-white/10 blur-sm" />

                {/* Logo box */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-32 w-[72%] items-center justify-center rounded-lg bg-white shadow-md">
                    <span className="text-center text-xl md:text-2xl tracking-[0.25em] text-slate-700 font-light">
                      {item.logo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="text-3xl font-normal tracking-tight text-[#111] leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
