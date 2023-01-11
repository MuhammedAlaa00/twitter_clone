import React, { useContext, createContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const RequestProviderContext = createContext();
export const useRequestProviderContext = () => useContext(RequestProviderContext);
function RequestProvider({ children }) {
  const [isPhoneSelected, setIsPhoneSelected] = useState(true);
  const userSchema = yup
    .object({
      Name: yup.string().required(),
      EmailOrPhone: isPhoneSelected ? yup.string().matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{5}$/,
        'Invalid phone number format'
      ).required("phone is reqiured") : yup.string().email("Invalid E-mail format").required("E-mail is reqiured"),
      Month: yup.string().required('please insert month'),
      Day: yup.string().required('please insert day'),
      Year: yup.string().required('please insert year')
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    resetField,
    control,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      Day: '',
      EmailOrPhone: '',
      Month: '',
      Name: '',
      Year: ''
    },
    mode: 'all',
    resolver: yupResolver(userSchema)
  });
  return (
    <RequestProviderContext.Provider
      value={{
        setIsPhoneSelected,
        isPhoneSelected,
        register,
        handleSubmit,
        watch,
        errors,
        isValid,
        control
      }}>
      {children}
    </RequestProviderContext.Provider>
  );
}
export default RequestProvider;
