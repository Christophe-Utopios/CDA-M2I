// const FirstStatefulComponent = () => {
//     return (
//         <>
//         </>
//     )
// }

import { Component, PureComponent } from "react";

class FirstStatefulComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            monPrenom: "Antoine"
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props === nextProps) {
            return true
        }

        return false
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        console.log("--- COMPONENT DID MOUNT ---");
    }

    componentWillUnmount() {
        console.log("--- COMPONENT WILL UNMOUNT ---");
    }

    changePrenom () {
        this.setState(prevState => ({...prevState, monPrenom: "Titi"}))
    }


    render () {
        return (
            <>
                <h1>FirstStatefulComponent works!</h1>
                <hr />
                <p>Mon prénom est <b>{this.state.monPrenom}</b></p>
                <hr />
                <button onClick={this.changePrenom.bind(this)}>Change firstname</button>
            </>
        )
    }
}

export default FirstStatefulComponent