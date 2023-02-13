import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from './components/Slider';
import data from './data/data.json';
import Heading from './components/Heading';
// import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
// import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MiPhones from './pages/MiPhones';
import RedmiPhones from './pages/RedmiPhones';
import Tv from './pages/Tv';
import Laptops from './pages/Laptops';
import HomeDecor from './pages/HomeDecor';
import FitnessAndLifestyle from './pages/FitnessAndLifestyle';
import Audio from './pages/Audio';
import Accessories from './pages/Accessories';
import SmartDevice from './HotaccessoriesPage/SmartDevice';
import Music from './HotaccessoriesPage/Music';
import HomeDevices from './HotaccessoriesPage/HomeDevices';
import LifeStyle from './HotaccessoriesPage/LifeStyle';
import MobileAccessories from './HotaccessoriesPage/MobileAccessories';



function App() {

  return (
    <Router>

      <PreNavbar />
      <Navbar />
      <Routes>
        <Route path='/home' element={""}></Route>
        <Route path='/miphones' element={<MiPhones miPhones={data.miPhones} />}></Route>
        <Route path='/redmiphones' element={<RedmiPhones redmiPhones={data.redmiPhones} />}></Route>
        <Route path='/tv' element={<Tv tv={data.tv} />}></Route>
        <Route path='/laptops' element={<Laptops laptop={data.laptop} />}></Route>
        <Route path='/fitness&lifestyle' element={<FitnessAndLifestyle fitnessAndLifeStyle={data.fitnessAndLifeStyle} />}></Route>
        <Route path='/homedecor' element={<HomeDecor home={data.home} />}></Route>
        <Route path='/audio' element={<Audio audio={data.audio} />}></Route>
        <Route path='/accessories' element={<Accessories accessories={data.accessories} />}></Route>

      </Routes>

      <Slider />

      <Heading text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />

      <Routes>
        <Route path='/smartDevice' element={<SmartDevice smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

        <Route path='/music' element={<Music music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music} />} />

        <Route path='/lifestyle' element={<LifeStyle lifeStyle={data.hotAccessories.lifeStyle}
          lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />

        <Route path='/mobileAccessories' element={<MobileAccessories mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <HomeDevices home={data.hotAccessories.home}
        homeCover={data.hotAccessoriesCover.home} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner} />
      <Footer footer={data.footer} />

    </Router>
  );
}

export default App;
