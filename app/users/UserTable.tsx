import React from 'react';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

// Fetching users from the API
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

// UserTable component with server-side sorting logic
const UserTable = async ({ searchParams }: { searchParams?: { sort?: string } }) => {
  let users: User[] = await fetchUsers();

  // Apply sorting based on the query parameter
  if (searchParams?.sort === 'name') {
    users = sort(users).asc(user => user.name);
  } else if (searchParams?.sort === 'email') {
    users = sort(users).asc(user => user.email);
  }

  return (
    <form method="GET">
      <table className='table table-bordered'>
        <thead>
          <tr>
            {/* Button to trigger sorting by name */}
            <th>
              <button type="submit" name="sort" value="name">
                Name
              </button>
            </th>
            {/* Button to trigger sorting by email */}
            <th>
              <button type="submit" name="sort" value="email">
                Email
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default UserTable;
