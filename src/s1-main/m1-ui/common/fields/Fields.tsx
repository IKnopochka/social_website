import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from 's1-main/m1-ui/common/fields/Fields.module.css'

interface CustomFieldProps {
    type?: string;
    label?: string
    className?: string
}

export const textareaField = ({input, className, meta: {error, warning}}: WrappedFieldProps & CustomFieldProps) => {

    const finalClassName = s.textArea + (className ? ' ' + className : '')

    return (
        <>
            <textarea {...input} className={finalClassName}/>
            {
                (error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>)
            }
        </>
    )
}

export const inputField = ({
                               input,
                               label,
                               type,
                               meta: {touched, error, warning}
                           }: WrappedFieldProps & CustomFieldProps) => {
    return (
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}
