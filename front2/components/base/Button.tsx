/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';
import { ArrowPathIcon } from '@heroicons/react/24/solid'


export type ButtonProps = {
  /** 버튼 안의 내용 */
  children?: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼 타입 */
  htmlType?: 'button' | 'submit' | 'reset';
  /** 클래스 네임 설정 */
  className?: string;
  /** 버튼 생김새 설정 */
  theme?: 'primary' | 'dashed' | 'text' | 'link' | 'default';
  /** 버튼 크기 설정 */
  size?: 'large' | 'middle' | 'small';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼 컬러 */
  color?: 'error' | 'warning' | 'success';
  /** 로딩 상태 값 */
  loading?: boolean;
  /** 버튼 블록 설정 */
  block?: boolean;
  /** 원 모양 설정 */
  circle?: boolean;
}

const Button = ({
    children,
    onClick,
    htmlType = 'button',
    className = '',
    theme = 'default',
    size = 'middle',
    disabled,
    color,
    loading,
    block,
    circle
  }: ButtonProps) => {

  const style = css`
    ${tw`inline-block px-4 rounded ease-in-out duration-300 shadow text-slate-900 outline-0`};
    ${loading && tw`opacity-60 cursor-default`}
    ${block && tw`w-full`}
    ${circle && tw`rounded-full flex items-center justify-center`}
  `


  const themes = {
    primary: css`
      ${tw`text-white`}
      ${
        color === 'error' ? tw`bg-red-500 hover:bg-red-400 active:bg-red-600` : 
        color === 'warning' ? tw`bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600` : 
        color === 'success' ? tw`bg-green-500 hover:bg-green-400 active:bg-green-600` :
        tw`bg-blue-500 hover:bg-blue-400 active:bg-blue-600`
      }
    `,
    dashed: css`
      ${tw`bg-white border border-dashed border-slate-200 `}
      ${
        color === 'error' ? tw`hover:text-red-500 hover:border-red-500 active:text-red-600 active:border-red-600` :
        color === 'warning' ? tw`hover:text-yellow-500 hover:border-yellow-500 active:text-yellow-600 active:border-yellow-600` :
        color === 'success' ? tw`hover:text-green-500 hover:border-green-500 active:text-green-600 active:border-green-600` :
        tw`hover:text-blue-500 hover:border-blue-500 active:text-blue-600 active:border-blue-600`
      }
    `,
    text: css`
      ${tw`hover:bg-slate-200 border-0 shadow-none active:bg-slate-300`}
    `,
    link: css`
      ${tw`text-blue-500 border-0 shadow-none hover:text-blue-400 active:text-blue-600`}
    `,
    default: css`
      ${tw`bg-white border border-slate-200 hover:text-blue-500 hover:border-blue-500 active:text-blue-600 active:border-blue-600`}
      ${
        color === 'error' ? tw`hover:text-red-500 hover:border-red-500 active:text-red-600 active:border-red-600` :
        color === 'warning' ? tw`hover:text-yellow-500 hover:border-yellow-500 active:text-yellow-600 active:border-yellow-600` :
        color === 'success' ? tw`hover:text-green-500 hover:border-green-500 active:text-green-600 active:border-green-600` :
        tw`hover:text-blue-500 hover:border-blue-500 active:text-blue-600 active:border-blue-600`
      }
    `
  }

  const sizes = {
    large: css`
      height: 40px;
      font-size: 16px;
      ${tw`py-1`}
      ${circle && 'width:40px; padding:0;'}
    `,
    middle: css`
      height: 35px;
      font-size: 14px;
      ${tw`py-1`}
      ${circle && 'width:35px; padding:0;'}
    `,
    small: css`
      height: 24px;
      font-size: 14px;
      ${circle && 'width:24px; padding:0;'}
    `
  }

  return(
    <>
      <button
        onClick={onClick}
        css={[style, themes[theme], sizes[size]]}
        className={`${className && className}` }
        type={htmlType}
        disabled={disabled || loading}
      >
        {loading && (
          <span>
            <ArrowPathIcon className="h-4 w-4 inline-block mr-2 animate-spin"/>
          </span>
        )}
        <span>
          {children}
        </span>
      </button>
    </>
  )
}


export default Button