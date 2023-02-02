import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Offers from './components/Offers';
import data from './data/data.json';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories'



function App() {

  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider />
      <Offers />
      <Heading text='STAR PRODUCTS' />
      <StarProduct starProduct={data.starProduct} />
      <Heading text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />


      <HotAccessories
        music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />

    </Router>
  );
}

export default App;
