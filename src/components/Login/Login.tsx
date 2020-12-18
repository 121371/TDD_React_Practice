import React from 'react';
import './Login.css';

type Props = {

}

const Login: React.FunctionComponent<Props> = () => {
  const [username, updateUsername] = React.useState<string | undefined>('');
  const [password, updatePassword] = React.useState<string | undefined>('');

    return (
      <div className="login">
        <input placeholder="input username" type="text" name="username" value={username} onChange={(e) => updateUsername(e.target.value)} />
        <br/><input placeholder="enter password" type="password" name="password" value={password} onChange={(e) => updatePassword(e.target.value)} />
        <br/><button type="submit" name="login-button" disabled={!Boolean(username && password)} onClick={() => {}}>Login</button>
      </div>
    );
  };
  
  export default Login;
  