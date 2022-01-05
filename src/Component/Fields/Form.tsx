import React from "react";

const Form = (props: { children: React.ReactNode }) => {
    return <form>
        {props.children}
    </form>
}

export default Form;