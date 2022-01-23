import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Scenes/Home/Home"
import About from "./Scenes/About/About"
import Actions from './Scenes/Actions/Actions'
import Creations from './Scenes/Creations/Creations'
import Galery from './Scenes/Galery/Galery'
import NotFound from './Scenes/NotFound/NotFound'
import Members from './Scenes/Members/Members'
import News from './Scenes/News/News'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/members" element={<Members />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
