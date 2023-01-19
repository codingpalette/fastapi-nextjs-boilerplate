/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';
import Button from "../Button";

export interface RenderFooterProps {
  /** 모달 닫기 이벤트 */
  onCancel?: (e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  /** 모달 확인 이벤트 */
  onOk?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** footer 랜더링 설정 */
  footer?: React.ReactNode;
  /** ok 버튼 텍스트 */
  okText?: string;
}

const RenderFooter = ({ onCancel, onOk, footer, okText }: RenderFooterProps) => {

  if (!footer) {
    return (
      <div className="modal_footer mt-4 flex justify-end gap-2">
        <Button onClick={onCancel}>닫기</Button>
        <Button theme="primary" onClick={onOk}>{okText}</Button>
      </div>
    )
  }

  return(
    <></>
  )
}

export default RenderFooter