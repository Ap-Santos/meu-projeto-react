import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className=" ">
      <h3 className=" ">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;