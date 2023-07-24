import React from 'react';
import { useState, createContext, useContext } from 'react';
import { ColorContext } from './colorContext';

interface SettingContextProps {
  breakTime: number;
  pomoTime: number;
  longBreak: number;
  secondLeft: number;
  loopCount: number;
  running: boolean;
  open: boolean;
  timeLable: string;
  bgColor: string;
  setBreakTime: React.Dispatch<React.SetStateAction<number>>;
  setPomoTime: React.Dispatch<React.SetStateAction<number>>;
  setLongBreak: React.Dispatch<React.SetStateAction<number>>;
  setSecondLeft: React.Dispatch<React.SetStateAction<number>>;
  setLoopCount: React.Dispatch<React.SetStateAction<number>>;
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeLable: React.Dispatch<React.SetStateAction<string>>;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  startPauseCount: () => void;
  stopCount: () => void;
  handleOpen: () => void;
  handleClose: () => void;

}
const SettingContext = createContext<SettingContextProps>({
  breakTime: 0,
  pomoTime: 0,
  longBreak: 0,
  secondLeft: 0,
  loopCount: 0,
  running: false,
  open: false,
  timeLable: 'Pomo Time',
  bgColor:'',
  setBreakTime: () => {},
  setPomoTime: () => {},
  setLongBreak: () => {},
  setSecondLeft: () => {},
  setLoopCount: () => {},
  setRunning: () => {},
  setOpen: () => {},
  setTimeLable: () => {},
  startPauseCount: () => {},
  stopCount: () => {},
  handleOpen: () => {},
  handleClose: () => {},
  setBgColor: () => {},
});
const SettingProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const colorValue = useContext(ColorContext);
  const [bgColor,setBgColor] = useState<string>('')
  const [breakTime, setBreakTime] = useState<number>(0);
  const [pomoTime, setPomoTime] = useState<number>(0);
  const [longBreak, setLongBreak] = useState<number>(0);
  const [secondLeft, setSecondLeft] = useState<number>(pomoTime * 60);
  const [loopCount, setLoopCount] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [timeLable, setTimeLable] = useState<string>('Pomo Time');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const startPauseCount = () => {
    setRunning(!running);
  };
  const stopCount = () => {
    setRunning(false);
    setSecondLeft(pomoTime * 60);
    setTimeLable('Pomo Time');
  };

  const settingValue: SettingContextProps = {
    breakTime,
    pomoTime,
    longBreak,
    secondLeft,
    running,
    timeLable,
    loopCount,
    open,
    bgColor,
    setOpen,
    handleClose,
    handleOpen,
    setBreakTime,
    setPomoTime,
    setLongBreak,
    setTimeLable,
    setSecondLeft,
    startPauseCount,
    stopCount,
    setLoopCount,
    setRunning,
    setBgColor,
  };
  return (
    <SettingContext.Provider value={settingValue}>
      {children}
    </SettingContext.Provider>
  );
};
export { SettingProvider, SettingContext };
