import React, { useState, useEffect } from 'react';
import { useRequestProviderContext } from '../core/RequestProvider';
import Typography from '@mui/material/Typography';
import { Months } from '../../../../Constants/BirthdayConstants';
import { updateDays, getyearsList } from '../../../../helpers/helperfn';
import { Controller } from 'react-hook-form';
function SignUpFormUserModalBody() {
  const { isPhoneSelected, setIsPhoneSelected, register, errors, watch, control } =
    useRequestProviderContext();
  const [togglEmailPhone, setTogglEmailPhone] = useState(false);
  const days = updateDays(watch('Month'), Months);
  const handleSecondInput = () => {
    setTogglEmailPhone(!togglEmailPhone);
    setIsPhoneSelected(!isPhoneSelected);
  };
  console.log(watch());
  const renderListofItems = (items) => {
    return items?.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };
  return (
    <form>
      <Typography variant="h4" className="mb-4">
        Create your Account
      </Typography>
      <div className="mb-4">
        <input
          type="text"
          {...register('Name')}
          placeholder="Name"
          className={
            'form-input secondColor cursor-pointer text-lg px-4 py-5 placeholder:text-secondColor  rounded-md border-inputBorderColor hover:border-inputBorderColor focus:border-sky-600 w-full'
          }
        />
        <p className="text-errorColor">{errors.Name?.message}</p>
      </div>
      <div className="mb-4">
        {isPhoneSelected && (
          <div>
            <input
              type="text"
              {...register('EmailOrPhone')}
              placeholder="Phone"
              className={
                'form-input secondColor cursor-pointer text-lg px-4 py-5 placeholder:text-secondColor  rounded-md border-inputBorderColor hover:border-inputBorderColor focus:border-sky-600 w-full'
              }
            />
          </div>
        )}
        {!isPhoneSelected && (
          <div>
            <input
              type="text"
              {...register('EmailOrPhone')}
              placeholder="Email"
              className={
                'form-input secondColor cursor-pointer text-lg px-4 py-5 placeholder:text-secondColor  rounded-md border-inputBorderColor hover:border-inputBorderColor focus:border-sky-600 w-full'
              }
            />
          </div>
        )}
        <p className="text-errorColor">{errors?.EmailOrPhone?.message}</p>
      </div>
      <div className="text-right ml-auto">
        <Typography
          variant="subtitle1"
          onClick={handleSecondInput}
          className="font-light ml-auto text-primaryColor w-48 cursor-pointer hover:underline">
          Use {togglEmailPhone ? 'phone' : 'email'} instead
        </Typography>
      </div>
      <div className="mb-2">
        <Typography display="block" gutterBottom className="font-bold text-blackColor">
          Date of birth
        </Typography>
        <Typography variant="subtitle2" className="text-secondColor">
          This will not be shown publicly. Confirm your own age, even if this account is for a
          business, a pet, or something else.
        </Typography>
      </div>
      <div className="grid gap-6 grid-cols-2 mb-8">
        <div className="">
          <Controller
            control={control}
            name="Month"
            render={({ field: { onChange, onBlur, value, name } }) => (
              <select
                name={name}
                value={value? value : "Month"}
                onChange={onChange}
                onBlur={onBlur}
                className="form-select secondColor 
                cursor-pointer text-lg px-4 py-4 
                placeholder:text-secondColor  
                rounded-md border-inputBorderColor 
                hover:border-inputBorderColor 
                focus:border-sky-600 w-full">
                <option value={'Month'} disabled>Month</option>
                {renderListofItems(Months)}
              </select>
            )}
          />
          <p className="text-errorColor">{errors.Month?.message}</p>
        </div>
        <div className="flex">
          <div className="flex-1">
            <Controller
              control={control}
              name="Day"
              render={({ field: { onChange, onBlur, value, name } }) => (
                <select
                  name={name}
                  onBlur={onBlur}
                  value={value ? value : 'Day'}
                  onChange={onChange}
                  className="form-select secondColor 
                cursor-pointer text-lg px-4 py-4 
                placeholder:text-secondColor  
                rounded-md border-inputBorderColor 
                hover:border-inputBorderColor 
                focus:border-sky-600 w-full">
                  <option value={'Day'} disabled>
                    Day
                  </option>
                  {renderListofItems(days)}
                </select>
              )}
            />
            <p className="text-errorColor">{errors.Day?.message}</p>
          </div>
          <div className="flex-1 ml-3">
            <Controller
              control={control}
              name="Year"
              render={({ field: { onChange, onBlur, value, name } }) => (
                <select
                  name={name}
                  onBlur={onBlur}
                  value={value ? value : 'Year'}
                  onChange={onChange}
                  className="form-select secondColor 
                cursor-pointer text-lg px-4 py-4 
                placeholder:text-secondColor  
                rounded-md border-inputBorderColor 
                hover:border-inputBorderColor 
                focus:border-sky-600 w-full">
                  <option value={'Year'} disabled>
                    Year
                  </option>
                  {renderListofItems(getyearsList)}
                </select>
              )}
            />
            <p className="text-errorColor">{errors.Year?.message}</p>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SignUpFormUserModalBody;
