import React from "react";
import {WrappedFieldProps} from "redux-form";

interface CustomFieldProps {
    type?: string;
    label?: string
    className?: string
}

export const textareaField = ({input, className, meta: {error, warning}}: WrappedFieldProps & CustomFieldProps) => (
    <>
        <textarea {...input} className={className}/>
        {
            (error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>)
        }
    </>
)

export const inputField = ({input, label, type, meta: {touched, error, warning}}: WrappedFieldProps & CustomFieldProps) => (
    <div>
        <input {...input} placeholder={label} type={type}/>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
)
