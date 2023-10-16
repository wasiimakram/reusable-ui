import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import MuiCheckbox from '@mui/material/Checkbox';
import type * as React from 'react';

export type CheckboxProps = MuiCheckboxProps;
const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { sx, ...restProps } = props;
  return <MuiCheckbox {...restProps} />;
};

export default Checkbox;
