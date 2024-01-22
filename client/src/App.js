
import { GoogleOAuthProvider } from "@react-oauth/google";
//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = '978241492138-tsjv14kndm0odfo0cv27qqucafp8jh6r.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
