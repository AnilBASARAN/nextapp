import React from 'react'

interface Props {

    params: {
        id:number,
        photoId:number
    }
}

const UserPhotosPage = ({params: {id,photoId}}:Props) => {
  return (
    <div>
        <h1>UserPhotosPage</h1>
       <h1>User{id}</h1>
        <h2>Photo {photoId}</h2>
    </div>
  )
}

export default UserPhotosPage
