import Navbar from './components/Navbar'
import Direction from './components/Direction'
import Banner from './components/Banner'
import Faqs from './components/Faqs'
import "./App.css"
function App() {

  return (
    <div className='bg-white mb-11 ' >
      <Navbar />
      <Direction />
      <Banner />
      <Faqs />
    </div>
  )
}

export default App
