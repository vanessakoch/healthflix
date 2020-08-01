import React from 'react';
import loadphoto from '../../assets/img/ju.png';
import './style.css';

function Loading() {
  return (
    <div>
      <img className="Loading" src={loadphoto} alt="foto da ju" />
    </div>
  );
}

export default Loading;
