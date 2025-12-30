function Users({ users }) {
  if (!users.length) {
    return <p>No users found</p>;
  }

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default Users;

