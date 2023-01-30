import React from 'react';
import Button from '@mui/material/Button';
import { useRequestProviderContext } from '../core/RequestProvider';
import { useListViewContext } from './../core/useListviewModal';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { useFirebase } from '../../../../Firebase';
import { addDoc, Timestamp } from "firebase/firestore"
import { FetchUsers } from "../../../../Redux/user/actions"
import moment from 'moment';
function SignUpFormUserModalFooter() {
  const dispatch = useDispatch()
  const { getUser, users } = useFirebase()
  const router = useRouter();
  const { openSecondModalBody, setopenSecondModalBody } = useListViewContext()
  const { handleSubmit, isValid, watch, reset } = useRequestProviderContext();

  const user = watch()
  const handleFormSubmit = () => {
    setopenSecondModalBody(true)
    if (openSecondModalBody) {
      localStorage.setItem('loggedIn', true)
      const checkUser = user.EmailOrPhone.includes("@")
      const userDate = moment(`${user.Month} ${user.Day}, ${user.Year}`, "MMMM DD, YYYY");
      addDoc(users(), {
        createdAt: Timestamp.now(),
        userName: user.Name,
        birthDate: userDate.format("MMMM DD, YYYY"),
        email: checkUser ? user.EmailOrPhone : "",
        phoneNumber: !checkUser ? user.EmailOrPhone : ""
      }).then(response => {
        const doc = getUser(response.id)
        FetchUsers(dispatch, doc)
        localStorage.setItem('loggedIn', true)
        // remmber the id is bewteen Df(id)U
        localStorage.setItem('auth_token', `Df${response.id}U`)
      })
      reset()
      router.push('/');
    };
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
