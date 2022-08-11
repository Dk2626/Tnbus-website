// import React, { useState, useEffect } from 'react';
// import Footer from '../Components/Footer';
// import Navbar from '../Components/Navbar';
// import { database } from '../firebase';
// import './SearchScreen.css';
// import { Link } from 'react-scroll';

// const SearchScreen = () => {
//   const [busDatas, setBusDatas] = useState('');
//   const [origin, setOrigin] = useState('');
//   const [finalOrigin, setFinalOrigin] = useState('');
//   const [originPicked, setOriginPicked] = useState('');
//   const [finalDestinaiton, setFinalDestination] = useState('');
//   const [destinaitonPicked, setDestinaitonPicked] = useState('');
//   const [finalData, setFinalData] = useState('');
//   const [topBusData, setTopBusData] = useState('');

//   const getBusData = () => {
//     let initialData = [];
//     database.ref('originDest').on('value', (data) => {
//       data.forEach((data) => {
//         initialData.push(data.val());
//       });
//       setBusDatas(initialData);
//     });
//   };

//   useEffect(() => {
//     getBusData();
//   }, []);

//   const getOriginData = () => {
//     let initialData = [];
//     if (busDatas.length > 0) {
//       busDatas.forEach((busData) => {
//         initialData.push(busData.origin);
//       });
//       setOrigin(initialData);
//     }
//   };

//   useEffect(() => {
//     getOriginData();
//   }, [busDatas]);

//   const getFinalOriginData = () => {
//     const initialData = [];
//     if (origin.length > 0) {
//       origin.forEach((origin) => {
//         if (!initialData.includes(origin)) {
//           initialData.push(origin);
//         }
//         setFinalOrigin(initialData);
//       });
//     }
//   };

//   useEffect(() => {
//     getFinalOriginData();
//   }, [origin]);

//   const getDestData = () => {
//     let initialData = [];
//     if (busDatas.length > 0) {
//       busDatas.forEach((busData) => {
//         if (busData.origin === originPicked) {
//           initialData.push(busData.destination);
//         }
//       });
//       setFinalDestination(initialData);
//     }
//   };
//   useEffect(() => {
//     getDestData();
//   }, [originPicked]);

//   const getFinalData = () => {
//     let initialData = [];
//     if (busDatas.length > 0) {
//       busDatas.forEach((busData) => {
//         if (
//           busData.origin === originPicked &&
//           busData.destination === destinaitonPicked
//         ) {
//           initialData.push(busData);
//         }
//       });
//       setFinalData(initialData);
//     }
//   };

//   const getTopDestData = () => {
//     let initialData = [];
//     database.ref('originDest').on('value', (data) => {
//       data.forEach((data) => {
//         if (data.val().origin === 'Chennai') {
//           initialData.push(data.val());
//         }
//       });
//       setTopBusData(initialData);
//     });
//   };

//   useEffect(() => {
//     getTopDestData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className='Homemain'>
//         <h1 className='HomemainH'>TN Bus Report</h1>
//         <Link
//           className='HomemainL'
//           activeClass='active'
//           to='detail'
//           smooth={true}
//           duration={500}
//           offset={50}>
//           <button className='HomemainB'>Explore</button>
//         </Link>
//       </div>
//       <div className='detail'>
//         <p>
//           This site is mainly used for searching the Tamil nadu Moffusil bus,
//           people can reach their destination easy by searching own destination.
//           This also give how many city that bus can go they can validate from
//           searching the origin and desitination.
//         </p>
//       </div>
//       <div className='main'>
//         <h1 className='headMain'>Search Here</h1>
//         <div className='mainOrigin'>
//           <label>Origin</label>
//           {finalOrigin.length > 0 ? (
//             <div>
//               <select
//                 value={originPicked}
//                 onChange={(e) => setOriginPicked(e.target.value)}>
//                 {originPicked === '' && <option>Select Origin</option>}
//                 {finalOrigin.map((origin, i) => {
//                   return (
//                     <option value={origin} key={i}>
//                       {origin}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>
//           ) : (
//             <div>
//               <select>
//                 <option>Select Origin</option>
//               </select>
//             </div>
//           )}
//         </div>
//         <div className='mainOrigin'>
//           <label>Destination</label>
//           {finalDestinaiton.length > 0 ? (
//             <div>
//               <select
//                 value={destinaitonPicked}
//                 onChange={(e) => setDestinaitonPicked(e.target.value)}>
//                 {destinaitonPicked === '' && (
//                   <option>Select Destination</option>
//                 )}
//                 {finalDestinaiton.map((destinaiton, i) => {
//                   return (
//                     <option value={destinaiton} key={i}>
//                       {destinaiton}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>
//           ) : (
//             <div>
//               <select>
//                 <option>Select Destination</option>
//               </select>
//             </div>
//           )}
//         </div>
//         <div>
//           <button
//             onClick={getFinalData}
//             className={
//               !originPicked || !destinaitonPicked ? 'desBtn' : 'serchBtn'
//             }
//             disabled={!originPicked || !destinaitonPicked}>
//             Search
//           </button>
//         </div>
//         {finalData.length > 0 && (
//           <div className='finalDataMain'>
//             {finalData.map((item) => {
//               const { origin, destination, busType, timings } = item;
//               return (
//                 <div>
//                   {timings.length > 0 && (
//                     <div className='finalDataMainSub'>
//                       {timings.map((time) => {
//                         return (
//                           <div className='finalData'>
//                             <div>
//                               <label>Origin: </label>
//                               <label>{origin}</label>
//                             </div>
//                             <div>
//                               <label>Destination: </label>
//                               <label>{destination}</label>
//                             </div>
//                             <div>
//                               <label>Bus Type: </label>
//                               <label>{busType}</label>
//                             </div>
//                             <div>
//                               <label>Time: </label>
//                               <label>{time.data}</label>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//       <div className='main2'>
//         <h1>Top Origin & Destination</h1>
//         {topBusData.length > 0 && (
//           <div className='finalDataMain'>
//             {topBusData.map((item) => {
//               const { origin, destination, busType, timings } = item;
//               return (
//                 <div>
//                   {timings.length > 0 && (
//                     <div className='finalDataMainSub'>
//                       {timings.map((time) => {
//                         return (
//                           <div className='finalData'>
//                             <div>
//                               <label>Origin: </label>
//                               <label>{origin}</label>
//                             </div>
//                             <div>
//                               <label>Destination: </label>
//                               <label>{destination}</label>
//                             </div>
//                             <div>
//                               <label>Bus Type: </label>
//                               <label>{busType}</label>
//                             </div>
//                             <div>
//                               <label>Time: </label>
//                               <label>{time.data}</label>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SearchScreen;
