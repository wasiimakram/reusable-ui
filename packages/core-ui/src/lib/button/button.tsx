import * as React from 'react';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import MuiButton from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}
export type ButtonProps = MuiButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  const { sx, ...restProps } = props;

  return <MuiButton />;
};

export default Button;
