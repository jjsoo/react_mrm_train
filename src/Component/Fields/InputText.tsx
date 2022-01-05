import { Fragment } from "react"

type inputType = "text" | "email" | "password";

const InputText = (props: { type: inputType, length?: number | 50, id: string, required?: boolean, readOnly?: boolean, value?: string | number , onChange?: React.ReactEventHandler, className?: string }) => {
    return <Fragment><input type={props.type} id={props.id} key={props.id} required={props.required ? false : true} readOnly={props.readOnly ? true : false} value={props.value} onChange={props.onChange} className={props.className} /></Fragment>
}

export default InputText;