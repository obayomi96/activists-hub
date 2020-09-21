import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({headerBgColor, textColor}) => {
  return (
    <div className="header-div" style={{background: headerBgColor}}>
      <div className="header-inner-div">
        <h1 className="header-h1" >
          <Link style={{color: textColor}} to="/">ActivistsHub</Link>
        </h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  headerBgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
