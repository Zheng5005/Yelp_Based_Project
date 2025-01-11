import { Route, Routes } from 'react-router-dom'
import Restaurants from './pages/Restaurants'
import Reviews from './pages/Reviews'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Restaurants url={'http://localhost:3000/api/v1/restaurants'} />}/>
        <Route path='/reviews/:id' element={<Reviews />} />
      </Routes>
    </>
  )
}

export default App
