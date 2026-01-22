import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";

const  App = () => {

  return (
    <div className="min-h-screen text-white w-full bg-neutral-900">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
     
    </div>
  )
}

export default App