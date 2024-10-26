import React from 'react'
import Banner from './components/banner'
import ReadyToDiv from './components/ready-to-div'
import BuyerSupplierTabs from './components/buyer-supplier-tabs'
import LetSupplier from './components/let-suppliers'
import HowItWorks from './components/how-to-work'

const Home = () => {
  return (
   <>
   <Banner/>
   <ReadyToDiv/>
   <BuyerSupplierTabs/>
   <LetSupplier/>
   <HowItWorks/>
   </>
  )
}

export default Home
