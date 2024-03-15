import './App.css'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'

function App() {
 
  return (
    <div className='container px-8 mx-auto my-5'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Main></Main>
    </div>
  )
}

export default App
