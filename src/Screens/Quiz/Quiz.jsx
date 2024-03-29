import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import '../../Fonts/Fonts.css';
import { FiSend } from 'react-icons/fi';
import { FaStoreAlt, FaMobileAlt } from 'react-icons/fa';
import {
  BsBook,
  BsStarFill,
  BsTrophy,
  BsPerson,
  BsArrowRight,
  BsLockFill,
} from 'react-icons/bs';
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
import craft from '../../Assests/Quiz/craft.png';
import exploref from '../../Assests/Quiz/exploref.png';
import destearth from '../../Assests/Quiz/destearth.png';
import malisland from '../../Assests/Quiz/malisland.png';
import maltext from '../../Assests/Quiz/maltext.png';
import malres1 from '../../Assests/Quiz/malres1.png';
import malres2 from '../../Assests/Quiz/malres2.png';
import fuzi1 from '../../Assests/Quiz/fuzi1.png';
import fuzi3 from '../../Assests/Quiz/fuzi3.png';
import fuzi4 from '../../Assests/Quiz/fuzi4.png';
import oblu1 from '../../Assests/Quiz/oblu1.png';
import oblu3 from '../../Assests/Quiz/oblu3.png';
import oblu4 from '../../Assests/Quiz/oblu4.png';
import fuzi2 from '../../Assests/Quiz/fuzi2.jpg';
import fuzimaltext from '../../Assests/Quiz/fuzimaltext.png';
import oblumaltext from '../../Assests/Quiz/oblumaltext.png';
// import Sort from './Question';
import { firedb } from '../../firebase';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import quiz1 from '../../Assests/Quiz/quiz1.png';
// import quiz2 from '../assests/Quiz/quiz2.png';
// import quiz3 from '../assests/Quiz/quiz3.png';
// import quiz4 from '../assests/Quiz/quiz4.png';
// import quiz5 from '../assests/Quiz/quiz5.png';
// import quiz6 from '../assests/Quiz/quiz6.png';
// import quiz7 from '../assests/Quiz/quiz7.png';
// import quiz8 from '../assests/Quiz/quiz8.png';

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
  const [nextQuiz, setNextQuiz] = useState('');
  const [questionBank, setQuestionBank] = useState([]);
  // const [questionBank, setQuestionBank] = useState(
  //   Sort.sort((a, b) => a.randomQuiz - b.randomQuiz)
  // );
  const [counter, setCounter] = useState('');
  const [correct, setCorrect] = useState(0);
  const [start, setStart] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [exist, setExist] = useState(false);
  const [openExistModal, setOpenExistModal] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openResortModal, setOpenResortModal] = useState(false);
  const [openReq, setOpenReq] = useState(false);
  const shareUrl = 'https://www.touron.in/quiz-win-prize';
  var nTime;
  var cTime;
  const [resort, setResort] = useState('');

  let resorts = ['Maldives', 'Bali'];

  const submitForm = () => {
    let end = new Date();
    firedb
      .ref('quizzzztest')
      .push({
        name,
        email,
        phone,
        gender,
        opting,
        seconds: (end - start) / 1000,
        correct,
      })
      .then(() => {
        setStore('');
        setLucky('');
        setCorrect(0);
        setStep(1);
        setUser({
          name: '',
          email: '',
          phone: '',
          gender: '',
          opting: '',
        });
        setOpenModal(true);
      })
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    nTime = setTimeout(() => {
      if (nextQuiz < questionBank.length - 1) {
        setNextQuiz((prevQuiz) => prevQuiz + 1);
        setCounter(10);
      }
    }, 10000);
    return () => {
      clearTimeout(nTime);
    };
  }, [nextQuiz]);

  useEffect(() => {
    cTime = setTimeout(() => {
      if (counter >= 1) {
        setCounter(counter - 1);
        if (nextQuiz + 1 == questionBank.length && counter == 1) {
          submitForm();
        }
      }
    }, 1000);
    return () => {
      clearTimeout(cTime);
    };
  }, [counter]);

  const getQns = () => {
    let finalQns = [];
    firedb.ref('quizqns').on('value', (data) => {
      data.forEach((d) => {
        finalQns.push({
          qno: d.val().qno,
          questionText: d.val().questionText,
          answerOptions: d.val().answerOptions,
          answerCorrect: d.val().answerCorrect,
          randomQuiz: Math.random(),
        });
      });
      if (finalQns.length == 20) {
        setQuestionBank(
          finalQns.sort((a, b) => a.randomQuiz - b.randomQuiz).slice(0, 10)
        );
      }
    });
  };

  useEffect(() => {
    getQns();
  }, []);

  const getData = () => {
    let quizdataEmail = [];
    let quizdataPhone = [];
    firedb.ref('quiz').on('value', (data) => {
      data.forEach((d) => {
        quizdataEmail.push(d.val().email);
        quizdataPhone.push(d.val().phone);
      });
    });
    if (quizdataEmail.includes(email) || quizdataPhone.includes(phone)) {
      setExist(true);
    } else {
      setExist(false);
    }
  };

  useEffect(() => {
    getData();
  }, [email, phone]);

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
            <div
              className='letsBeginRes'
              onClick={() => {
                setStore('Resort');
                setStep(13);
              }}>
              <p className='letsBeginRespara'>Offer Crafted here</p>
              <img className='letsBeginRescraftImg' src={craft} alt='craft' />
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
          <div className='quizPg11'>
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
              <a
                href='https://www.instagram.com/touronholidays/'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={instaf} alt='instf' className='instafImg' />
              </a>
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
                    onChange={(e) =>
                      setUser({
                        ...user,
                        name: e.target.value,
                      })
                    }
                    value={name}
                    onBlur={() => {
                      if (name == '') {
                        setOpenReq(true);
                      } else {
                        setOpenReq(false);
                      }
                    }}
                  />
                  <BsPerson className='luckydrawIcon' />
                </div>
                <div className='luckyyInputMa'>
                  <input
                    type='email'
                    className='luckyyInput'
                    placeholder='Email ID'
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                    value={email}
                    onBlur={() => {
                      if (email == '') {
                        setOpenReq(true);
                      } else {
                        setOpenReq(false);
                      }
                    }}
                  />
                  <MdEmail className='luckydrawIcon' />
                </div>
                <div className='luckyyInputMa'>
                  <input
                    type='number'
                    className='luckyyInput'
                    placeholder='Phone number'
                    onChange={(e) =>
                      setUser({
                        ...user,
                        phone: e.target.value,
                      })
                    }
                    value={phone}
                    onBlur={() => {
                      if (phone == '') {
                        setOpenReq(true);
                      } else {
                        setOpenReq(false);
                      }
                    }}
                  />
                  <FaMobileAlt className='luckydrawIcon' />
                </div>
              </div>
              <div className='genderLucky'>
                <div className='genderLuckySub1'>
                  <p>Female</p>
                  <div
                    className={gender == 'female' ? 'feeimgg' : 'feeimg'}
                    onClick={() => {
                      setUser({
                        ...user,
                        gender: 'female',
                      });
                      setOpenReq(false);
                    }}>
                    <img src={female} alt='female' />
                  </div>
                </div>
                <div className='genderLuckySub1'>
                  <p>Male</p>
                  <div
                    className={gender == 'male' ? 'meeimgg' : 'meeimg'}
                    onClick={() => {
                      setUser({
                        ...user,
                        gender: 'male',
                      });
                      setOpenReq(false);
                    }}>
                    <img src={male} alt='male' />
                  </div>
                </div>
                <div className='genderLuckySub111'>
                  <p>I'm Opting for</p>
                  <div className='genderLuckySub11M'>
                    <div
                      className='genderLuckySub11'
                      onClick={() => {
                        setUser({
                          ...user,
                          opting: 'Offer Updates',
                        });
                        setOpenReq(false);
                      }}>
                      <div
                        className={
                          opting == 'Offer Updates'
                            ? 'LuckyCirclee'
                            : 'LuckyCircle'
                        }
                      />
                      <p>Offer Updates</p>
                    </div>
                    <div
                      className='genderLuckySub11'
                      onClick={() => {
                        setUser({
                          ...user,
                          opting: 'Product Knowledge',
                        });
                        setOpenReq(false);
                      }}>
                      <div
                        className={
                          opting == 'Product Knowledge'
                            ? 'LuckyCirclee'
                            : 'LuckyCircle'
                        }
                      />
                      <p>Product Knowledge</p>
                    </div>
                    <div
                      className='genderLuckySub11'
                      onClick={() => {
                        setUser({
                          ...user,
                          opting: 'WhatApp Only',
                        });
                        setOpenReq(false);
                      }}>
                      <div
                        className={
                          opting == 'WhatApp Only'
                            ? 'LuckyCirclee'
                            : 'LuckyCircle'
                        }
                      />
                      <p>WhatApp Only</p>
                    </div>
                  </div>
                </div>
              </div>
              {openReq && (
                <div className='quiz-req'>
                  <p>All Fields are Required!</p>
                </div>
              )}
              {exist == true ? (
                <button
                  className={openReq ? 'luckySubmitBtn' : 'luckySubmitBtnn'}
                  onClick={() => setOpenExistModal(true)}>
                  Submit
                </button>
              ) : (
                <button
                  className={openReq ? 'luckySubmitBtn' : 'luckySubmitBtnn'}
                  onClick={() => {
                    if (name && email && phone && gender && opting) {
                      setStep(step + 2);
                      setStart(new Date());
                      setNextQuiz(0);
                      setCounter(10);
                    } else if (
                      name == '' ||
                      email == '' ||
                      phone == '' ||
                      gender == '' ||
                      opting == ''
                    ) {
                      setOpenReq(true);
                    }
                  }}>
                  Submit
                </button>
              )}
            </div>
            <div className='luckyProtect'>
              <p>Privacy protected</p>
              <BsLockFill className='prtectIcon' />
            </div>
          </div>
        );
      case 11:
        return (
          <div className='quizPg8'>
            <div>
              <img src={njoy} alt='njoy' className='njoyyImg' />
            </div>
            <Link to='/' className='njoyBtnLink'>
              <button className='njoyBtn'>
                Click here to Visit our Website
              </button>
            </Link>
          </div>
        );
      case 12:
        return (
          <div className='quizPg1'>
            <div className='quizImggg'>
              <img src={quiz1} alt='imgQuiz' />
            </div>
            <div className='quizQuestionOut'>
              <p>
                Question {nextQuiz + 1} out of {questionBank.length}
              </p>
            </div>
            <div className='quizQuestion'>
              <p>{questionBank[nextQuiz].questionText}</p>
            </div>
            {questionBank[nextQuiz].answerOptions.map((q, i) => {
              return (
                <button
                  key={i}
                  className='quizAnswers'
                  onClick={() => {
                    if (nextQuiz < questionBank.length - 1) {
                      setNextQuiz(nextQuiz + 1);
                    }
                    setCounter(10);
                    q == questionBank[nextQuiz].answerCorrect &&
                      setCorrect(correct + 1);
                    if (nextQuiz + 1 == questionBank.length) {
                      setCounter(0);
                      submitForm();
                    }
                  }}>
                  {q}
                </button>
              );
            })}
          </div>
        );
      case 13:
        return (
          <div className='quizPg8'>
            <div>
              <p className='quixExplorePara1'>
                Explore the Beauty of Journey here..
              </p>
              <p className='quixExplorePara2'>Travel is magical here</p>
            </div>
            <img className='quixExploreImg' src={exploref} alt='exploref' />
            <button
              className='quixExploreBtn'
              onClick={() => setStep(step + 1)}>
              <p className='quixExploreBtnTxt1'>{'>>>'}</p>
              <p className='quixExploreBtnTxt2'>Click to explore our Offers</p>
            </button>
          </div>
        );
      case 14:
        return (
          <div className='quizPg8'>
            <div>
              <p className='quixDestniPara1'>
                Offer around the best destination..
              </p>
              <p className='quixDestniPara2'>
                Incredible Sale for Incredible People
              </p>
            </div>
            <img className='quixDestniImg' src={destearth} alt='destearth' />
            <button
              className='quixDestniBtn'
              onClick={() => setOpenResortModal(true)}>
              <p className='quixDestniBtnTxt1'>{'>>>'}</p>
              <p className='quixDestniBtnTxt2'>Select the destination</p>
            </button>
          </div>
        );
      case 15:
        return (
          <div className='quizPg8'>
            <img className='quizMaldImg' src={malisland} alt='malisland' />
            <div className='malTextMains'>
              <img className='malTextImg' src={maltext} alt='maltext' />
              <p className='malTextpara1'>
                It’s no secret that the Maldives is one of the most beautiful
                places on earth. If you’ve been, you know exactly how magical it
                is to be surrounded by nothing but crystal-blue water and
                velvety, white sand. But if you haven’t been…
              </p>
              <p className='malTextpara2'>
                Well, we can’t stop you from going! Explore our unmatchable
                offers with beautiful resorts just for few days!{' '}
              </p>
            </div>
            <div className='malMain2Img'>
              <div
                className='malMain2Subb'
                onClick={() => {
                  setResort('fuzi');
                  setStep(step + 1);
                }}>
                <img src={malres1} alt='malres1' className='malres1Text1' />
                <div className='malIslandsss'>
                  <img src={fuzi1} alt='fuzi' />
                </div>
              </div>
              <div
                className='malMain2Subb'
                onClick={() => {
                  setResort('oblu');
                  setStep(step + 1);
                }}>
                <img src={malres2} alt='malres2' className='malres2Text2' />
                <div className='malIslandsss'>
                  <img src={oblu1} alt='oblu' />
                </div>
              </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div>
            {resort == 'fuzi' ? (
              <>
                <div className='islandssMainDeta'>
                  <img src={fuzi2} alt='fuzi2' />
                </div>
                <div className='fuzimaltextMaain'>
                  <img
                    src={fuzimaltext}
                    alt='fuzimaltext'
                    className='fuzimaltextImg'
                  />
                  <p className='fuzimaltextImgPara'>
                    Merging Maldivian design and architecture with modern
                    aesthetics, Fushifaru Maldives’ beach and water villas exude
                    a sense of cosiness yet luxurious in space and amenities.
                  </p>
                  <div className='fuziiImgssMainn'>
                    <div>
                      <img src={fuzi3} alt='fuzi3' className='fuziiImgss' />
                    </div>
                    <div>
                      <img src={fuzi4} alt='fuzi4' className='fuziiImgss' />
                    </div>
                  </div>
                  <div className='fuziiBtnss'>
                    <button className='fuziiBtnss1'>Factsheet</button>
                    <button className='fuziiBtnss2'>Website</button>
                    <button className='fuziiBtnss3'>Check Pricing</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='islandssMainDeta'>
                  <img src={fuzi2} alt='fuzi2' />
                </div>
                <div className='fuzimaltextMaainn'>
                  <img
                    src={oblumaltext}
                    alt='fuzimaltext'
                    className='oblumaltextImg'
                  />
                  <p className='oblumaltextImgPara'>
                    OBLU XPERIENCE Ailafushi elevates tropical island living
                    through smart services, playful design, and invigorating
                    experiences. A 15-minute speedboat ride from Malé
                    International Airport brings you to Ailafushi island, which
                    means family island in the local dialect of Dhivehi. La
                    Promenade adds a touch of chic with its vibrant retail and
                    café scene, where you can socialise with like-minded souls.
                    Simply Irresistible!
                  </p>
                  <div className='fuziiImgssMainn'>
                    <div>
                      <img src={oblu3} alt='fuzi3' className='fuziiImgss' />
                    </div>
                    <div>
                      <img src={oblu4} alt='fuzi4' className='fuziiImgss' />
                    </div>
                  </div>
                  <div className='fuziiBtnss'>
                    <button className='fuziiBtnss1'>Factsheet</button>
                    <button className='fuziiBtnss2'>Website</button>
                    <button className='fuziiBtnss3'>Check Pricing</button>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      default:
        setStep(1);
    }
  };

  return (
    <div className='AllMainss'>
      {step !== 1 && step !== 2 && step !== 12 ? (
        <div className='quizSendMainD'>
          <MdExitToApp
            className='prevquiz'
            onClick={() => {
              if (step == 11) {
                setStep(step - 2);
              } else if (step == 10 && store == 'Contest') {
                setStep(3);
              } else if (step == 13) {
                setStep(3);
              } else {
                setStep(step - 1);
              }
            }}
          />
          <FiSend
            className='quizSend'
            onClick={() => setOpenShareModal(true)}
          />
        </div>
      ) : null}
      {step == 12 && (
        <div className='quizSendMainDD'>
          <div className='countQuizz'>
            <p>{counter}</p>
          </div>
        </div>
      )}
      {openModal && (
        <div className='quizPopup'>
          <div className='quizPopup_content'>
            <div
              className='quizPopup__content-close'
              onClick={() => setOpenModal(false)}>
              &times;
            </div>
            <p className='quizPopup_para'>Thanks for participating the Quiz</p>
            <Link to='/' className='njoyBtnLink'>
              <button className='quizPopup_btn'>Visit our Website</button>
            </Link>
          </div>
        </div>
      )}
      {openExistModal && (
        <div className='quizPopup'>
          <div className='quizPopup_content'>
            <div
              className='quizPopup__content-close'
              onClick={() => setOpenExistModal(false)}>
              &times;
            </div>
            <p className='quizPopup_para'>Email / Mobile already Exist!</p>
          </div>
        </div>
      )}
      {openShareModal && (
        <div className='quizPopup'>
          <div className='quizPopup_contentShare'>
            <div
              className='quizPopup__content-closeShare'
              onClick={() => setOpenShareModal(false)}>
              &times;
            </div>
            <div className='quizPopup__content-BtnShare'>
              <WhatsappShareButton
                url={shareUrl}
                title='tourOn Quiz, Win prize'>
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
              <FacebookShareButton
                url={shareUrl}
                title='tourOn Quiz, Win prize'>
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <EmailShareButton url={shareUrl} title='tourOn Quiz, Win prize'>
                <EmailIcon size={40} round={true} />
              </EmailShareButton>
              <LinkedinShareButton
                url={shareUrl}
                title='tourOn Quiz, Win prize'>
                <LinkedinIcon size={40} round={true} />
              </LinkedinShareButton>
              <TwitterShareButton url={shareUrl} title='tourOn Quiz, Win prize'>
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      )}
      {openResortModal && (
        <div className='quizPopup'>
          <div className='quizPopup_contentResort'>
            <div
              className='quizPopup__content-closeShare'
              onClick={() => setOpenResortModal(false)}>
              &times;
            </div>
            <div className='quizPopup__content-ResortShare'>
              {resorts.map((resort) => {
                return (
                  <button
                    className='quizPopup__content-ResortShareBtn'
                    onClick={() => {
                      setStep(15);
                      setOpenResortModal(false);
                    }}>
                    {resort}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className='mainQuiz'>{renderPage()}</div>
    </div>
  );
};

export default Quiz;
