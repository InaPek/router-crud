import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, deletePost } from '../api/posts';

export default function PostView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    getPostById(id).then((data) => {
      setPost(data.post);
      setEditContent(data.post.content);
      setLoading(false);
    });
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    navigate('/');
  };

  const handleSave = async () => {
    const { updatePost } = await import('../api/posts');
    await updatePost(id, editContent);
    const data = await getPostById(id);
    setPost(data.post);
    setIsEditing(false);
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (!post) return <div className="empty">Пост не найден</div>;

  return (
    <div className="post-view">
      <div className="post-view__header">
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

      {isEditing ? (
        <div className="post-view__edit">
          <textarea
            className="post-view__textarea"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={4}
          />
          <div className="post-view__actions">
            <button className="btn btn_primary" onClick={handleSave}>
              Сохранить
            </button>
            <button
              className="btn btn_secondary"
              onClick={() => setIsEditing(false)}
            >
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="post-view__content">{post.content}</div>
          <div className="post-view__actions">
            <button
              className="btn btn_primary"
              onClick={() => setIsEditing(true)}
            >
              Изменить
            </button>
            <button className="btn btn_danger" onClick={handleDelete}>
              Удалить
            </button>
          </div>
        </>
      )}
    </div>
  );
}
