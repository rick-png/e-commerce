import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const data = [
  'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto-compress&cs=tinysrgb&w=1600',
];

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="navigation">
        <div className="icon">
          <ArrowBackIosNewOutlinedIcon />
          <ArrowForwardIosOutlinedIcon />
        </div>
        <div className="icon"></div>
      </div>
    </section>
  );
};

export default Slider;
