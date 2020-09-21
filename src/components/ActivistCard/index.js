import React from "react";
import { PropTypes } from "prop-types";
import moment from 'moment';
import Clap from "../../assets/svgs/Clap";

const ActivistCard = ({ avatarUrl, name, desc, dob, location }) => {
  return (
    <div className='outer-div'>
      <div className="card-div">
        <div className="card-inner-div">
          <div className="card-header">
            <div className='img-div'>
              <img width='88px' height='88px' alt="avtr" src={avatarUrl} />
            </div>
            <div className="clap-div">
              <Clap />
            </div>
          </div>
          <div className="card-name">
            <h1>{name}</h1>
          </div>
          <div className='desc-div'>
            <p>{desc}</p>
          </div>
          <div className='dob-div'>
            <p style={{color: 'grey'}}>
              Born <b style={{color: '#000'}}>{moment(dob).format('MMMM Do YYYY')}</b> in <b style={{color: '#000'}}>{location}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ActivistCard.propTypes = {
  avatarUrl: PropTypes.string,
  clapCount: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  dob: PropTypes.string,
  location: PropTypes.string,
};

export default ActivistCard;
