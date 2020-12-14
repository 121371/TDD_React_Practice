import React from 'react';

const Login = () => {
  const [username, updateUsername] = React.useState('');
  const [password, updatePassword] = React.useState('');

    return (
      <div>
        <input type="text" name="username" value={username} onChange={(e) => updateUsername(e.target.value)} />
        <input type="password" name="password" value={password} onChange={(e) => updatePassword(e.target.value)} />
        <button type="submit" name="login-button" disabled={!Boolean(username && password)} onClick={() => {}}>Login</button>
      </div>
    );
  };
  
  export default Login;
  