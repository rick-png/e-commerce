import { React, useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './Slider.scss';




const Slider = () => {

  const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto-compress&cs=tinysrgb&w=1600',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide == 0 ? 2 : (prev) => prev - 1)
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide == 2 ? 0 : (next) => next + 1)
  };


  return (
    <section className="slider">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}dvw)` }}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="navigation">
        <div className="icon">
          <ArrowBackIosNewOutlinedIcon onClick={prevSlide} />
        </div>
        <div className="icon">
          <ArrowForwardIosOutlinedIcon onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};

export default Slider;
