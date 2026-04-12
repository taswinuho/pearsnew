import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  image: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Balance Bike Racing",
    excerpt: "Everything parents need to know to start their child in pushbike racing.",
    content: "Balance bike racing is an exciting way for young children to develop confidence, balance, and love for cycling. Our comprehensive guide covers everything from bike selection to training tips.",
    date: "2026-04-10",
    author: "Sarah Mitchell",
    category: "Getting Started",
    image: "/images/kids-pushbike-race-track-outdoor-sunny-day.jpg",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Safety Tips for Young Riders",
    excerpt: "Essential safety guidelines to keep your child protected during races and training.",
    content: "Safety is our top priority at PEARS. Learn about proper helmet fitting, protective gear selection, and track safety protocols to ensure your child has the best experience.",
    date: "2026-04-08",
    author: "Michael Chen",
    category: "Safety",
    image: "/images/happy-child-on-balance-bike-with-helmet-smiling.jpg",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Training Tips from Champions",
    excerpt: "Pro techniques and training methods used by top PEARS riders.",
    content: "Our top riders share their secrets for success. From balance drills to confidence-building exercises, discover the training methods that lead to podium finishes.",
    date: "2026-04-05",
    author: "Emma Rodriguez",
    category: "Training",
    image: "/images/kids-balance-bike-racing-competition.jpg",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Nutrition and Fitness for Young Athletes",
    excerpt: "Healthy habits to support your child's athletic performance.",
    content: "Proper nutrition and fitness are crucial for young athletes. Learn about balanced diets, hydration strategies, and age-appropriate fitness routines.",
    date: "2026-04-01",
    author: "Dr. James Patterson",
    category: "Health",
    image: "/images/kids-pushbike-racing-summer-championship-event.jpg",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Meet the PEARS Community",
    excerpt: "Stories from families and riders in our growing PEARS network.",
    content: "Discover inspiring stories from PEARS families. Learn how our community supports young riders and celebrates their achievements.",
    date: "2026-03-28",
    author: "Lisa Thompson",
    category: "Community",
    image: "/images/happy-kids-on-balance-bikes-at-a-race-event-sunny-.jpg",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "Choosing the Right Balance Bike",
    excerpt: "A detailed guide to selecting the perfect bike for your child.",
    content: "Not all balance bikes are created equal. We break down the key features, sizes, and specifications to help you choose the best option.",
    date: "2026-03-25",
    author: "David Foster",
    category: "Equipment",
    image: "/images/kids-balance-bike-competition.jpg",
    readTime: "5 min read",
  },
]

const categories = ["All", "Getting Started", "Safety", "Training", "Health", "Community", "Equipment"]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#1a2535] to-[#0a1628] border-b border-[#ff5722]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            PEARS <span className="text-[#ff5722]">Blog</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Insights, tips, and stories from the pushbike racing community
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-bold transition-all ${
                  category === "All"
                    ? "bg-[#ff5722] text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all border border-white/10 hover:border-[#ff5722]/50"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1a2535] to-[#0a1628]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#ff5722] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff5722] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/50">{post.readTime}</span>
                    <motion.button
                      whileHover={{ gap: "8px" }}
                      className="flex items-center gap-2 text-[#ff5722] font-bold text-sm hover:text-white transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-[#ff5722] to-[#ff7043]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Stay Updated</h2>
          <p className="text-white/90 mb-6">Subscribe to our newsletter for the latest PEARS updates and racing tips</p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:border-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-[#ff5722] font-bold rounded-lg hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
