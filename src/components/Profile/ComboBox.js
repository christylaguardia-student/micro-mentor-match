/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// export default function ComboBox({ options }) {
//   return (
//     <Autocomplete
//       id="combo-box-demo"
//       fullWidth
//       options={options}
//       // getOptionLabel={(option) => option}
//       style={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
//     />
//   );
// }

export const ComboBox = ({ name, label, placeholder, options, defaultValue, onChange }) => (
  <Autocomplete
    multiple
    id={name}
    name={name}
    options={options}
    defaultValue={defaultValue}
    onChange={(event, newValue) => {
      onChange(name, newValue);
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        variant="standard"
        label={label}
        placeholder={placeholder}
      />
    )}
  />
);
