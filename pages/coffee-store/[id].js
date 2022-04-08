import { useRouter } from 'next/router'

const CoffeeStore = () => {
  const router = useRouter()
  return (
    <div>
      <p>Coffee Store {router.query.id} </p>
    </div>
  )
}


export default CoffeeStore