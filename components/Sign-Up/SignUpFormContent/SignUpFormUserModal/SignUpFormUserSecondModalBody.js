import React from 'react'
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { useListViewContext } from '../core/useListviewModal';
import Link from '@mui/material/Link';
function SignUpFormUserSecondModalBody() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { checked, setChecked } = useListViewContext()
    return (
        <React.Fragment>
            <Typography variant="h4" className="mb-4">
                Customize your experience
            </Typography>
            <div className="flex justify-between items-center">
                <div>
                    <Typography variant="h5" gutterBottom>
                        Track where you see Twitter content across the web
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.
                    </Typography>
                </div>
                <div onClick={() => setChecked(!checked)}>
                    <Checkbox {...label} checked={checked} />
                </div>
            </div>
            <Typography variant="body1" gutterBottom>
                By signing up, you agree to our <Link underline="none" href="#">Terms</Link>, <Link underline="none" href="#">Privacy Policy</Link>, and <Link underline="none" href="#">Cookie Use</Link> . Twitter may use your contact information, 
                including your email address and phone number for purposes outlined in our Privacy Policy. <Link underline="none" href="#">Learn more</Link>
            </Typography>
        </React.Fragment>
    )
}

export default SignUpFormUserSecondModalBody