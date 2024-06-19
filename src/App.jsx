// import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/index/index.jsx";

function App() {
  return (
      <div>
        <Routes>
          <Route element={<Home />} path="/"/>

        </Routes>
      </div>

  )
}

export default App
