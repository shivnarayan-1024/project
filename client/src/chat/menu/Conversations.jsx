import { useEffect, useState, useContext } from "react";
import { Box, styled ,Divider} from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";
import { getUsers } from "../../service/api";

//components
import Conversation from "./Conversation";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`
const StyledDivider = styled(Divider)`
        margin: 0 0 0 70px;
        background-color: #e9edef;
        opacity:.6
`

const Conversations = ({ text }) => {
    
    const [users, setUsers] = useState([]);

    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async() => {
                let response = await getUsers();
                const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
                setUsers(filteredData);
        }
        fetchData();

    },[text]);
    
    
    return (
        <Component>
            {
                users.map( user => (
                    user.sub !== account.sub &&  //Due to message yourself option we can send message to ourself
                    <>
                        <Conversation user={user}/>
                        <Divider/>
                    </>
                ))
            }
        </Component>
    )

}
export default Conversations;