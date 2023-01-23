/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';

export interface GroupProps{
  /** 라벨 값 */
  label?: string;
  /** 클래스 네임 설정 */
  className?: string;
  /** 네임 설정 */
  name?: string;
  /** 버튼 안의 내용 */
  children?: React.ReactNode;
}

const Group = ({name, label, className = '', children}: GroupProps) => {

  const style = css`
    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  `

  return(
    <>
      <div
        className={`${className && className} flex flex-col gap-2`}
        css={[style]}
      >
        <label htmlFor={name} className="text-sm text-gray-600">{label}</label>
        {children}
      </div>
    </>
  )
}

export default Group