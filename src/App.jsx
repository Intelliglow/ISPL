import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SiteLayout from './components/SiteLayout'
import TransitionEffect from './components/TransitionEffect'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import IndustriesPage from './pages/IndustriesPage'
import IndustryDetailPage from './pages/IndustryDetailPage'
import BlogPage from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  const location = useLocation();

  return (
    <SiteLayout>
      <AnimatePresence mode="popLayout">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<TransitionEffect><HomePage /></TransitionEffect>} />
          <Route path="/services" element={<TransitionEffect><ServicesPage /></TransitionEffect>} />
          <Route path="/services/:slug" element={<TransitionEffect><ServiceDetailPage /></TransitionEffect>} />
          <Route path="/projects" element={<TransitionEffect><ProjectsPage /></TransitionEffect>} />
          <Route path="/projects/:slug" element={<TransitionEffect><ProjectDetailPage /></TransitionEffect>} />
          <Route path="/industries" element={<TransitionEffect><IndustriesPage /></TransitionEffect>} />
          <Route path="/industries/:slug" element={<TransitionEffect><IndustryDetailPage /></TransitionEffect>} />
          <Route path="/blog" element={<TransitionEffect><BlogPage /></TransitionEffect>} />
          <Route path="/blog/:slug" element={<TransitionEffect><BlogArticlePage /></TransitionEffect>} />
          <Route path="/contact" element={<TransitionEffect><ContactPage /></TransitionEffect>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<TransitionEffect><NotFoundPage /></TransitionEffect>} />
        </Routes>
      </AnimatePresence>
    </SiteLayout>
  )
}

export default App
