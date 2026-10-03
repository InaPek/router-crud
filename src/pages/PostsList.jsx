import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPosts } from '../api/posts';
import PostCard from '../components/PostCard';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="posts-list">
      <div className="posts-list__top">
        <button
          className="btn btn_primary"
          onClick={() => navigate('/posts/new')}
        >
          Создать пост
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="empty">Постов пока нет</div>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
