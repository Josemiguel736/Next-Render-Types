//principal: 

import { HeadLanding } from "@/components/landing/HeadLanding"
import { PrincipalContent } from "@/components/landing/PrincipalContent"
import { QuickTour } from "@/components/landing/QuickTour"
import { SecondaryLandingNavbar } from "@/components/landing/SecondaryLandingNavbar"
import { TopBanner } from "@/components/landing/TopBanner"


const LandingPage = () => {
    return (
        <>
        <TopBanner/>
        <SecondaryLandingNavbar/>
        <HeadLanding/>
        <PrincipalContent/>
        <QuickTour/>
        </>
    )
}

export default LandingPage