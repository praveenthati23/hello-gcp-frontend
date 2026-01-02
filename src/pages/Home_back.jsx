import { useState } from 'react';
import { fetchUsers } from '../api/backend';
import Users from '../components/Users';

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const loadUsers = async () => {
    try {
      setError('');
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError('Unable to load users');
    }
  };

  return (
    <div>
      <h1>Hello GCP</h1>

      <button onClick={loadUsers}>
        Fetch Users
      </button>

      {error && <p className="error">{error}</p>}
      <Users users={users} />
    </div>
  );
}

export default Home;

