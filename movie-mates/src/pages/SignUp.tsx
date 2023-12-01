import { useState } from "react";

function SignUp() {
    const [name, setName] = useState('prufa');

    return (
<div className="min-h-screen flex flex-col justify-center">

<div className="max-w-md w-full mx-auto text-[20px]">Text outside the box</div>

<div clasName="mx-auto w-[320px] h-[50px]"> 
<form action="" className="space-y-6">
    <div>
        <label htmlFor="" className="text-[20px] ">Email</label>
        <input type="text" className="w-full p-2 border bg-greenBox"/>
    </div>
</form>
 </div>

</div>
    );
};

export default SignUp