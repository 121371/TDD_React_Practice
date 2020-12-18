import React, { useState } from "react";

const Register: React.FC = () => {
    const [fName, setFirstName] = useState<string | undefined>(undefined);
  return (
    <div className="register">
        I am in regsiter
        <input type="text" name="firstName" value={fName} className="first-name" onChange={(e) => setFirstName(e.target.value)}/>
    </div>
  )
};

export default Register;
