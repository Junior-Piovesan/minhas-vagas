import styled from 'styled-components';
import { BiSun } from 'react-icons/bi';
import { FiMoon } from 'react-icons/fi';

type ButtonProps = {
  isActive: 'light' | 'dark';
};

type SwichButtonProps = {
  toggleTheme: () => void;
} & ButtonProps;

const SwitchButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isActive === 'dark' ? '#34353b' : '#fffeff')};
  color: ${(props) => props.theme.secondaryColor};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  transition: all 1s ease-in-out;
`;

const DivButton = styled.div<ButtonProps>`
  background-color: ${(props) => (props.isActive === 'light' ? '#e9ecf1' : '#48494f')};
  border-radius: 20px;
  display: flex;
  height: 25px;
  margin: 10px;
  justify-content: ${(props) => (props.isActive === 'light' ? 'flex-end' : 'flex-start')};
  left: 95%;
  position: absolute;
  width: 50px;
  transition: all 1s ease-in-out;
`;

export default function SwichButton({ isActive, toggleTheme }:SwichButtonProps) {
  return (
    <DivButton isActive={ isActive }>
      <SwitchButton isActive={ isActive } onClick={ toggleTheme }>
        {isActive === 'light'
          ? <BiSun style={ { fontSize: '1.5rem' } } />
          : <FiMoon style={ { fontSize: '1.5rem' } } /> }
      </SwitchButton>
    </DivButton>
  );
}
