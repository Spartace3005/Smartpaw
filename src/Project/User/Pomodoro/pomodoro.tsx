import React from 'react';
import { useContext, useEffect,useState } from 'react';
import { SettingContext } from './setting/settingContext';
import { ColorContext } from './setting/colorContext';
import Time from './clock';
import Setting from './setting/setting';
import '../Pomodoro/pomodoro.scss';
import {
  BsFillPlayFill,
  BsPauseFill,
  BsStopFill,
  BsFillSkipForwardFill,
} from 'react-icons/bs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SettingsIcon from '@mui/icons-material/Settings';


const Pomodoro: React.FC = () => {
  const colorValue = useContext(ColorContext);
  const settingValue = useContext(SettingContext);
  const [color,setColor] = useState(`${colorValue.backgroundPomo}`);
  const open = settingValue.open;

  const skip = () => {
    if (settingValue.timeLable === 'Break Time') {;
      if (settingValue.loopCount > 1) {
        settingValue.setLoopCount(settingValue.loopCount - 1);
        setColor(colorValue.backgroundPomo)
        settingValue.setSecondLeft(settingValue.pomoTime * 60);
        settingValue.setTimeLable('Pomo Time');
      }
      else if (settingValue.loopCount === 1) {
        setColor(colorValue.backgroundLong)
        settingValue.setSecondLeft(settingValue.longBreak * 60);
        settingValue.setTimeLable('Long Break Time');
      }
      else if(settingValue.loopCount === 0){
        setColor(colorValue.backgroundPomo)
        settingValue.setLoopCount(settingValue.loopCount)
        settingValue.setTimeLable('Pomo Time');
        settingValue.setSecondLeft(settingValue.pomoTime * 60);
        settingValue.setRunning(!settingValue.running);
      }
    } else if (settingValue.timeLable === 'Pomo Time') {
      setColor(colorValue.backgroundBreak)
      settingValue.setSecondLeft(settingValue.breakTime * 60);
      settingValue.setTimeLable('Break Time');
    } else if (settingValue.timeLable === 'Long Break Time') {
      setColor(colorValue.backgroundPomo)
      settingValue.setSecondLeft(settingValue.pomoTime * 60);
      settingValue.setTimeLable('Pomo Time');
      settingValue.setLoopCount(settingValue.loopCount);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (settingValue.running) {
      interval = setInterval(() => {
        if (settingValue.secondLeft === 0) {
          if (settingValue.timeLable === 'Pomo Time') {
            setColor(colorValue.backgroundBreak);
            settingValue.setTimeLable('Break Time');
            settingValue.setSecondLeft(settingValue.breakTime * 60);
          } else if (settingValue.timeLable === 'Break Time') {
            settingValue.setLoopCount(settingValue.loopCount - 1);
            if (settingValue.loopCount === 0) {
              setColor(colorValue.backgroundLong)
              settingValue.setSecondLeft(settingValue.longBreak * 60);
              settingValue.setTimeLable('Long Break');
            } else {
              settingValue.setTimeLable('Pomo Time');
              setColor(colorValue.backgroundPomo);
              settingValue.setSecondLeft(settingValue.secondLeft - 1);
              settingValue.setSecondLeft(settingValue.pomoTime * 60);
            }
          } else if (settingValue.timeLable === 'Long Break') {
            setColor(colorValue.backgroundPomo);
            settingValue.setLoopCount(settingValue.loopCount);
            settingValue.setTimeLable('Pomo Time');
            settingValue.setSecondLeft(settingValue.pomoTime * 60);
            settingValue.setRunning(!settingValue.running)
          }
        } else {
          settingValue.setSecondLeft(settingValue.secondLeft - 1);
        }
      }, 1);
    }
    return () => clearInterval(interval);
  }, [settingValue]);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#284ea7',
      },
      warning: {
        main: '#eeff07'
      },
      error: {
        main: '#dc3545',
      },
    },
  });
  return (
    <div className={` background-pomo  ${color}`}>
      <div className="nav-pomo">
      <Button onClick={settingValue.handleOpen} className="word">
          <SettingsIcon className="settingIcon" />
          <div className="settingTitle">Setting</div>
        </Button>
        <Modal open={open} onClose={settingValue.handleClose}>
          <Box>
            <Setting handleClose={settingValue.handleClose} />
          </Box>
        </Modal>
      </div>
      <div className="header">
        <div>Pomofocus</div>
      </div>
      <div>
        <Time
          secondLeft={settingValue.secondLeft}
          timeLable={settingValue.timeLable}
        />
      </div>
      <div className="control">
        {!settingValue.running ? (
          <Button
            className="btn btn-accept"
            onClick={settingValue.startPauseCount}
          >
            <BsFillPlayFill />
          </Button>
        ) : (
          <Button
            className="btn btn-warning"
            onClick={settingValue.startPauseCount}
          >
            <BsPauseFill />
          </Button>
        )}
        {
          <Button
            className="btn btn-danger"
            onClick={settingValue.stopCount}
          >
            <BsStopFill />
          </Button>
        }
        {
          <Button className="btn btn-accept" onClick={skip}>
            <BsFillSkipForwardFill />
          </Button>
        }
      </div>
    </div>
  );
};
export default Pomodoro;
