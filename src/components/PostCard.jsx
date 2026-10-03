import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <div className="post-card" onClick={() => navigate(`/posts/${post.id}`)}>
      <div className="post-card__header">
        <img
          className="post-card__avatar"
          src="https://i.pravatar.cc/50?img=12"
          alt="avatar"
        />
        <div>
          <div className="post-card__author">Ilnaz Gilyazov</div>
          <div className="post-card__meta">Основатель группы</div>
        </div>
      </div>
      <div className="post-card__content">{post.content}</div>
      <div className="post-card__footer">
        <button className="post-card__btn" onClick={(e) => e.stopPropagation()}>
          👍 Нравится
        </button>
        <button className="post-card__btn" onClick={(e) => e.stopPropagation()}>
          💬 Комментировать
        </button>
      </div>
    </div>
  );
}
