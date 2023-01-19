/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';


export type InputProps = {
  /** 인풋 값 */
  value?: string;
  /** 인풋 체인지 이벤트 */
  onChange?: (e?: React.FormEvent<HTMLInputElement>) => void;
  /** 인풋 크기 설정 */
  size?: 'large' | 'middle' | 'small';
  /** 인풋 타입 */
  htmlType?: 'text' | 'password' ;
  /** 인풋 컬러 */
  color?: 'primary' | 'error' | 'warning' | 'success';
  /** 클래스 네임 설정 */
  className?: string;
  placeholder?: string;
  /** 아이디 */
  id?: string;
  /** 네임 */
  name?: string;
}
const Input = ({
    value,
    onChange,
    size = 'middle',
    htmlType = 'text',
    color = 'primary',
    className = '',
    placeholder,
    id,
    name
  }: InputProps) => {

  const style = css`
    outline: none;
    ${tw`text-slate-900 border border-slate-200 rounded px-4 py-1 ease-in-out duration-300 focus:shadow`}
  `

  const sizes = {
    large: css`
      font-size: 16px;
      ${tw`py-2`}
    `,
    middle: css`
      font-size: 14px;
    `,
    small: css`
      font-size: 14px;
      ${tw`px-0`}
    `
  }

  const colors = {
    primary: css`
      ${tw`hover:border-blue-500 focus:border-blue-500`}
    `,
    error: css`
      ${tw`hover:border-red-500 focus:border-red-500`}
    `,
    warning: css`
      ${tw`hover:border-yellow-500 focus:border-yellow-500`}
    `,
    success: css`
      ${tw`hover:border-green-500 focus:border-green-500`}
    `
  }

  return(
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={htmlType}
      css={[style, sizes[size], colors[color]]}
      className={`${className && className}` }
      placeholder={placeholder}
    />
  )
}

export default Input