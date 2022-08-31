import {createContext, useContext}from 'react'
import Firebase from "./Firebase"
const FirebaseContext = createContext(Firebase)
const useFirebase = () =>  useContext(FirebaseContext)
export { FirebaseContext, useFirebase};