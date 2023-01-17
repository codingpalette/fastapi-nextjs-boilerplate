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
}

const RenderFooter = ({ onCancel, onOk, footer }: RenderFooterProps) => {

  if (!footer) {
    return (
      <div className="modal_footer mt-4 flex justify-end gap-2">
        <Button onClick={onCancel}>닫기</Button>
        <Button theme="primary" onClick={onOk}>열기</Button>
      </div>
    )
  }

  return(
    <></>
  )
}

export default RenderFooter