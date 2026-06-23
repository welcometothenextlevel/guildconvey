import SEO from '../components/SEO.jsx'
import StateTabSwitcher from '../components/StateTabSwitcher.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Locations() {
  return (
    <>
      <SEO title="Guild Conveyancing Locations — VIC, SA & QLD" description="Guild Conveyancing serves every suburb across Victoria, South Australia and Queensland with fully online, fixed-fee conveyancing." path="/locations" />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Guild Conveyancing Locations — VIC, SA & QLD"
            text="We serve every suburb across Victoria, South Australia and Queensland — 100% online."
          />
          <StateTabSwitcher />
        </div>
      </section>
    </>
  )
}
