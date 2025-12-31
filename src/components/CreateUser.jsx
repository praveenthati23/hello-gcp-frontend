import { useState } from 'react';
import { createUser } from '../api/backend';

export default function CreateUser({ onUserCreated }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createUser({ name, email });
      setName('');
      setEmail('');
      onUserCreated(); // refresh list
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add User</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add User'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

