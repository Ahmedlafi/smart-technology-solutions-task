
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './reducers/counterReducer';
import './App.css';
import { useTranslation } from 'react-i18next';
import Navbar from './component/Navbar/Navbar';
import Header from './component/header/header';
import Slider from './component/Slider/slider';
import SliderSection from './component/slider-section/Slider-section';


function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <Header/>
    <SliderSection/>


  
    </>
  );
}

export default App;
