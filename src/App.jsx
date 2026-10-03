import { Routes, Route } from 'react-router-dom';
import PostsList from './pages/PostsList';
import PostView from './pages/PostView';
import PostNew from './pages/PostNew';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/:id" element={<PostView />} />
      </Routes>
    </div>
  );
}

