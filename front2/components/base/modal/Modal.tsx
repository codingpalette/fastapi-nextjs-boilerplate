/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';
import {useEffect, useState} from "react";
import RenderFooter from "./RenderFooter";
import { XMarkIcon } from '@heroicons/react/24/solid'

export interface ModalProps {
  /** 모달 열기 상태 값 */
  open?: boolean;
  /** 모달 닫기 이벤트 */
  onCancel?: any;
  /** 모달 확인 이벤트 */
  onOk?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 클래스 네임 설정 */
  className?: string;
  /** 모달 크기 */
  width?: number;
  /** footer 랜더링 설정 */
  footer?: React.ReactNode;
  /** 모달 타이틀 */
  title?: string;
  /** 모달 안의 내용 */
  children?: React.ReactNode;
}

const Modal = ({open, onCancel, onOk, className, width = 550, footer, title, children}: ModalProps) => {
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
    .close_btn{
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
    .modal_back{
      ${open ? (
              `
        animation: popBackOpen 0.2s forwards ease-in-out;
      `
      ) : (
              `
         animation: popBackClose 0.2s forwards ease-in-out;
      `
      )} 
    }
   
    .modal_content {
      max-width: calc(100vw - 32px);
      width: ${width}px;
      ${open ? (
              `
        animation: popInFromBottom 0.2s forwards ease-in-out;
      `
      ) : (
              `
         animation: popOutToBottom 0.2s forwards ease-in-out;
      `
      )}
      
    }
    .modal_header{
      font-size: 16px;
    }
    .modal_body{
      font-size: 14px;
    }
   

    @keyframes popInFromBottom {
      0% {
        opacity: 0;
        transform: translateY(400px) scale(0.75);
      }
      75% {
        opacity: 1;
        transform: translateY(-16px) scale(1);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    @keyframes popOutToBottom {
      0% {
        opacity: 1;
        transform: translateY(0px) scale(1);
      }
      100% {
        opacity: 0;
        transform: translateY(400px) scale(0.75);
      }
    }
    
    @keyframes popBackOpen {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.2;
      }
    }
    
    @keyframes popBackClose {
      0% {
        opacity: 0.2;
      }
      100% {
        opacity: 0;
      }
    }
  `

  const handleKeyPress = () => {
    onCancel()
  }

  useEffect(() => {
    const escKeyModalClose = (e: any) => {
      if (e.keyCode === 27 && open) {
        handleKeyPress();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, [open]);


  if (!open && closed) return null;

  return(
    <div
      className={`${className && className} fixed left-0 top-0 w-full h-full` }
      css={[style]}
    >
      <div
        onClick={onCancel}
        className="modal_back absolute z-10 left-0 top-0 w-full h-full bg-black"
      ></div>
      <div className="modal_content relative z-20 mx-auto my-8 bg-white rounded-lg p-4" >
        <button type="button" onClick={onCancel} className="close_btn text-gray-900 opacity-60 hover:opacity-100">
          <XMarkIcon className="w-5 h-5" />
        </button>
        <div className="modal_header font-semibold mb-4">
          <div className="modal_title">
            {title}
          </div>
        </div>
        <div className="modal_body">
          {children}
        </div>
        <RenderFooter onCancel={onCancel} onOk={onOk} footer={footer} />
      </div>
    </div>
  )
}

export default Modal