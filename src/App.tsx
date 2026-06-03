import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Team = lazy(() => import('./pages/Team'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const Fees = lazy(() => import('./pages/Fees'))
const NewPatients = lazy(() => import('./pages/NewPatients'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Feedback = lazy(() => import('./pages/Feedback'))
const FriendsFamily = lazy(() => import('./pages/FriendsFamily'))
const FreeConsultation = lazy(() => import('./pages/FreeConsultation'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-text-light">Loading...</p>
      </div>
    </div>
  )
}

function Redirect({ to }: { to: string }) {
  return <Navigate to={to} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/new-patients" element={<NewPatients />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/friends-family" element={<FriendsFamily />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/emergency" element={<Contact />} />
            <Route path="/location" element={<Contact />} />

            {/* Old .html URL redirects */}
            <Route path="/about.html" element={<Redirect to="/about" />} />
            <Route path="/treatments.html" element={<Redirect to="/services" />} />
            <Route path="/thedentists.html" element={<Redirect to="/team" />} />
            <Route path="/theteam.html" element={<Redirect to="/team" />} />
            <Route path="/testimonials.html" element={<Redirect to="/testimonials" />} />
            <Route path="/contact.html" element={<Redirect to="/contact" />} />
            <Route path="/fees.html" element={<Redirect to="/fees" />} />
            <Route path="/cosmeticdentistry.html" element={<Redirect to="/services/cosmetic-dentistry" />} />
            <Route path="/teethwhitening.html" element={<Redirect to="/services/teeth-whitening" />} />
            <Route path="/porcelainveneers.html" element={<Redirect to="/services/porcelain-veneers" />} />
            <Route path="/whitefillings.html" element={<Redirect to="/services/white-fillings" />} />
            <Route path="/teeth-straightening.html" element={<Redirect to="/services/teeth-straightening" />} />
            <Route path="/contouring.html" element={<Redirect to="/services/gum-contouring" />} />
            <Route path="/restorativedentistry.html" element={<Redirect to="/services/restorative-dentistry" />} />
            <Route path="/dentalimplants.html" element={<Redirect to="/services/dental-implants" />} />
            <Route path="/crowns.html" element={<Redirect to="/services/crowns" />} />
            <Route path="/bridges.html" element={<Redirect to="/services/bridges" />} />
            <Route path="/dentures.html" element={<Redirect to="/services/dentures" />} />
            <Route path="/oralsurgery.html" element={<Redirect to="/services/oral-surgery" />} />
            <Route path="/rootcanal.html" element={<Redirect to="/services/root-canal" />} />
            <Route path="/chipped-tooth-options.html" element={<Redirect to="/services/chipped-tooth-options" />} />
            <Route path="/preventivedentistry.html" element={<Redirect to="/services/preventive-dentistry" />} />
            <Route path="/dentalhygiene.html" element={<Redirect to="/services/dental-hygiene" />} />
            <Route path="/children.html" element={<Redirect to="/services/childrens-dentistry" />} />
            <Route path="/badbreath.html" element={<Redirect to="/services/bad-breath" />} />
            <Route path="/gumdisease.html" element={<Redirect to="/services/gum-disease" />} />
            <Route path="/dentaldecay.html" element={<Redirect to="/services/decay-detection" />} />
            <Route path="/mouthcancer.html" element={<Redirect to="/services/mouth-cancer-screening" />} />
            <Route path="/oral-hygiene-aids.html" element={<Redirect to="/services/oral-hygiene-aids" />} />
            <Route path="/facialrejuvenation.html" element={<Redirect to="/services/facial-rejuvenation" />} />
            <Route path="/emergencies.html" element={<Redirect to="/emergency" />} />
            <Route path="/newpatients.html" element={<Redirect to="/new-patients" />} />
            <Route path="/privacy.html" element={<Redirect to="/privacy" />} />
            <Route path="/feedback.html" element={<Redirect to="/feedback" />} />
            <Route path="/friends-family.html" element={<Redirect to="/friends-family" />} />
            <Route path="/free-consultation.html" element={<Redirect to="/free-consultation" />} />
            <Route path="/location.html" element={<Redirect to="/location" />} />
            <Route path="/email.html" element={<Redirect to="/contact" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
