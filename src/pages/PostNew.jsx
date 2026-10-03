import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/posts';

export default function PostNew() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handlePublish = async (e) => {
    e.preventDefault();
    if (content.trim() === '') return;
    await createPost(content);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="post-new">
      <div className="post-new__header">
        <span className="post-new__title">Публикация</span>
        <button className="post-new__close" onClick={handleCancel}>
          ✕
        </button>
      </div>
      <form onSubmit={handlePublish}>
        <textarea
          className="post-new__textarea"
          placeholder="Напишите пост..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
        <div className="post-new__actions">
          <button type="submit" className="btn btn_primary">
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
}
