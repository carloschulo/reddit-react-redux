import React from 'react';
import './container.css'

const Container = (props) => {
  return (
    <div className='container' style={{width: `${props.width}px`, height: `${props.height}px`, position:`${props.position}` }}>
      {props.children}
    </div>
  );
};

export default Container;