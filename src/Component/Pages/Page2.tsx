import React, { useState } from "react";
import InputText from "../Fields/InputText";

const Page2 = (props: { nextHandler: () => void, prevHandler: () => void, updateAddress: (address: string) => void, curAddress?: string }) => {
    const [address, setAddress] = useState(props.curAddress);

    const addressHandler = (val: React.ChangeEvent<HTMLInputElement>) => {
        if (val.target.value.length > 0) {
            setAddress(val.target.value);
        } else {

        }
    }

    const processNextHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        if (address && address.length > 0) {
            props.nextHandler();
            compileAddress(address);
        } else {
            alert('Ensure all fields are filled in.');
        }
    }

    const processPrevHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        if (address && address.length > 0) {
            props.prevHandler();
            compileAddress(address);
        }
        props.prevHandler();
    }

    const compileAddress = (address: string) => {
        props.updateAddress(address);
    }

    return <div>
        <h3>Tell me more</h3>
        <div><span>Address</span> : <InputText type="text" required={true} id="addrField" onChange={addressHandler} value={address} /></div>
        <div><span><button onClick={processPrevHandler}>Prev</button></span><span><button onClick={processNextHandler}>Next</button></span></div>
    </div>
}

export default Page2