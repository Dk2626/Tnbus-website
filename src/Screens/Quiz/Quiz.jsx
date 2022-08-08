import React, { useState, useEffect } from 'react';
import './Quiz.css';
import '../../Fonts/Fonts.css';
import { BsArrowRight } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { FaStoreAlt, FaMobileAlt } from 'react-icons/fa';
import { BsBook, BsStarFill, BsTrophy, BsPerson } from 'react-icons/bs';
import { MdExitToApp, MdEmail } from 'react-icons/md';
import { ImBook } from 'react-icons/im';
import cert from '../../Assests/Quiz/cert.png';
import countriess from '../../Assests/Quiz/18count.png';
import islandIcon from '../../Assests/Quiz/islandIcon.png';
import logo from '../../Assests/Quiz/logo.png';
import logotitle from '../../Assests/Quiz/logot.png';
import celeb1 from '../../Assests/Quiz/celeb1.JPG';
import celeb2 from '../../Assests/Quiz/celeb2.JPG';
import celeb3 from '../../Assests/Quiz/celeb3.JPG';
import celeb4 from '../../Assests/Quiz/celeb4.JPG';
import insta from '../../Assests/Quiz/int.png';
import instaf from '../../Assests/Quiz/intf.png';
import yesl from '../../Assests/Quiz/yyes.png';
import nol from '../../Assests/Quiz/nno.png';
import njoy from '../../Assests/Quiz/njoyy.png';
import male from '../../Assests/Quiz/male.png';
import female from '../../Assests/Quiz/female.png';

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [store, setStore] = useState('');
  const [lucky, setLucky] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    opting: '',
  });

  const { name, email, phone, gender, opting } = user;
  console.log('user', user);

  const renderPage = () => {
    switch (step) {
      case 1:
        return (
          <div className='quizPg0'>
            <div className='aniLogo'>
              <img src={logo} alt='logo' />
            </div>
            <div className='aniLogoTitle'>
              <img src={logotitle} alt='logotitle' />
            </div>
            <div className='quizArrowMain0' onClick={() => setStep(step + 1)}>
              <BsArrowRight className='quizArrow2' />
            </div>
          </div>
        );
      case 2:
        return (
          <div className='quizPg1'>
            <div className='quizTitle1'>Hello</div>
            <div className='quizTitle2'>traveller</div>
            <div className='quizVertLine1' />
            <div className='quizArrowMain1' onClick={() => setStep(step + 1)}>
              <BsArrowRight className='quizArrow1' />
            </div>
          </div>
        );
      case 3:
        return (
          <div className='quizPg8'>
            <div className='letsBeginName'>
              <div className='letsName'>Let's travel..</div>
              <div className='beginName'>The new beginning</div>
            </div>
            <div className='quizPg2SubM'>
              <div className='quizPg2Sub'>
                <div className='quizPg2SubL'>
                  <div
                    className={store == 'Store' ? 'Storequizz' : 'Storequiz'}
                    onClick={() => setStore('Store')}>
                    <FaStoreAlt
                      className={store == 'Store' ? 'storeIconn' : 'storeIcon'}
                    />
                    <div
                      className={store == 'Store' ? 'storeNamee' : 'storeName'}>
                      Store
                    </div>
                  </div>
                  <div className='knowaboutp'>
                    <p className='knowaboutq'>Know about us in 6 Pages</p>
                    <BsBook className='knowabouti' />
                  </div>
                </div>
                <div className='quizVertLine2' />
                <div className='quizPg2SubLB'>
                  <div
                    className={
                      store == 'Contest' ? 'Contestquizz' : 'Contestquiz'
                    }
                    onClick={() => setStore('Contest')}>
                    <BsTrophy
                      className={
                        store == 'Contest' ? 'contestIconn' : 'contestIcon'
                      }
                    />
                    <div
                      className={
                        store == 'Contest' ? 'contestNamee' : 'contestName'
                      }>
                      Contest
                    </div>
                  </div>
                  <div className='win2nights'>
                    <p className='win2nightsq'>
                      Win 2 Nights Stay for Maldives
                    </p>
                    <img
                      src={islandIcon}
                      alt='islandIcon'
                      className='win2nightsi'
                    />
                  </div>
                </div>
              </div>
              <div
                className='quizArrowMain2'
                onClick={() => {
                  if (store == 'Store') {
                    setStep(step + 1);
                  }
                  if (store == 'Contest') {
                    setStep(10);
                  }
                }}>
                <BsArrowRight className='quizArrow2' />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className='quizPg2'>
            <div className='kuttyPara'>
              <p className='kuttyPara1'>Kutty brief about us..</p>
              <p className='kuttyPara2'>
                We are India's 1st tour planning company. Here we make you
                understand the destination before you plan and make sure you're
                spending your money at right spot.
              </p>
              <p className='kuttyPara2'>
                No more necessity to travel in the packages which is not
                suitable for your preferences
              </p>
              <p className='kuttyPara2'>Have a new beginning with us!</p>
            </div>
            <div className='quizVertLine3' />
            <div className='quizArrowMain3' onClick={() => setStep(step + 1)}>
              <BsArrowRight className='quizArrow3' />
            </div>
          </div>
        );
      case 5:
        return (
          <div className='quizPg8'>
            <div className='certtImg'>
              <img src={cert} alt='cert' />
            </div>
            <div className='quizPg4Main'>
              <img src={countriess} alt='18countries' className='countImg' />
              <div className='quizVertLine3' />
              <div className='quizArrowMain2' onClick={() => setStep(step + 1)}>
                <BsArrowRight className='quizArrow2' />
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className='quizPg2'>
            <div className='catQuizz'>
              <div>
                <p>Categories</p>
                <p>Covered</p>
              </div>
              <ImBook className='catQuizzIcon' />
            </div>
            <div className='catQuizz1'>
              <div className='catQuizz1Sub'>
                <div className='catQuizz1SubI'>
                  <div>
                    <BsStarFill className='catQuizStar' />
                    <BsStarFill className='catQuizStar' />
                  </div>
                  <p>International</p>
                </div>
                <div className='catQuizz1SubC'>
                  <div>
                    <BsStarFill className='catQuizStar' />
                    <BsStarFill className='catQuizStar' />
                  </div>
                  <p>Cruise Ships</p>
                </div>
                <div className='catQuizz1SubF'>
                  <div>
                    <BsStarFill className='catQuizStar' />
                    <BsStarFill className='catQuizStar' />
                  </div>
                  <p>Family</p>
                </div>
              </div>
              <div className='quizVertLine4' />
              <div className='catQuizz1Sub'>
                <div className='catQuizz1SubIn'>
                  <div>
                    <BsStarFill className='catQuizStar' />
                    <BsStarFill className='catQuizStar' />
                  </div>
                  <p>India</p>
                </div>
                <div className='catQuizz1SubW'>
                  <div>
                    <BsStarFill className='catQuizStar' />
                    <BsStarFill className='catQuizStar' />
                  </div>
                  <p>Wildlife</p>
                </div>
                <div className='catQuizz1SubH'>
                  <div>
                    <BsStarFill className='catQuizStar' />
                    <BsStarFill className='catQuizStar' />
                  </div>
                  <p>Honeymoon</p>
                </div>
              </div>
            </div>
            <div className='quizArrowMain2' onClick={() => setStep(step + 1)}>
              <BsArrowRight className='quizArrow2' />
            </div>
          </div>
        );
      case 7:
        return (
          <div className='quizPg2'>
            <div className='celebs'>
              <p>Celeb's who used our Service</p>
              <div className='quizHoriLine' />
            </div>
            <div className='celebsImg__Main'>
              <div>
                <div className='celebsImg'>
                  <img src={celeb1} alt='' />
                </div>
                <div className='celebsImg'>
                  <img src={celeb2} alt='' />
                </div>
              </div>
              <div>
                <div className='celebsImg'>
                  <img src={celeb3} alt='' />
                </div>
                <div className='celebsImg'>
                  <img src={celeb4} alt='' />
                </div>
              </div>
            </div>
            <div className='quizArrowMain2' onClick={() => setStep(step + 1)}>
              <BsArrowRight className='quizArrow2' />
            </div>
          </div>
        );
      case 8:
        return (
          <div className='quizPg8'>
            <div className='instasll'>
              <img src={insta} alt='insta' className='intImgs' />
            </div>
            <div>
              <img src={instaf} alt='instf' className='instafImg' />
            </div>
            <div className='quizArrowMain2' onClick={() => setStep(step + 1)}>
              <BsArrowRight className='quizArrow2' />
            </div>
          </div>
        );
      case 9:
        return (
          <div className='quizPg8'>
            <div className='celebss'>
              <p>Willing to opt for the Lucky Draw ?</p>
              <div className='quizHoriLine' />
            </div>
            <div className='yesnoQM'>
              <div className='yesnoQ'>
                <div
                  className={lucky == 'yes' ? 'yesnoQRR' : 'yesnoQR'}
                  onClick={() => setLucky('yes')}>
                  <img src={yesl} alt='yesl' />
                </div>
                <div className='quizVertLine4' />
                <div
                  className={lucky == 'no' ? 'yesnoQRNN' : 'yesnoQRN'}
                  onClick={() => setLucky('no')}>
                  <img src={nol} alt='nol' />
                </div>
              </div>
              <div
                className='quizArrowMain2'
                onClick={() => {
                  if (lucky == 'yes') {
                    setStep(step + 1);
                  }
                  if (lucky == 'no') {
                    setStep(step + 2);
                  }
                }}>
                <BsArrowRight className='quizArrow2' />
              </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className='quizPg9Main'>
            <div className='quizPg9'>
              <div>
                <p className='luckyHello'>Hello Traveller!</p>
                <p className='luckyHelloIn'>
                  This information will help us to connect with you if you're
                  winning the lucky draw
                </p>
              </div>
              <div>
                <div className='luckyyInputMa'>
                  <input
                    type='text'
                    className='luckyyInput'
                    placeholder='Full Name'
                  />
                  <BsPerson className='luckydrawIcon' />
                </div>
                <div className='luckyyInputMa'>
                  <input
                    type='text'
                    className='luckyyInput'
                    placeholder='Email ID'
                  />
                  <MdEmail className='luckydrawIcon' />
                </div>
                <div className='luckyyInputMa'>
                  <input
                    type='text'
                    className='luckyyInput'
                    placeholder='Phone number'
                  />
                  <FaMobileAlt className='luckydrawIcon' />
                </div>
              </div>
              <div className='genderLucky'>
                <div className='genderLuckySub1'>
                  <p>Female</p>
                  <img src={female} alt='female' className='feeimg' />
                </div>
                <div className='genderLuckySub1'>
                  <p>Male</p>
                  <img src={male} alt='male' className='feeimg' />
                </div>
                <div className='genderLuckySub1'>
                  <p>I'm Opting for</p>
                  <div>dsf</div>
                </div>
              </div>
              <div className='luckySubmit'>
                <p>Submit</p>
              </div>
            </div>
            <div>
              <p>Privacy protected</p>
            </div>
          </div>
        );
      case 11:
        return (
          <div className='quizPg8'>
            <div>
              <img src={njoy} alt='njoy' className='njoyyImg' />
            </div>
            <div className='njoyBtn'>
              <p>Click here to Visit our Website</p>
            </div>
          </div>
        );
      default:
        setStep(1);
    }
  };

  return (
    <div className='AllMainss'>
      {step !== 1 && step !== 2 ? (
        <div className='quizSendMainD'>
          <MdExitToApp
            className='prevquiz'
            onClick={() => {
              if (step == 11) {
                setStep(step - 2);
              } else {
                setStep(step - 1);
              }
            }}
          />
          <FiSend className='quizSend' />
        </div>
      ) : null}
      <div className='mainQuiz'>{renderPage()}</div>
    </div>
  );
};

export default Quiz;
