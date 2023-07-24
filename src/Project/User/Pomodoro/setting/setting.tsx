import React, { useContext } from 'react';
import '../setting/setting.scss';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { SettingContext } from './settingContext';
import ColorModal from './colorModal';
import ColorModalBreak from './colorModalBreak';
import ColorModalLong from './colorModalLong';
import { ColorContext } from './colorContext';

interface SettingProps {
  handleClose: () => void;
}

const theme1 = createTheme({
  palette: {
    warning: {
      main: '#edc57e',
      contrastText: '#fff',
    },
  },
});

const Setting = (props: SettingProps) => {
  const { handleClose } = props;
  const settingValue = useContext(SettingContext);
  const theme = useContext(ColorContext);
  const bgPomo = theme.backgroundPomo;
  const bgBreak = theme.backgroundBreak;
  const bgLong = theme.backgroundLong;
  const handleChangePomoTime = (event: SelectChangeEvent<number>) => {
    const numericValue = parseInt(event.target.value as string, 10);
    settingValue.setPomoTime(numericValue);
    settingValue.setSecondLeft(numericValue * 60);
  };
  const handleChangeBreakTime = (event: SelectChangeEvent<number>) => {
    const numericValue = parseInt(event.target.value as string, 10);
    settingValue.setBreakTime(numericValue);
  };
  const handleChangeLongBreak = (event: SelectChangeEvent<number>) => {
    const numericValue = parseInt(event.target.value as string, 10);
    settingValue.setLongBreak(numericValue);
  };
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme1}>
      <div className="setting">
        <div className="title">
          <div>Setting</div>
          <div onClick={handleClose} className="close">
            <CloseIcon fontSize="large" />
          </div>
        </div>
        <div className="mini-title">
          <div className="icon">
            <ScheduleIcon />
          </div>
          Timer
        </div>
        <div className="setting-time">
          <div>Time(minutes)</div>
          <div className="line-1">
            <FormControl className="section">
              <InputLabel
                id="demo-simple-select-helper-label"
                className="word-color"
              >
                Pomo Time:
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                value={settingValue.pomoTime}
                label="Pomo Time"
                onChange={handleChangePomoTime}
                className="border"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="section">
              <InputLabel
                id="demo-simple-select-helper-label"
                className="word-color"
              >
                Break Time:
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                value={settingValue.breakTime}
                label="Break Time"
                onChange={handleChangeBreakTime}
                className="border"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="section">
              <InputLabel
                id="demo-simple-select-helper-label"
                className="word-color"
              >
                Long Break:
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                value={settingValue.longBreak}
                label="Break Time"
                onChange={handleChangeLongBreak}
                className="border"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={45}>45</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={60}>60</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="Line-2">
            <div className="title-time">Long Break interval: </div>
            <input
              value={settingValue.loopCount}
              type="number"
              min={0}
              onChange={(event) => {
                settingValue.setLoopCount(parseInt(event.target.value));
              }}
            />
          </div>
        </div>
        <div className="mini-title">
          <div className="icon">
            <AutoFixHighIcon />
          </div>
          Theme
        </div>
        <div className="setting-theme">
          <div className="event-theme">
            <div className="title-theme">Color Theme</div>
            <div className={bgPomo}>
              <ColorModal />
            </div>
            <div className={bgBreak}>
              <ColorModalBreak />
            </div>
            <div className={bgLong}>
              <ColorModalLong />
            </div>
          </div>
          <div className="event-darkmode">
            <div className="title-theme">Dark Mode when running</div>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              color="warning"
            />
          </div>
        </div>

        <Button onClick={handleClose} className="save">
          Save
        </Button>
      </div>
    </ThemeProvider>
  );
};
export default Setting;
