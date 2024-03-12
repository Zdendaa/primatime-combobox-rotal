import { Control } from 'react-hook-form';
import TextInput from './TextInput';
import { TiDeleteOutline } from "react-icons/ti";
import UniversitiesView from '../university/UniversitiesView';
import useComboBox from '../../hooks/useComboBox';
import { FieldRulesType } from '../../types';

type ComboBoxProps = {
    control?: Control<any> | null
    name?: string
    label?: string
    disabled?: boolean
    onChange?: (value: string) => void
    error?: boolean,
    rules?: FieldRulesType
}

const ComboBox = ({ control, name = "defaultComboxName", label = "defaultTitle", disabled, error, onChange, rules }: ComboBoxProps) => {
  const { valueOfInput, lastSelectedUniversity, universities, isLoading, handleSelectUniversity, handleChange, handleDeleteText, isFocused, setIsFocused } = useComboBox(name, control, onChange)

  return (
    <div className='comboBox'>
      <div className='inputWrapper'>
        <TextInput
            control={control}
            name={name}
            label={label}
            setIsFocused={setIsFocused}
            onChange={handleChange}
            value={valueOfInput}
            disabled={disabled}
            error={error}
            rules={rules}>
            {lastSelectedUniversity ? <span onClick={handleDeleteText} className='deleteIcon'><TiDeleteOutline /></span> : null}
        </TextInput>
      </div>
      <UniversitiesView universities={universities} isLoading={isLoading} isFocused={isFocused} handleSelectUniversity={handleSelectUniversity}/>
    </div>
  );
};

export default ComboBox;