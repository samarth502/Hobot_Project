import MainHeader from './common/main-header'
import Home from './components/home/home'
import Footer from './common/main-footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
