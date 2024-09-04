import React from 'react'

interface Props {
    params:{slug:String[]}
}

const Products = ({params:{slug}}:Props) => {
  return (
    <>
    <div>Products</div>
    <h1>{slug}</h1>
    </>
  )
}

export default Products