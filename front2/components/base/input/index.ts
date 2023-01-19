
import type { InputProps } from './Input';
import DefaultInput from './Input';
import TextArea from "./TextArea";
import Group , { type GroupProps } from "./Group";


type CompoundedComponent = React.ForwardRefExoticComponent<InputProps> & {
  TextArea: typeof TextArea;
  Group: typeof Group;
}

const Input = DefaultInput as CompoundedComponent

Input.TextArea = TextArea
Input.Group = Group

export type {
  GroupProps
};

export default Input