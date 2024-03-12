import ComboBox from './ComboBox';
import TextInput from './TextInput';
import useCustomForm from '../../hooks/useCustomForm';

const CustomForm = () => {
  const {onSubmit, control, handleSubmit} = useCustomForm()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='CustomForm'>
      <TextInput name="name" label="Vaše křestní jméno" control={control} rules={{ required: 'Toto pole je povinné'}}/>
      <ComboBox name="universityName" label="Univerzita na kterou chodíte" control={control}/>
      <button className='submitButtonm' type="submit">Odeslat</button>
    </form>
  );
};

export default CustomForm;