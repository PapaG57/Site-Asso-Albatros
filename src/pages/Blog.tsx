import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <section className="page-header">
        <div className="container">
          <h1>Actualités</h1>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="blog-list section-padding">
        <div className="container">
          <div className="blog-grid">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p className="text-content">{post.excerpt}</p>
                  <Link to={`/actualites/${post.id}`} className="read-more">
                    Lire la suite <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
