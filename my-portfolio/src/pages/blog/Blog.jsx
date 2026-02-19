import { FiArrowUpRight, FiClock } from "react-icons/fi";

const posts = [
  {
    title: "How I Structure React Projects for Scale",
    excerpt:
      "A practical folder strategy for medium-to-large apps with reusable UI, route layers, and predictable state flow.",
    tag: "React",
    readTime: "6 min read",
  },
  {
    title: "UI/UX Details That Instantly Improve Portfolio Sites",
    excerpt:
      "Small layout, typography, and interaction tweaks that make your portfolio feel intentional and professional.",
    tag: "Design",
    readTime: "4 min read",
  },
  {
    title: "From Static Pages to Dynamic Projects",
    excerpt:
      "How I moved portfolio projects from static mockups to data-driven components without overengineering.",
    tag: "Frontend",
    readTime: "5 min read",
  },
];

const Blog = () => {
  return (
    <section className="blog-section retro-surface">
      <span className="blog-shape blog-shape-circle" aria-hidden="true" />
      <span className="blog-shape blog-shape-square" aria-hidden="true" />

      <div className="blog-header">
        <span className="blog-kicker">//</span>
        <h2 className="blog-title">BLOG</h2>
        <span className="blog-dot" aria-hidden="true" />
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.title} className="blog-card panel">
            <div className="blog-card-top">
              <span className="blog-tag">{post.tag}</span>
              <span className="blog-readtime">
                <FiClock aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button type="button" className="blog-read-btn panel">
              Read Article
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
