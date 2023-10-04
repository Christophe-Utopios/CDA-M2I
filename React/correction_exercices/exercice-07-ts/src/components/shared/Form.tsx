import { ReactNode, FormEvent } from 'react'

interface FormProps {
    children: ReactNode,
    className: string
    onSubmit: (event: FormEvent) => void
}

const Form = (props: FormProps) => {
    const submitFormHandler = (event: FormEvent) => {
        event.preventDefault()
        props.onSubmit(event)
    }

    return (
        <form action="#" onSubmit={submitFormHandler} className={props.className}>
            {props.children}
        </form>
    )
}

export default Form