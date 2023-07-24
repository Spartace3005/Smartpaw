import React from 'react';
import { useState, createContext, useMemo } from 'react';

interface ColorContextProps {
  backgroundPomo: string;
  setbackgroundPomo: React.Dispatch<React.SetStateAction<string>>;
  backgroundBreak: string;
  setbackgroundBreak: React.Dispatch<React.SetStateAction<string>>;
  backgroundLong: string;
  setbackgroundLong: React.Dispatch<React.SetStateAction<string>>;
  colorPomo1: () => void;
  colorPomo2: () => void;
  colorPomo3: () => void;
  colorPomo4: () => void;
  colorPomo5: () => void;
  colorPomo6: () => void;
  colorPomo7: () => void;
  colorPomo8: () => void;
  colorBreak1: () => void;
  colorBreak2: () => void;
  colorBreak3: () => void;
  colorBreak4: () => void;
  colorBreak5: () => void;
  colorBreak6: () => void;
  colorBreak7: () => void;
  colorBreak8: () => void;
  colorLong1: () => void;
  colorLong2: () => void;
  colorLong3: () => void;
  colorLong4: () => void;
  colorLong5: () => void;
  colorLong6: () => void;
  colorLong7: () => void;
  colorLong8: () => void;
}

const ColorContext = createContext<ColorContextProps>({
  backgroundPomo: 'bgcolor-1',
  setbackgroundPomo: () => {},
  backgroundBreak: 'bgcolor-2',
  setbackgroundBreak: () => {},
  backgroundLong: 'bgcolor-6',
  setbackgroundLong: () => {},
  colorPomo1: () => {},
  colorPomo2: () => {},
  colorPomo3: () => {},
  colorPomo4: () => {},
  colorPomo5: () => {},
  colorPomo6: () => {},
  colorPomo7: () => {},
  colorPomo8: () => {},
  colorBreak1: () => {},
  colorBreak2: () => {},
  colorBreak3: () => {},
  colorBreak4: () => {},
  colorBreak5: () => {},
  colorBreak6: () => {},
  colorBreak7: () => {},
  colorBreak8: () => {},
  colorLong1: () => {},
  colorLong2: () => {},
  colorLong3: () => {},
  colorLong4: () => {},
  colorLong5: () => {},
  colorLong6: () => {},
  colorLong7: () => {},
  colorLong8: () => {},
});

const ColorProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [backgroundPomo, setbackgroundPomo] = useState<string>('bgcolor-1');
  const [backgroundBreak, setbackgroundBreak] = useState<string>('bgcolor-2');
  const [backgroundLong, setbackgroundLong] = useState<string>('bgcolor-6');
  const colorPomo1 = () => {
    setbackgroundPomo('bgcolor-1');
  };
  const colorPomo2 = () => {
    setbackgroundPomo('bgcolor-2');
  };
  const colorPomo3 = () => {
    setbackgroundPomo('bgcolor-3');
  };
  const colorPomo4 = () => {
    setbackgroundPomo('bgcolor-4');
  };
  const colorPomo5 = () => {
    setbackgroundPomo('bgcolor-5');
  };
  const colorPomo6 = () => {
    setbackgroundPomo('bgcolor-6');
  };
  const colorPomo7 = () => {
    setbackgroundPomo('bgcolor-7');
  };
  const colorPomo8 = () => {
    setbackgroundPomo('bgcolor-8');
  };
  const colorBreak1 = () => {
    setbackgroundBreak('bgcolor-1');
  };
  const colorBreak2 = () => {
    setbackgroundBreak('bgcolor-2');
  };
  const colorBreak3 = () => {
    setbackgroundBreak('bgcolor-3');
  };
  const colorBreak4 = () => {
    setbackgroundBreak('bgcolor-4');
  };
  const colorBreak5 = () => {
    setbackgroundBreak('bgcolor-5');
  };
  const colorBreak6 = () => {
    setbackgroundBreak('bgcolor-6');
  };
  const colorBreak7 = () => {
    setbackgroundBreak('bgcolor-7');
  };
  const colorBreak8 = () => {
    setbackgroundBreak('bgcolor-8');
  };
  const colorLong1 = () => {
    setbackgroundLong('bgcolor-1');
  };
  const colorLong2 = () => {
    setbackgroundLong('bgcolor-2');
  };
  const colorLong3 = () => {
    setbackgroundLong('bgcolor-3');
  };
  const colorLong4 = () => {
    setbackgroundLong('bgcolor-4');
  };
  const colorLong5 = () => {
    setbackgroundLong('bgcolor-5');
  };
  const colorLong6 = () => {
    setbackgroundLong('bgcolor-6');
  };
  const colorLong7 = () => {
    setbackgroundLong('bgcolor-7');
  };
  const colorLong8 = () => {
    setbackgroundLong('bgcolor-8');
  };

  const colorValue: ColorContextProps = {
    backgroundPomo,
    setbackgroundPomo,
    backgroundBreak,
    setbackgroundBreak,
    backgroundLong,
    setbackgroundLong,
    colorPomo1,
    colorPomo2,
    colorPomo3,
    colorPomo4,
    colorPomo5,
    colorPomo6,
    colorPomo7,
    colorPomo8,
    colorBreak1,
    colorBreak2,
    colorBreak3,
    colorBreak4,
    colorBreak5,
    colorBreak6,
    colorBreak7,
    colorBreak8,
    colorLong1,
    colorLong2,
    colorLong3,
    colorLong4,
    colorLong5,
    colorLong6,
    colorLong7,
    colorLong8,
  };
  return (
    <ColorContext.Provider value={colorValue}>{children}</ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };
