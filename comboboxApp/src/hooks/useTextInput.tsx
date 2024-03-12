import { Control, useController } from "react-hook-form";
import { FieldRulesType } from "../types";

const useTextInput = (control: Control<any> | null | undefined, name: string, defaultValue: string, externalOnChange: ((value: string) => void) | undefined, setIsFocused: React.Dispatch<React.SetStateAction<boolean>> | undefined, rules?: FieldRulesType) => {
  const {
      field: { value, onChange, onBlur, ref },
      fieldState: { error } = { error: null },
    } = control ? useController({
      name,
      control,
      defaultValue,
      rules: rules
    }) : {field: {value: null, onChange: () => {}, onBlur: () => {}, ref: null}}
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange && onChange(newValue);

      if (externalOnChange) {
        externalOnChange(newValue);
      }
    }

    const handleFocus = () => {
      setIsFocused && setIsFocused(true)
    }
    
    const handleBlur = () => {
      setTimeout(() => {
        if (setIsFocused) {
          onBlur()
          setIsFocused(false)
        }
      }, 100)
    }

    return {
      value,
      handleChange,
      handleFocus,
      handleBlur,
      ref,
      error
    }
}

export default useTextInput