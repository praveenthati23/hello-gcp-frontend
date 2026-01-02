const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function fetchUsers() {
  const res = await fetch(`${BACKEND_URL}/users`);

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

