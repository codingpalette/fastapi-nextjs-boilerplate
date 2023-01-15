/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';
import {useEffect, useState} from "react";

export interface ModalProps {
  /** 모달 열기 상태 값 */
  open?: boolean;
  /** 모달 닫기 이벤트 */
  onCancel?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  /** 클래스 네임 설정 */
  className?: string;
}

const Modal = ({open, onCancel, className}: ModalProps) => {
  // 모달 상태 값
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    document.body.style.overflowY = closed ? 'hidden' : 'initial';
    let timeoutId: any;
    if (open) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 200);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [open])

  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'initial';
    };
  }, []);

  const style = css`
    z-index: 999;
    .modal_content {
      max-width: 550px;
    }
  `


  if (!open && closed) return null;

  return(
    <div
      className={`${className && className} fixed left-0 top-0 w-full h-full` }
      css={[style]}
    >
      <div
        onClick={onCancel}
        className="modal_back absolute z-10 left-0 top-0 w-full h-full bg-black bg-opacity-20"
      ></div>
      <div className="modal_content relative z-20 mx-auto my-8 bg-white rounded p-4">
        sddsfdsf
      </div>
    </div>
  )
}

export default Modal