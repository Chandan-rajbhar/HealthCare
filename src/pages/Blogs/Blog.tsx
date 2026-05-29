import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Grow Your Wellness Clinic in 2026",
    excerpt:
      "Explore the latest systems and strategies helping wellness clinics scale operations, improve retention, and deliver better client experiences.",
    author: "Practice Growth Team",
    date: "April 5, 2026",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
    slug: "how-to-grow-your-wellness-clinic-2026",
  },
  {
    id: 2,
    title: "Why Online Booking Is Essential for Modern Clinics",
    excerpt:
      "Discover how real-time booking tools reduce admin workload, increase appointments, and create a smoother patient journey.",
    author: "Operations Expert",
    date: "March 28, 2026",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
    slug: "why-online-bookings-matter-for-wellness-clinics",
  },
  {
    id: 3,
    title: "Improving Patient Retention With Automated Follow-ups",
    excerpt:
      "Learn how reminders, recalls, and personalized communication help clinics keep patients engaged long-term.",
    author: "Client Success Team",
    date: "March 15, 2026",
    category: "Retention",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
    slug: "how-to-improve-client-retention-in-wellness-clinics",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-sans text-gray-900 dark:text-white mb-4">
            Blogs
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Resources, ideas, and practical advice to help you grow your clinic,
            streamline operations, and deliver exceptional patient care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#141414] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-semibold text-primary px-2 py-1 bg-primary/10 rounded-full">
                    {post.category}
                  </span>

                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>

                <h2 className="text-xl font-sans text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>

                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {post.author}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary text-sm font-semibold flex items-center gap-1 group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;