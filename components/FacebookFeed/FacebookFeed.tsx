import { useEffect, useState } from 'react';
import styles from './FacebookFeed.module.css';

interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
  permalink_url: string;
}

const FacebookFeed = () => {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/facebook');
        if (!response.ok) {
          throw new Error('Nepodařilo se načíst příspěvky');
        }
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        setError('Nepodařilo se načíst příspěvky z Facebooku');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('cs-CZ', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        Načítání příspěvků...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <a
          href="https://www.facebook.com/Berounsobeeu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fallbackLink}
        >
          Navštivte náš Facebook
        </a>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {posts.slice(0, 4).map((post) => (
        <a
          key={post.id}
          href={post.permalink_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.post}
        >
          {post.full_picture && (
            <div className={styles.imageWrapper}>
              <img
                src={post.full_picture}
                alt="Facebook příspěvek"
                className={styles.postImage}
              />
            </div>
          )}
          <div className={styles.postText}>
            <div className={styles.postMeta}>
              <span className={styles.postSource}>Facebook</span>
              <span>{formatDate(post.created_time)}</span>
            </div>
            <div className={styles.postTitle}>
              {truncateText(post.message || 'Příspěvek bez textu', 120)}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FacebookFeed;
