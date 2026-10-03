const BASE_URL = 'http://localhost:7070/posts';

// GET — список всех постов
export async function getAllPosts() {
  const response = await fetch(BASE_URL);
  return response.json();
}

// GET — один пост по id
export async function getPostById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
}

// POST — создать пост
export async function createPost(content) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: 0, content }),
  });
  return response;
}

// PUT — обновить пост
export async function updatePost(id, content) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, content }),
  });
  return response;
}

// DELETE — удалить пост
export async function deletePost(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return response;
}
