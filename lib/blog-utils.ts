// Blog utilities and helpers

export interface BlogPost {
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

// Future: Blog data will be fetched from CMS or database
export const getBlogPosts = (): BlogPost[] => {
  return [
    {
      id: "1",
      title: "Getting Started with Balance Bike Racing",
      excerpt: "Everything parents need to know to start their child in pushbike racing.",
      content: "Balance bike racing is an exciting way for young children to develop confidence, balance, and love for cycling.",
      date: "2026-04-10",
      author: "Sarah Mitchell",
      category: "Getting Started",
      image: "/images/kids-pushbike-race-track-outdoor-sunny-day.jpg",
      readTime: "5 min read",
    },
    // More posts...
  ]
}

// Search blog posts
export const searchBlogPosts = (query: string, posts: BlogPost[]): BlogPost[] => {
  const lowerQuery = query.toLowerCase()
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.author.toLowerCase().includes(lowerQuery),
  )
}

// Filter blog posts by category
export const filterByCategory = (category: string, posts: BlogPost[]): BlogPost[] => {
  if (category === "All") return posts
  return posts.filter((post) => post.category === category)
}

// Get related posts
export const getRelatedPosts = (currentPost: BlogPost, allPosts: BlogPost[], limit: number = 3): BlogPost[] => {
  return allPosts
    .filter(
      (post) =>
        post.id !== currentPost.id && (post.category === currentPost.category || post.author === currentPost.author),
    )
    .slice(0, limit)
}

// Format date for display
export const formatBlogDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Calculate reading time
export const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

// Generate blog slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

// Get featured posts (for homepage)
export const getFeaturedPosts = (posts: BlogPost[], count: number = 3): BlogPost[] => {
  return posts.slice(0, count)
}
