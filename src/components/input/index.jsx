import React from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack
} from '@mui/material';

function MyInput({
  label,
  formik,
  name,
  placeholder,
  type = 'text',
  ispassword,
  ...otherProps
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return ispassword ? (
    <>
      <Stack spacing={1}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <OutlinedInput
          {...otherProps}
          fullWidth
          error={Boolean(formik.touched[name] && formik.errors[name])}
          id={name}
          type={showPassword ? 'text' : 'password'}
          value={formik.values[name]}
          name={name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                color="secondary"
              >
                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </IconButton>
            </InputAdornment>
          }
          placeholder={placeholder ? placeholder : `Enter ${name}`}
        />
      </Stack>
      {formik.touched[name] && formik.errors[name] && (
        <FormHelperText error id={`standard-weight-helper-text-${name}`}>
          {formik.errors[name]}
        </FormHelperText>
      )}
    </>
  ) : (
    <>
      <Stack spacing={1}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <OutlinedInput
          {...otherProps}
          fullWidth
          error={Boolean(formik.touched[name] && formik.errors[name])}
          id={name}
          type={type}
          value={formik.values[name]}
          name={name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder={placeholder ? placeholder : `Enter ${name}`}
        />
      </Stack>
      {formik.touched[name] && formik.errors[name] && (
        <FormHelperText error id={`standard-weight-helper-text-${name}`}>
          {formik.errors[name]}
        </FormHelperText>
      )}
    </>
  );
}

export default MyInput;
