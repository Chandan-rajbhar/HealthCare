import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Calendar, User, ArrowRight } from "lucide-react";
import blogPosts from "./blogPosts";

const BlogDetails = () => {
  const { slug } = useParams();

  // Find current post
  const postIndex = blogPosts.findIndex((item) => item.slug === slug);
  const post = blogPosts[postIndex];

  // Next post
  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-40 text-center px-6">
        <h2 className="text-3xl font-sans text-slate-900 mb-4">
          Article not found
        </h2>

        <Link
          to="/blogs"
          className="text-[#009689] font-medium hover:underline"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[460px] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/20" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-14 w-full">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ChevronLeft size={18} />
              Back to Insights
            </Link>

            <h1 className="text-4xl md:text-6xl font-sans text-white leading-tight max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-14">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 border-b border-slate-100 pb-8 mb-10 text-slate-500">
          <div className="flex items-center gap-2">
            <User size={18} className="text-[#009689]" />
            <span className="font-medium text-slate-900">{post.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#009689]" />
            <span>{post.date}</span>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-10 p-6 rounded-2xl bg-[#009689]/5 border border-[#009689]/10">
          <p className="text-lg text-slate-700 leading-relaxed">
            Practical growth strategies, operational insights, and client
            experience ideas for modern wellness clinics.
          </p>
        </div>

        {/* Article */}
        <article className="whitespace-pre-line text-lg md:text-xl leading-relaxed text-slate-700 mb-20">
          {post.content.trim()}
        </article>

        {/* CTA */}
        <div className="mb-16 rounded-3xl bg-slate-900 text-white p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-sans mb-4">
            Ready to modernize your wellness clinic?
          </h3>

          <p className="text-slate-300 mb-6 leading-relaxed">
            Simplify bookings, automate follow-ups, manage memberships, and
            deliver exceptional client experiences with one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book-demo"
              className="bg-[#009689] hover:bg-[#007a6e] px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Book a Demo
            </Link>

            <Link
              to="/pricing"
              className="border border-white/15 hover:border-white/30 px-6 py-3 rounded-xl font-medium transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Next Post */}
        <div className="pt-10 border-t border-slate-100">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">
            Read Next
          </p>

          <Link
            to={`/blog/${nextPost.slug}`}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 rounded-3xl bg-slate-50 hover:bg-[#009689]/5 transition-all"
          >
            <div>
              <span className="text-[#009689] text-sm font-semibold">
                {nextPost.category}
              </span>

              <h3 className="text-2xl font-sans text-slate-900 mt-2 group-hover:text-[#007a6e] transition-colors">
                {nextPost.title}
              </h3>
            </div>

            <ArrowRight className="text-[#009689] group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;