
import type { InputProps } from './Input';
import InternalInput from './Input';
import TextArea from "./TextArea";


type CompoundedComponent = React.ForwardRefExoticComponent<InputProps> & {
  TextArea: typeof TextArea;
}

const Input = InternalInput as CompoundedComponent

Input.TextArea = TextArea

export default Input