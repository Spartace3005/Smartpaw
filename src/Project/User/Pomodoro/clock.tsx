import React from 'react';
import { useContext } from 'react';
import { SettingContext } from './setting/settingContext';


type TimeProps = {
  secondLeft: number;
  timeLable: string;
};
const Time = ({ secondLeft, timeLable }: TimeProps) => {
  const value = useContext(SettingContext);
  let minutes: string | number = Math.floor(value.secondLeft / 60);
  let seconds: string | number = value.secondLeft - minutes * 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return (
    <div className='time'>
        <label>
            {value.timeLable}
        </label>
        <div className='clock'>
            <div className='number'>
                <p>{minutes}</p>
                <div className='clock-title'>Minutes</div>
            </div>
            <div className='number'>
                <p> : </p>
            </div>
            <div className='number'>
                <p>{seconds}</p>
                <div className='clock-title'>Seconds</div>
            </div>
        </div>
    </div>
  )
};
export default Time;
