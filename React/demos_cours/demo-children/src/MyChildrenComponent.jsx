const MyChildrenComponent = (props) => {
    const {backColor} = props

    const componentStyle = {
        backgroundColor:  backColor ?? 'gray',
        margin: '2vh 2vw',
        padding: '2vh 2vw'
    }

    return (
        <div style={componentStyle}>
            {props.children}
        </div>
    )
}

export default MyChildrenComponent