
import type { ModalProps } from './Modal'
import DefaultModal from './Modal'

type CompoundedComponent = React.ForwardRefExoticComponent<ModalProps>

const Modal = DefaultModal as CompoundedComponent

export default Modal