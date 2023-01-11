import React, { useContext, createContext, useState } from 'react';
const ListViewContext = createContext();
export const useListViewContext = () => useContext(ListViewContext);
function UseListviewModal({ children }) {
  const [openSignUpModal, setOpenSignUpModal] = useState(false)
  const [openSecondModalBody, setopenSecondModalBody] = useState(false)
  const [checked, setChecked] = useState(false)
  return (
    <ListViewContext.Provider value={{ openSignUpModal, setOpenSignUpModal, setopenSecondModalBody, openSecondModalBody, checked, setChecked }}>
      {children}
    </ListViewContext.Provider>
  );
}
export default UseListviewModal;
