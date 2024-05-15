import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Selection from './component/Showroom Component/Selection';
import Insertion from './component/Showroom Component/Insertion';
import Updation from './component/Showroom Component/Updation';
import Navbar from './component/Showroom Component/Navbar';
import Home from './component/Showroom Component/Home';
function App() {

  const [selectForUpdate, setSelectForUpdate] = React.useState("");

  return (
    <>
      <React.StrictMode>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes >
              <Route exact path="/" Component={Home} />
              <Route exact path='/cars' element={<Selection setSelectForUpdate={setSelectForUpdate} />} />
              <Route exact path='/cars/add' Component={Insertion} />
              <Route exact path='/cars/update' element={<Updation selectForUpdate={selectForUpdate} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </React.StrictMode>
    </>
  )
}

export default App
