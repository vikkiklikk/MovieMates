import React, { useState } from "react";

function Login() {
  const [name, setName] = useState('login');

  return (
    <div className="min-h-screen bg-lighBackground flex flex-col justify-center">
      <div className="max-w-md mx-auto">text outside</div>
      <div className="max-w-md mx-auto mt-4 p-8 border  bg-white">box 
      </div>
    </div>
  );
}

export default Login;
