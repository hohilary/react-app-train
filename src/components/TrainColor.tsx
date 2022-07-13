import styled from 'styled-components';

type IStatusVariant = 'default' | 'outlined';
type IStatusColor = 'blue' | 'gray' | 'green' | 'orange' | 'red' | 'teal';

const mapDefaultColors = {
  blue: '--color--light-blue',
  gray: '--color--silver-gray',
  green: '--color--green',
  orange: '--color--light-orange',
  red: '--color--red',
  teal: '--color--teal-blue',
};

const mapOutlinedColors = {
  blue: '--color--light-blue-opacity-2',
  gray: '--color--chateau-gray',
  green: '--color--green-opacity-2',
  orange: '--color--light-orange-opacity-08',
  red: '--color--red-opacity-2',
  teal: '--color--teal-blue-opacity-2',
};

const mapBgColors = {
  default: mapDefaultColors,
  outlined: mapOutlinedColors,
};

const mapOutlinedBorderColors = {
  ...mapDefaultColors,
  orange: '--color--orange',
  gray: '--color--shuttle-gray',
};

const mapColor = {
  default: {
    blue: '--color--white',
    gray: '--color--dark-gray',
    green: '--color--white',
    orange: '--color--white',
    red: '--color--white',
    teal: '--color--white',
  },
  outlined: mapOutlinedBorderColors,
};

export interface IDiginexStatusProps {
  color?: IStatusColor;
  variant?: IStatusVariant;
}

const DiginexStatus = styled.div<{ variant?: IStatusVariant; color?: IStatusColor }>`
  -webkit-text-fill-color: var(${({ color, variant }) => mapColor[variant || 'default'][color || 'gray']});
  align-items: center;
  background: var(${({ color, variant }) => mapBgColors[variant || 'default'][color || 'gray']});
  border-radius: 24px;
  border: ${({ variant, color }) =>
    variant === 'outlined' && `1px solid var(${mapOutlinedBorderColors[color || 'gray']});`};
  color: var(${({ color, variant }) => mapColor[variant || 'default'][color || 'gray']});
  display: inline-flex;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  min-height: 24px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1.33;
  padding: 3px 8px;
  text-align: center;
  text-transform: capitalize;
`;

DiginexStatus.defaultProps = {
  variant: 'default',
  color: 'gray',
};

export default DiginexStatus;
