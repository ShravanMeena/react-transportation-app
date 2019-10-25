import React from 'react';

const Title = (props) => {
  return (
    <div className="mb-5">
      <h2>{props.title}</h2>
      <h5>{props.subtitle}</h5>
    </div>
  );
};

export default Title;