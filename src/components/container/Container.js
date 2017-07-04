import React from 'react';
import './container.css'

const Container = (props) => {
  return (
    <div className='container' style={{width: `${props.width}px`, height: `${props.height}px`, position:`${props.position}` }}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  position: React.PropTypes.string,
  children: React.PropTypes.node
}


export default Container;