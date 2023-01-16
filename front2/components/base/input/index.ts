
import type { InputProps } from './Input';
import DefaultInput from './Input';
import TextArea from "./TextArea";


type CompoundedComponent = React.ForwardRefExoticComponent<InputProps> & {
  TextArea: typeof TextArea;
}

const Input = DefaultInput as CompoundedComponent

Input.TextArea = TextArea

export default Input