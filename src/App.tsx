import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from './pages/404'
import Main from './pages/Main'
import ShoppingCart from './pages/ShoppingCart'
import SentOrder from './pages/SentOrder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/ShoppingCart' element={<ShoppingCart />} />
        <Route path='/SentOrder' element={<SentOrder />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
