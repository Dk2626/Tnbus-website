import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './AboutScreen.css';
import intro from '../Assests/intro.png';
import team5 from '../Assests/vicky.jpg';
import team6 from '../Assests/dk.jpg';

const teams = [
  {
    img: team5,
    name: 'Vicky',
    desg: 'Junior Software Engineer',
  },
  {
    img: team6,
    name: 'Dinesh',
    desg: 'Junior Software Engineer',
  },
];

const AboutScreen = () => {
  return (
    <>
      <Navbar />
      <div className='Aboutmain'>
        <h1 className='AboutmainH'>About</h1>
      </div>
      <div className='intro'>
        <div className='intro_image-flex'>
          <img className='intro_image' src={intro} alt='' />
        </div>
        <div className='intro_content'>
          <div className='intro_title'>Travel your destination today!</div>
          <p className='intro_text'>
            tnBus is the one-stop for all your travel plans and needs. We work
            with you to manage all elements of your travel in an efficient and
            cost-effective manner. In a world filled with options, why should
            you settle for less when we give you more! TnBus’s fully
            customizable travel destination give you a tour that is tailored
            exactly the way you like it. Leave all the hard work to us! We will
            make your dream vacation a reality. Based on a survey of your tastes
            and destination preferences, TnBus’s algorithm provides a wide range
            of choices with the best prices. All you need to do is pick!
          </p>
          <div className='btns'>
            <a href='/'>
              Explore now<span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
      <div className='team'>
        <h2 className='title_name'>Our Team</h2>
        <p className='title_desc'>
          "Talent wins games, but teamwork and intelligence win championships."
          --Michael Jordan <br />
          tourOn consists of a close knit team of dedicated individuals, all
          working hard to put together your perfect holiday. Say Hello to the
          Team!
        </p>
        <div className='team_content'>
          {teams.map((t, i) => {
            return (
              <div key={i} className='team_content1'>
                <div className='team_img'>
                  <img src={t.img} alt='teamimage' />
                </div>
                <div className='teamk'>
                  <div className='team_desti'>{t.name}</div>
                  <div className='team_name'>{t.desg}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutScreen;
