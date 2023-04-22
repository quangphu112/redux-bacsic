import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Dashboard = function() {
    return (
    <>
        <div>
            <p>Dashboard</p>
        </div>
        <Stack spacing={2} direction="row">
                <Button href='/company' variant="contained">Company</Button>
                <Button href='/division' variant="contained">Division</Button>
                <Button href='/user' variant="contained">User</Button>
        </Stack>
    </>  
    );
}

export default Dashboard;