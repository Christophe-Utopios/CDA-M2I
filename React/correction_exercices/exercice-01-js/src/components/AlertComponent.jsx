const AlertComponent = (props) => {

    const { backColor, text, iconClass } = props

    const alertStyle = {
        backgroundColor: backColor ?? 'red',
        margin: '2vh auto',
        padding: '2vh 1vw',
        width: '80%',
        borderRadius: '10px'
    }

    return (
        <div style={alertStyle}>
            <i className={"bi " + (iconClass ?? 'bi-exclamation-triangle')}></i> {text ?? 'Something went wrong!'}
        </div>
    )
}

export default AlertComponent