import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  lable: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        as={TextField}
        fullWidth
        margin="normal"
        variant="outlined"
        label={label}
        disabled={disabled}
        error={!!hasError}
        helperText={errors[name]?.message}
      />
    </div>
  );
}

export default InputField;
