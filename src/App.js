import './App.css';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from './auth-config';

const WrapperView = () => {

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance.loginRedirect({
      ...loginRequest,
      prompt: "create",
      client_id: "90a831f1-65f8-4864-b71e-bf61cb13f545",
    }).catch(error => console.error(error));
  }

  return (
    <div className="App">
      <AuthenticatedTemplate>
        {activeAccount ? (
          <p>Authenticated successfully</p>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>
          Sign Up
        </button>
      </UnauthenticatedTemplate>
    </div>
  )

}

function App({ instance }) {
  return (
    <MsalProvider instance={instance}>
      <WrapperView />
    </MsalProvider>
  );
}

export default App;
