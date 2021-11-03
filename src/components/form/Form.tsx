import React, { useState, useEffect, createContext, useContext, ChangeEvent } from 'react'
import cn from 'classnames'
import { formClass, labelClass, inputClass, textareaClass, groupClass } from './Form.module.scss'

/* Initialize form context */

type FormState = {
    [key: string]: string|number|readonly string[]
}

type FormContextValue = {
    state: FormState,
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const FormContext = createContext<FormContextValue>({} as FormContextValue)

/**
 * USE THIS HOOK to access form state & event handlers across compound components.
 * @returns a FormContextValue object, which contains the FormState object and a
 * handleChange function
 */
export const useFormContext = (): FormContextValue => {
    const context = useContext(FormContext)
    if (!context) throw new Error(`Form compound components can't be used outside of a Form component.`)
    return context
}

/* Form component */

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    disableNetlify?: boolean
}

const Form = (props: FormProps) => {
    const [ formState, setFormState ] = useState<FormState>({})

    // Syncs form input values with state (is this necessary?)
    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        setFormState({ 
            ...formState, 
            [event.target.name]: event.target.value
        })
    }

    // When the form is initially mounted, it accidentally creates a property called "undefined" in state.
    // This effect removes that "undefined" property right away.
    useEffect(() => {
        if (formState["undefined"]) {
            delete formState["undefined"]
        }
    }, [])

    const enableNetlifyForm = !props.disableNetlify ? {
        "data-netlify": "true",
        "data-netlify-honeypot": "bot-field"
    } : null

    return (
        <FormContext.Provider value={{state: formState, handleChange}}>
            <form
                {...props}
                className={formClass}
               {...enableNetlifyForm}
            >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>Don't fill this out: <input name="bot-field" onChange={handleChange} /></label>
                </p>
                {
                    props.children
                }
            </form>
        </FormContext.Provider>
        
    )
}

/* Group component - container for a label and input pair */

const Group = ({ children }) => {
    return(
        <div className={groupClass}>
            {children}
        </div>
    )
}

/* Label component */

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode
}

const Label = (props: LabelProps) => {
    return(
        <label
            {...props}
            className={cn(props.className, labelClass)}
        >
            {props.children}
        </label>
    )
}

/* Input component */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input = (props: InputProps) => {
    const { state, handleChange } = useFormContext()
    console.log(state)
    
    return(
        <input
            {...props}
            className={cn(props.className, inputClass)}
            value={state[props.name]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleChange(e)
                props.onChange(e)
            }}
        />
    )
}

/* Textarea component */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const Textarea = (props: TextareaProps) => {
    const { handleChange } = useFormContext()
    return(
        <textarea
            {...props}
            className={cn(props.className, textareaClass)}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
        />
    )
}

Form.Group = Group
Form.Label = Label
Form.Input = Input
Form.Textarea = Textarea

export default Form
