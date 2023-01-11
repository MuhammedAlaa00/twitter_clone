import React from 'react';
import Button from '@mui/material/Button';
import { useRequestProviderContext } from '../core/RequestProvider';
import { useListViewContext } from "../core/useListviewModal"
function SignUpFormUserModalFooter() {
  const { openSecondModalBody, setopenSecondModalBody } = useListViewContext()
  const { handleSubmit, isValid , watch} = useRequestProviderContext();
  const handleFormSubmit = () => {
    setopenSecondModalBody(true)
    if (openSecondModalBody) console.log(watch());
  };
  return (
    <div className="text-center">
      <Button
        disabled={!isValid}
        onClick={handleSubmit(handleFormSubmit)}
        className="font-medium subpixel-antialiased text-lg rounded-full w-10/12 px-4 py-5 bg-blackColor text-whiteColor hover:bg-blackColor/80">
        Next
      </Button>
    </div>
  );
}

export default SignUpFormUserModalFooter;
