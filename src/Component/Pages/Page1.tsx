import React, { useState } from "react";
import InputText from "../Fields/InputText";

const Page1 = (props: { nextHandler: () => void, prevHandler: () => void, updateNameEmail: (name: string, email: string) => void , curName?: string, curEmail?: string}) => {
    const [name, setName] = useState(props.curName);
    const [email, setEmail] = useState(props.curEmail);

    const nameHandler = (val: React.ChangeEvent<HTMLInputElement>) => {
        if (val.target.value.length > 0) {
            setName(val.target.value);
        } else {

        }
    }

    const emailHandler = (val: React.ChangeEvent<HTMLInputElement>) => {
        if (val.target.value.length > 0) {
            setEmail(val.target.value);
        } else {

        }
    }

    const processNextHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log('next clicked');
        if (name && name.length > 0 && email && email.length > 0) {
            props.nextHandler();
            compileNameEmail(name, email);
        } else {
            alert('Ensure all fields are filled in.');
        }
    }

    const processPrevHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log('prev clicked');
        if (name && name.length > 0 && email && email.length > 0) {
            props.nextHandler();
            compileNameEmail(name, email);
        }
        props.prevHandler();
    }

    const compileNameEmail = (name: string, email: string) => {
        props.updateNameEmail(name, email);
    }

    return <div>
        <h3>Get to know you</h3>
        <div><span>Name</span> : <InputText type="text" id="mname" length={50} required={true} onChange={nameHandler} value={name} /></div>
        <div><span>Email</span> : <InputText type="email" id="memail" length={50} required={true} onChange={emailHandler} value={email} /></div>
        <div><span><button onClick={processPrevHandler}>Prev</button></span><span><button onClick={processNextHandler}>Next</button></span></div>
    </div>
}

export default Page1