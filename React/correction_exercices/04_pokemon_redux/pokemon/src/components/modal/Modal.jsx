import classes from './Modal.module.css'

const Modal = (props) => {

  const backgroundClickHandler = (event) => {
    if (event.currentTarget === event.target) {
      props.closeModal()
    }
  }

  return (
    <div className={classes.modal} onClick={backgroundClickHandler}>
      <div className={classes.modalContent}>
        {props.children}
      </div>
    </div>
  )
}

export default Modal