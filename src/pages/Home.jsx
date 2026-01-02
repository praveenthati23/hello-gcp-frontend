import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/backend';
import CreateUser from '../components/CreateUser';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadUsers() {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Hello GCP</h1>

      <CreateUser onUserCreated={loadUsers} />

      {loading && <p>Loading users...</p>}

      {!loading && users.length === 0 && <p>No users found</p>}

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

