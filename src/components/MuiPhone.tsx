/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck
import {
    BaseTextFieldProps,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography
  } from "@mui/material";
  import React from "react";
  import {
    CountryIso2,
    defaultCountries,
    FlagEmoji,
    parseCountry,
    usePhoneInput
  } from "react-international-phone";

  
  export interface MUIPhoneProps extends BaseTextFieldProps {
    value: string;
    onChange: (phone: string) => void;
  }
  
  export const MuiPhone: React.FC<MUIPhoneProps> = ({
    value,
    onChange,
    ...restProps
  }) => {
    const {
      phone,
      handlePhoneValueChange,
      inputRef,
      country,
      setCountry
    } = usePhoneInput({
      defaultCountry: "in",
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone);
      }
    });
  
    return (
      <TextField
        variant="outlined"
        fullWidth
        color="primary"
        placeholder="Phone number"
        value={phone}
        onChange={handlePhoneValueChange}
       
        type="tel"
        inputRef={inputRef}

        inputProps={{
          sx: {
            color: 'white', // Text color
            '&::placeholder': {
              color: 'gray', // Placeholder color
              opacity: 1, // Ensures the placeholder is visible
            },
          },
        }}
        InputProps={{
          sx: {
            backgroundColor: 'rgba(17, 24, 39, 0.5)', // Matches bg-gray-900/50
            color: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent', // Default border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.7)', // Hover border color
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#7e57c2', // Focus border color (purple)
            },
          },
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginRight: "2px", marginLeft: "-8px" }}
              
            >
              <Select
                MenuProps={{
                  style: {
                    height: "300px",
                    width: "360px",
                    top: "10px",
                    left: "-34px"
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                  }
                }}
                sx={{
                  width: "max-content",
                  // Remove default outline (display only on focus)
                  fieldset: {
                    display: "none"
                  },
                  '&.Mui-focused:has(div[aria-expanded="false"])': {
                    fieldset: {
                      display: "block"
                    }
                  },
                  // Update default spacing
                  ".MuiSelect-select": {
                    padding: "8px",
                    paddingRight: "24px !important"
                  },
                  svg: {
                    right: 0
                  }
                }}
                value={country}
                onChange={(e) => setCountry(e.target.value as CountryIso2)}
                renderValue={(value) => (
                  <FlagEmoji iso2={value} style={{ display: "flex" }} />
                )}
              >
                {defaultCountries.map((c) => {
                  const country = parseCountry(c);
                  return (
                    <MenuItem key={country.iso2} value={country.iso2}>
                      <FlagEmoji
                        iso2={country.iso2}
                        style={{ marginRight: "8px" }}
                      />
                      <Typography marginRight="8px">{country.name}</Typography>
                      <Typography color="gray">+{country.dialCode}</Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </InputAdornment>
          )
        }}
        {...restProps}
      />
    );
  };
  