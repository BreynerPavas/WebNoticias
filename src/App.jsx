
import './App.css'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ListNews from './components/ListNews/ListNews'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className='container'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />       
        <Route path='/Form' element={<Form/>} />
        <Route path='/ListNews' element={<ListNews/>} />              
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
