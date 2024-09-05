import React from 'react';
import UserTable from './UserTable';

interface Props {
  searchParams: { sort?: string };
}

const Page = ({ searchParams }: Props) => {
  return (
    <div>
      <h1>Users Page</h1>
      {/* Pass the searchParams to UserTable */}
      <UserTable searchParams={searchParams} />
    </div>
  );
};

export default Page;
