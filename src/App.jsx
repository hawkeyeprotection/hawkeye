import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout/Layout'
import { About } from './pages/About/About'
import { Clients } from './pages/Clients/Clients'
import { Contact } from './pages/Contact/Contact'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { Operations } from './pages/Operations/Operations'
import { Services } from './pages/Services/Services'
import { Training } from './pages/Training/Training'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="training" element={<Training />} />
        <Route path="operations" element={<Operations />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
