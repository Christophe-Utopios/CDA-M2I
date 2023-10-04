import { ReactNode, FormEvent } from 'react'

interface FormProps {
    children: ReactNode,
    onSubmit: (event: FormEvent) => void
}

const Form = (props: FormProps) => {
    const submitFormHandler = (event: FormEvent) => {
        event.preventDefault()
        props.onSubmit(event)
    }

    return (
        <form action="#" onSubmit={submitFormHandler}>
            {props.children}
        </form>
    )
}

export default Form