import React, { Fragment } from 'react';
import Web3 from 'web3';
import { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [timerHours, setTimerHours] = useState(10);
  const [timerMinutes, setTimerMinutes] = useState(10);
  const [timerSeconds, setTimerSeconds] = useState(10);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("February 3, 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (60 * 1000)) / (1000)
      );

      if (distance < 0) {
        clearInterval(interval.current);
      }else{
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    });
  };

  useEffect(() => {
    startTimer();
  });

  return(
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div classNAme="clock">
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
}

export default TimeDisplay;
