const AlertComponent = (props: AlertProps) => {

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

interface AlertProps {
    backColor?: string,
    text?: string,
    iconClass?: string
}


export default AlertComponent