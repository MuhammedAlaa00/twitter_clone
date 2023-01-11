import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { style } from '../../../../styles/MaterialUIModalStyle/ModalStyle';
import { useListViewContext } from '../core/useListviewModal';
import SignUpFormUserModalHeader from './SignUpFormUserModalHeader';
import SignUpFormUserModalBody from './SignUpFormUserModalBody';
import SignUpFormUserSecondModalBody from './SignUpFormUserSecondModalBody';
import SignUpFormUserModalFooter from './SignUpFormUserModalFooter';
export default function SignupFormModal() {
  const { openSecondModalBody, setopenSecondModalBody, openSignUpModal, setOpenSignUpModal } = useListViewContext();
  const handleClose = () => {
    setOpenSignUpModal(false)
    setopenSecondModalBody(false)
  };
  return (
    <div>
      <Modal
        open={openSignUpModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div id="modalHeader">
            <SignUpFormUserModalHeader onClose={handleClose} />
          </div>
          <div id="modalBody" style={{height : "475px", maxHeight:'475px' , overflowY:"auto" , padding:"20px"}}>
            {openSecondModalBody ? <SignUpFormUserSecondModalBody /> : <SignUpFormUserModalBody />}
          </div>
          <div id="modalFooter">
            <SignUpFormUserModalFooter />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
