import React from 'react';
import '../styles/globals.css';

const Users = ({ users }) => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl mb-8 text-white content-center">Users</h1>
        <table className="table-auto w-full bg-black">
          <thead>
            <tr>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
