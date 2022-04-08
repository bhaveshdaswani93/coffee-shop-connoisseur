import Link from 'next/link'

const CoffeeStore = () => {
  return (
    <div>
      <p>Coffee Store OutSide</p>
      <Link href='/'>
        <a>Go Back</a>
      </Link>
      <Link href='/coffee-store/abc'>
        <a>
          Click to go inside
        </a>
      </Link>
      
    </div>
  )
}


export default CoffeeStore