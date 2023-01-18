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
      EmailOrPhone: isPhoneSelected ? yup.string()
        .required("phone is reqiured")
        .min(8, 'Invalid phone number')
        .max(15, 'Invalid phone number too long')
        : yup.string()
          .email("Invalid E-mail format")
          .required("E-mail is reqiured"),
      Month: yup.string().required('please insert month'),
      Day: yup.string().required('please insert day'),
      Year: yup.string().required('please insert year')
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    reset,
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
        reset,
        errors,
        isValid,
        control
      }}>
      {children}
    </RequestProviderContext.Provider>
  );
}
export default RequestProvider;
