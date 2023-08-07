import React from "react";
import {WrappedFieldProps} from "redux-form";

interface CustomFieldProps {
    type?: string;
    label?: string
}

export const textareaField = ({input, meta: {error, warning}}: WrappedFieldProps) => (
    <div>
        <textarea {...input}/>
        {
            (error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>)
        }
    </div>
)

export const inputField = ({input, label, type, meta: {touched, error, warning}}: WrappedFieldProps & CustomFieldProps) => (
    <div>
        <input {...input} placeholder={label} type={type}/>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
)
