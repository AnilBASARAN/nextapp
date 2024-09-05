import React from 'react'
import UserTable from './UserTable'

interface Props{
  searchParams : {sortOrder:String}
}


const page = async ({searchParams:{sortOrder}}:Props) => {
 
  return (

    <div>
      <h1>Users Page</h1>
      
      <UserTable sortOrder = {sortOrder} />
    </div>
  )
}

export default page