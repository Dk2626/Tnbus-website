import React, { useState } from 'react';
import { database } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import './AdminScreen.css';

const AdminScreen = () => {
  const [busData, setBusData] = useState({
    origin: '',
    destination: '',
    busType: 'Moffusil Bus',
    timings: [],
  });
  console.log('busData', busData);

  const { origin, destination, busType, timings } = busData;
  //   const [time, setTime] = useState({
  //     id: uuidv4(),
  //     data: '',
  //   });

  let times = [
    '12:00 AM',
    '12:05 AM',
    '12:10 AM',
    '12:15 AM',
    '12:20 AM',
    '12:25 AM',
    '12:30 AM',
    '12:35 AM',
    '12:40 AM',
    '12:45 AM',
    '12:50 AM',
    '12:55 AM',
    '01:00 AM',
    '01:05 AM',
    '01:10 AM',
    '01:15 AM',
    '01:20 AM',
    '01:25 AM',
    '01:30 AM',
    '01:35 AM',
    '01:40 AM',
    '01:45 AM',
    '01:50 AM',
    '01:55 AM',
    '02:00 AM',
    '02:05 AM',
    '02:10 AM',
    '02:15 AM',
    '02:20 AM',
    '02:25 AM',
    '02:30 AM',
    '02:35 AM',
    '02:40 AM',
    '02:45 AM',
    '02:50 AM',
    '02:55 AM',
    '03:00 AM',
    '03:05 AM',
    '03:10 AM',
    '03:15 AM',
    '03:20 AM',
    '03:25 AM',
    '03:30 AM',
    '03:35 AM',
    '03:40 AM',
    '03:45 AM',
    '03:50 AM',
    '03:55 AM',
    '04:00 AM',
    '04:05 AM',
    '04:10 AM',
    '04:15 AM',
    '04:20 AM',
    '04:25 AM',
    '04:30 AM',
    '04:35 AM',
    '04:40 AM',
    '04:45 AM',
    '04:50 AM',
    '04:55 AM',
    '05:00 AM',
    '05:05 AM',
    '05:10 AM',
    '05:15 AM',
    '05:20 AM',
    '05:25 AM',
    '05:30 AM',
    '05:35 AM',
    '05:40 AM',
    '05:45 AM',
    '05:50 AM',
    '05:55 AM',
    '06:00 AM',
    '06:05 AM',
    '06:10 AM',
    '06:15 AM',
    '06:20 AM',
    '06:25 AM',
    '06:30 AM',
    '06:35 AM',
    '06:40 AM',
    '06:45 AM',
    '06:50 AM',
    '06:55 AM',
    '07:00 AM',
    '07:05 AM',
    '07:10 AM',
    '07:15 AM',
    '07:20 AM',
    '07:25 AM',
    '07:30 AM',
    '07:35 AM',
    '07:40 AM',
    '07:45 AM',
    '07:50 AM',
    '07:55 AM',
    '08:00 AM',
    '08:05 AM',
    '08:10 AM',
    '08:15 AM',
    '08:20 AM',
    '08:25 AM',
    '08:30 AM',
    '08:35 AM',
    '08:40 AM',
    '08:45 AM',
    '08:50 AM',
    '08:55 AM',
    '09:00 AM',
    '09:05 AM',
    '09:10 AM',
    '09:15 AM',
    '09:20 AM',
    '09:25 AM',
    '09:30 AM',
    '09:35 AM',
    '09:40 AM',
    '09:45 AM',
    '09:50 AM',
    '09:55 AM',
    '10:00 AM',
    '10:05 AM',
    '10:10 AM',
    '10:15 AM',
    '10:20 AM',
    '10:25 AM',
    '10:30 AM',
    '10:35 AM',
    '10:40 AM',
    '10:45 AM',
    '10:50 AM',
    '10:55 AM',
    '11:00 AM',
    '11:05 AM',
    '11:10 AM',
    '11:15 AM',
    '11:20 AM',
    '11:25 AM',
    '11:30 AM',
    '11:35 AM',
    '11:40 AM',
    '11:45 AM',
    '11:50 AM',
    '11:55 AM',
    '12:00 PM',
    '12:05 PM',
    '12:10 PM',
    '12:15 PM',
    '12:20 PM',
    '12:25 PM',
    '12:30 PM',
    '12:35 PM',
    '12:40 PM',
    '12:45 PM',
    '12:50 PM',
    '12:55 PM',
    '01:00 PM',
    '01:05 PM',
    '01:10 PM',
    '01:15 PM',
    '01:20 PM',
    '01:25 PM',
    '01:30 PM',
    '01:35 PM',
    '01:40 PM',
    '01:45 PM',
    '01:50 PM',
    '01:55 PM',
    '02:00 PM',
    '02:05 PM',
    '02:10 PM',
    '02:15 PM',
    '02:20 PM',
    '02:25 PM',
    '02:30 PM',
    '02:35 PM',
    '02:40 PM',
    '02:45 PM',
    '02:50 PM',
    '02:55 PM',
    '03:00 PM',
    '03:05 PM',
    '03:10 PM',
    '03:15 PM',
    '03:20 PM',
    '03:25 PM',
    '03:30 PM',
    '03:35 PM',
    '03:40 PM',
    '03:45 PM',
    '03:50 PM',
    '03:55 PM',
    '04:00 PM',
    '04:05 PM',
    '04:10 PM',
    '04:15 PM',
    '04:20 PM',
    '04:25 PM',
    '04:30 PM',
    '04:35 PM',
    '04:40 PM',
    '04:45 PM',
    '04:50 PM',
    '04:55 PM',
    '05:00 PM',
    '05:05 PM',
    '05:10 PM',
    '05:15 PM',
    '05:20 PM',
    '05:25 PM',
    '05:30 PM',
    '05:35 PM',
    '05:40 PM',
    '05:45 PM',
    '05:50 PM',
    '05:55 PM',
    '06:00 PM',
    '06:05 PM',
    '06:10 PM',
    '06:15 PM',
    '06:20 PM',
    '06:25 PM',
    '06:30 PM',
    '06:35 PM',
    '06:40 PM',
    '06:45 PM',
    '06:50 PM',
    '06:55 PM',
    '07:00 PM',
    '07:05 PM',
    '07:10 PM',
    '07:15 PM',
    '07:20 PM',
    '07:25 PM',
    '07:30 PM',
    '07:35 PM',
    '07:40 PM',
    '07:45 PM',
    '07:50 PM',
    '07:55 PM',
    '08:00 PM',
    '08:05 PM',
    '08:10 PM',
    '08:15 PM',
    '08:20 PM',
    '08:25 PM',
    '08:30 PM',
    '08:35 PM',
    '08:40 PM',
    '08:45 PM',
    '08:50 PM',
    '08:55 PM',
    '09:00 PM',
    '09:05 PM',
    '09:10 PM',
    '09:15 PM',
    '09:20 PM',
    '09:25 PM',
    '09:30 PM',
    '09:35 PM',
    '09:40 PM',
    '09:45 PM',
    '09:50 PM',
    '09:55 PM',
    '10:00 PM',
    '10:05 PM',
    '10:10 PM',
    '10:15 PM',
    '10:20 PM',
    '10:25 PM',
    '10:30 PM',
    '10:35 PM',
    '10:40 PM',
    '10:45 PM',
    '10:50 PM',
    '10:55 PM',
    '11:00 PM',
    '11:05 PM',
    '11:10 PM',
    '11:15 PM',
    '11:20 PM',
    '11:25 PM',
    '11:30 PM',
    '11:35 PM',
    '11:40 PM',
    '11:45 PM',
    '11:50 PM',
    '11:55 PM',
  ];

  const deleteTime = (ids) => {
    const timesFilter = timings.filter((time) => time.id !== ids);
    setBusData({
      ...busData,
      timings: timesFilter,
    });
  };

  const submitData = () => {
    database
      .ref('originDest')
      .push({
        origin: origin,
        destination: destination,
        busType: busType,
        timings: timings,
      })
      .then(() => {
        setBusData({
          origin: '',
          destination: '',
          busType: 'Moffusil Bus',
          timings: '',
        });
        // alert('Data added');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='AdminMainForm'>
      <h1>Admin Screen</h1>
      <div className='AdminMain'>
        <div className='AdminMain1'>
          <div>
            <label>Origin</label>
            <input
              value={origin}
              onChange={(e) =>
                setBusData({
                  ...busData,
                  origin: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Destination</label>
            <input
              value={destination}
              onChange={(e) =>
                setBusData({
                  ...busData,
                  destination: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Time</label>
            <div className='timeMain'>
              {times.map((time, i) => {
                return (
                  <div key={i} className='timeMainSub'>
                    <h4
                      className='time'
                      onClick={() =>
                        setBusData({
                          ...busData,
                          timings: [
                            ...timings,
                            {
                              id: uuidv4(),
                              data: time,
                            },
                          ],
                        })
                      }>
                      {time}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='AdminMain2'>
          <div>
            <label>Origin: </label>
            <label>{origin}</label>
          </div>
          <div>
            <label>Destination: </label>
            <label>{destination}</label>
          </div>
          <div>
            <label>Time</label>
            {timings.length > 0 && (
              <div className='timeMain'>
                {timings.map((time) => {
                  return (
                    <label
                      className='timeMainSub'
                      onClick={() => deleteTime(time.id)}>
                      {time.data}
                    </label>
                  );
                })}
              </div>
            )}
          </div>
          <button
            className='submit'
            disabled={timings.length <= 0}
            onClick={() => submitData()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
