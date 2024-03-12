import { useForm } from 'react-hook-form'
import { FormData } from '../types'

const useCustomForm = () => {
    const { control, handleSubmit } = useForm<FormData>()
    
    const onSubmit = (data: FormData) => {
      showAlert(data.name, data.universityName)
    }

    const showAlert = (name: string, universityName: string) => {
      alert(`Jméno: ${name}, Univerzita: ${universityName.length > 0 ? universityName : "nevyplněno"}`)
    }

    return {onSubmit, control, handleSubmit}
}

export default useCustomForm