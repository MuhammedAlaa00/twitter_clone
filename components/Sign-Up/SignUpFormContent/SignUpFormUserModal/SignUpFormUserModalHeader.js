import React from 'react';
import { PrimaryDarkThemeColor } from '../../../../styles/Signup.module.scss';
import styles from '../../../../styles/Signup.module.scss';
import { CloseIcon } from '../../../Icons/CloseIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useListViewContext } from '../core/useListviewModal';
function SignUpFormUserModalHeader({ onClose }) {
  const { openSecondModalBody } = useListViewContext()
  return (
    <div className={styles.ModalHeaderContainer}>
      <div>
        <Button className="closeBtn" onClick={onClose}>
          <CloseIcon color={PrimaryDarkThemeColor} width={'20px'} />
        </Button>
      </div>
      <div className="ml-2">
        <Typography className="TypoGraphyheader">
          {!openSecondModalBody && `Step 1 of 5`}
          {openSecondModalBody && `Step 2 of 5`}
        </Typography>
      </div>
    </div>
  );
}

export default SignUpFormUserModalHeader;
