import React from 'react';
import { withRouter } from 'react-router-dom';
import heroImage from '../../assets/images/hero.png';
import Button from '../../components/Buttons'

const Home = ({ history }) => {

  return (
    <div>
      <div className='home-section-div'>
        <div className='home-img-div'>
          <img alt="hero rectangle" src={heroImage} />
        </div>
        <div className='home-right-side'>
          <p>Learn About Historical Figures <br /> Who Have Made Meaningful Social Change.</p>
          <div>
            <Button
              label='View Activists'
              className='view-activists-btn'
              handleClick={() => history.push('/activists')}
              style={{
                backgroundColor: '#6A0000',
                color: '#fff',
                border: 'none',
                outline: 'none',
                height: '64px',
                width: '215px',
                borderRadius: '2px',
                fontSize: '20px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
