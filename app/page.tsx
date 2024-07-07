import BestSellers from '@/components/BestSellers'
import Hero from '@/components/Hero'
import NewCollections from '@/components/NewCollections'

const page = () => {
  return (
    <div>
      <Hero />
      <NewCollections />
      <BestSellers />
    </div>
  )
}

export default page