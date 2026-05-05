import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';
import './PostDetail.css';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="post-detail-error container section-padding">
        <h2>Article introuvable</h2>
        <p>L'article que vous recherchez n'existe pas ou a été déplacé.</p>
        <button onClick={() => navigate('/actualites')} className="btn btn-secondary">
          Retour aux actualités
        </button>
      </div>
    );
  }

  return (
    <div className="post-detail-page">
      <section className="page-header">
        <div className="container">
          <span className="post-meta-date">{post.date}</span>
          <h1>{post.title}</h1>
          <div className="title-underline"></div>
        </div>
      </section>

      <article className="post-content section-padding">
        <div className="container narrow-container">
          <div className="post-main-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="post-text-body text-content">
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="full-content">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="post-actions">
              <Link to="/actualites" className="btn btn-secondary">
                ← Retour aux actualités
              </Link>
              <Link to="/faire-un-don" className="btn btn-primary">
                Soutenir cette action
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
