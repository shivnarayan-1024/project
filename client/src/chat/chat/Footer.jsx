
import { Box, InputBase,styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material';

const Container = styled(Box)`
    height: 50px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin:5px;
        color:#919191;
    }
`
const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
    width:100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size:14px;
`
const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`

const Footer = ({sendText,setValue,value}) => {

    return(
        <Container>
            <EmojiEmotionsOutlined/>
            <ClipIcon/>
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}  //message type garne box ma change aaye paxi
                    onKeyPress={(e) => sendText(e)}    //keypress bhayepaxi
                    value = {value}
                />
            </Search>
            <Mic/>
        </Container>
    )
}
export default Footer;