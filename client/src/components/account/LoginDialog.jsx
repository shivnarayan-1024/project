import { useContext } from 'react';
import{Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode,} from 'jwt-decode';
import { addUser } from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';


const Component = styled(Box)`
    display:flex;
`

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`

const QRCode = styled('img')({
    height:254,
    width: 254,
    margin:'50px 10px 0 50px'
})

const Title = styled(Typography)`
    font-size: 24px;
    color:#525252;
    font-weight:300;
    font-family: inherit;
    margin-bottom:25px;
`
const StyledList = styled(List)`
    & > li{
        padding: 0;
        margin-top: 15px;
        font-size:18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`

const dialogStyle = {
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overFlow:'hidden'
}


const LoginDialog = () =>
{
    const {setAccount}= useContext(AccountContext);
    
    const onLoginSuccess = (res) =>{
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
        addUser(decoded);
    }

    const onLoginError = (res) =>{
        console.log('Error Login Failed',res);
    }
    return(
        <Dialog
            open={true}
            PaperProps={{sx: dialogStyle}}
            hideBackdrop={true}

        >
            <Component>
                <Container>
                    <Title>To use What'sApp on your computer:</Title>
                    <List>
                        <ListItem>1.Open What'sApp on your phone</ListItem>
                        <ListItem>2.Tap Menu Settings and select What'sApp Web</ListItem>
                        <ListItem>3.Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRCode src={qrCodeImage} alt="qr code"/>
                    <Box style={{ position:'absolute', top:'50%',transform:'translatex(25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        
                        />
                    </Box>
                </Box>
            </Component>
            
        </Dialog>
    )
}

export default LoginDialog;