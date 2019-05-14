import React, { Component } from 'react';

class Logo extends Component {
    render() { 
        return ( 
        <a href="/" className="logo">
                <div className="logo__wrapper">
                    <img src={require('../../../../../public/favicon-32x32.png')} alt="logo" />
            </div>
        </a> 
      );
    }
}
 
export default Logo;