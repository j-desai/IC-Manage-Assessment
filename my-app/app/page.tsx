import React from 'react';
import Link from 'next/link';
import './globals.css'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-8">IC Management GUI Developer Assessment</h1>
      <ul className="text-xl">
        <li className="mb-4">
          <Link className="text-blue-500" href="/users">
            Users
          </Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/todos">
            Todos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
