import { Fragment, useState } from "react";
import InputText from "./InputText";

const Fields = (props: { children?: React.ReactNode }) => {
    return <span><ul>{props.children}</ul></span>
}

type fieldTypes = 'text' | 'password' | 'email';

const FullField = (props: { data?: string | number, fieldType: fieldTypes, fieldLength?: number, fieldRequired: boolean, fieldID: string, fieldName: string, callBack?: ({ }: any) => void }) => {
    const fieldLength = props.fieldLength || 50;
    const callBack = props.callBack || undefined;
    const [fieldData, setFieldData] = useState(props.data);

    const fieldHandler = (val: React.ChangeEvent<HTMLInputElement>) => {
        if (props.fieldRequired) {
            if (val.target.value.length > 0) {
                setFieldData(val.target.value);
            }
        }
    }

    if (callBack) {
        callBack({ 'data': fieldData });
    }

    return <Fragment>
        <InputText type={props.fieldType} length={fieldLength} required={props.fieldRequired} value={fieldData} onChange={fieldHandler} id={props.fieldID} />
    </Fragment>
}

export {
    Fields,
    FullField,
}