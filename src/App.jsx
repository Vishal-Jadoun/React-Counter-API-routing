// import React from 'react'
import { BrowserRouter, Routes,Route , Link } from 'react-router-dom'
import Counter from "./pages/Counter";
import ApiCalling from "./pages/ApiCalling";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ApiCalling">AppCalling</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/ApiCalling" element={<ApiCalling />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App