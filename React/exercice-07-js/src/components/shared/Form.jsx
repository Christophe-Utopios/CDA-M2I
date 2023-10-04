const Form = (props) => {
    const submitFormHandler = (event) => {
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