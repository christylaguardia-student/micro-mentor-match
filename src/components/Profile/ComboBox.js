import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

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
        variant="outlined"
        // multiline
        // rows={2}
        label={label}
        placeholder={placeholder}
      />
    )}
  />
);
