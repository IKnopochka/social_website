import React from 'react'

export const required = (value: string) => (value ? undefined : 'Required')

const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength200 = maxLength(200)

export const alphaNumeric = (value: string) =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

export const email = (value: string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const minLength = (min: number) => (value: string) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2)