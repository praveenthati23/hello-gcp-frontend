const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function fetchUsers() {
  const res = await fetch(`${BACKEND_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export async function createUser(user) {
  const res = await fetch(`${BACKEND_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to create user');
  }

  return res.json();
}

