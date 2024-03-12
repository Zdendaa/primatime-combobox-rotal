import { Control, useController } from "react-hook-form"
import { useUniversities } from "../services/universities"
import { useEffect, useState } from "react"
import { University } from "../types"

const useComboBox = (name: string, control: Control<any> | null | undefined, onChange: ((value: string) => void) | undefined) => {
    const { field } = control ? useController({ name, control }) : { field: null}
    const [valueOfInput, setValueOfInput] = useState<string>(field?.value || "")
    const { data: universities, isLoading } = useUniversities(field?.value || valueOfInput)
    const [lastSelectedUniversity, setLastSelectedUniversity] = useState<string>("")
    const [isFocused, setIsFocused] = useState<boolean>(false)
    
    useEffect(() => {
      if(isFocused) return
      
      field && field.onChange(lastSelectedUniversity)
      lastSelectedUniversity && setValueOfInput(lastSelectedUniversity)
    }, [isFocused, lastSelectedUniversity])
    
  
    const handleSelectUniversity = (university: University) => {
      setValueOfInputForAll(university.name)
    }

    const handleDeleteText = () => { 
      setValueOfInputForAll("")
    }
  
    const handleChange = (value: string) => {
      setValueOfInput(value)
      onChange && onChange(value)
    }
  
    const setValueOfInputForAll = (value: string) => { 
      setLastSelectedUniversity(value)
      setValueOfInput(value)
      field && field.onChange(value)
      onChange && onChange(value)
     }

    return { valueOfInput, lastSelectedUniversity, universities, isLoading, handleSelectUniversity, handleChange, handleDeleteText, isFocused, setIsFocused }
}

export default useComboBox