import React from 'react'

export const required = (value: string) => (value ? undefined : 'Required')

const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength20 = maxLength(20)

export const alphaNumeric = (value: string) =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

export const minLength = (min: number) => (value: string) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2)

// const number = value =>
//     value && isNaN(Number(value)) ? 'Must be a number' : undefined
//
// const minValue = min => value =>
//     value && value < min ? `Must be at least ${min}` : undefined
//
// const minValue13 = minValue(13)
//
// const email = value =>
//     value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//         ? 'Invalid email address'
//         : undefined
//
// const tooYoung = value =>
//     value && value < 13
//         ? 'You do not meet the minimum age requirement!'
//         : undefined
//
// const aol = value =>
//     value && /.+@aol\.com/.test(value)
//         ? 'Really? You still use AOL for your email?'
//         : undefined
//

//
// export const phoneNumber = value =>
//     value && !/^(0|[1-9][0-9]{9})$/i.test(value)
//         ? 'Invalid phone number, must be 10 digits'
//         : undefined
//
//
//
// const FieldLevelValidationForm = props => {
//     const { handleSubmit, pristine, reset, submitting } = props
//     return (
//         <form onSubmit={handleSubmit}>
//             <Field
//                 name="username"
//                 type="text"
//                 component={renderField}
//                 label="Username"
//                 validate={[required, maxLength15, minLength2]}
//                 warn={alphaNumeric}
//             />
//             <Field
//                 name="email"
//                 type="email"
//                 component={renderField}
//                 label="Email"
//                 validate={email}
//                 warn={aol}
//             />
//             <Field
//                 name="age"
//                 type="number"
//                 component={renderField}
//                 label="Age"
//                 validate={[required, number, minValue13]}
//                 warn={tooYoung}
//             />
//             <Field
//                 name="phone"
//                 type="number"
//                 component={renderField}
//                 label="Phone number"
//                 validate={[required, phoneNumber]}
//             />
//             <div>
//                 <button type="submit" disabled={submitting}>
//                     Submit
//                 </button>
//                 <button type="button" disabled={pristine || submitting} onClick={reset}>
//                     Clear Values
//                 </button>
//             </div>
//         </form>
//     )
// }
//
// export default reduxForm({
//     form: 'fieldLevelValidation' // a unique identifier for this form
// })(FieldLevelValidationForm)
