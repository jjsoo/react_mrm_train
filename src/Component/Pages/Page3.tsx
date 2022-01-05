import React, { useState } from "react";

interface dtls {
    name: string;
    email: string;
    address: string;
    dob: string;
    phone: string
}

const Page3 = (props: { prevHandler: () => void, curDetails: dtls }) => {
    const [details] = useState(props.curDetails);

    const processPrevHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        props.prevHandler();
    }

    return <div>
        <h3>And here we are...</h3>
        {console.log(details)}

        {/* {Object.keys(details).map((key, index) => {
            return <div key={index}><span>{key}</span> : <span>{(details as any)[key]}</span></div>
        })} */}
        <div><h5>You known as : {details.name}</h5></div>
        <div><h5>Your email address is : {details.email}</h5></div>
        <div><h5>Where you stay : {details.address}</h5></div>
        <div><h5>Your contact number : {details.phone}</h5></div>
        <div><h5>Your birthdate : {details.dob}</h5></div>
        <div><h5>You are this old : {details.dob}</h5></div>
        <div><span><button onClick={processPrevHandler}>Prev</button></span></div>
    </div>
}

export default Page3