import React, { ReactNode } from 'react';
import { Control } from 'react-hook-form';
import useTextInput from '../../hooks/useTextInput';
import { FieldRulesType } from '../../types';

type TextInputProps = {
  name?: string
  control?: Control<any> | null
  label: string
  defaultValue?: string
  value?: string,
  onChange?: (value: string) => void,
  setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>,
  children?: ReactNode,
  error?: boolean,
  errorMessage?: string
  disabled?: boolean
  rules?: FieldRulesType
}

const TextInput = ({ name = "defaultNameOfInput", control, defaultValue = "", label, value: externalValue, onChange: externalOnChange, setIsFocused, children, error: CustomError = false, disabled = false, errorMessage = "Toto pole je povinné", rules } : TextInputProps) => {
  const {
    value,
    handleChange,
    handleFocus,
    handleBlur,
    ref,
    error
  } = useTextInput(control, name, defaultValue, externalOnChange, setIsFocused, rules)

  return (
    <div className='MainCustomInput'>
      <span className='titleLabelForInput'>{label}</span>
      <div className='inputWrapper'>
        <input
          className={`customInput ${error?.message || CustomError ? 'error' : ''}`}
          type='text'
          value={externalValue !== undefined ? externalValue : value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          ref={ref}
          disabled={disabled}
        />
        {children}
      </div>
      {CustomError ? <span style={{ color: 'red' }}>{errorMessage}</span> : error?.message ? <span style={{ color: 'red' }}>{error.message}</span> : null}
    </div>
  );
};

export default TextInput;