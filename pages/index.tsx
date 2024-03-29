import Navbar from 'components/navbar'
import Header from 'components/header'
import Footer from 'components/footer'

import FeatureSection from 'components/sections/features'
import BenefitSection from 'components/sections/benefits'
import ShowcaseSection from 'components/sections/showcase'
import ServiceSection from 'components/sections/services'
import PricingSection from 'components/sections/pricing'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <FeatureSection />
      <BenefitSection />
      <ShowcaseSection />
      <ServiceSection />
      <PricingSection />
      <Footer />
    </>
  )
}
