import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './components/Slider';
import Offers from './components/Offers';
import data from './data/data.json';

import Heading from './components/Heading';
import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories'
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';



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
        music={data.hotAccessories.music}
        musicCover={data.hotAccessoriesCover.music} />

      <HotAccessories
        smartDevice={data.hotAccessories.smartDevice}
        smartDeviceCover={data.hotAccessoriesCover.smartDevice} />

      <HotAccessories
        home={data.hotAccessories.home}
        homeCover={data.hotAccessoriesCover.home} />

      <HotAccessories
        lifeStyle={data.hotAccessories.lifeStyle}
        lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />

      <HotAccessories
        mobileAccessories={data.hotAccessories.mobileAccessories}
        mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner} />
      <Footer />
    </Router>
  );
}

export default App;
