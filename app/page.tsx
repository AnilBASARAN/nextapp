import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './component/ProductCard'

export default function Home() {
  return (
    <main>
      <Link href='/users'>user</Link>
      <h1>Hello World</h1>
      <ProductCard />
    </main>
  )
}
