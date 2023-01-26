/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';
import {useEffect, useRef} from "react";

export interface DropdownProps {
  /** 버튼 안의 내용 */
  children?: React.ReactNode;
  /** 드롭다운 오픈 상태 값 */
  open?: boolean;
  /** 드롭다운 닫기 이벤트 */
  onCancel?: any;
  /** 드롭다운 메뉴 아이템 리스트 */
  items?: {
    key: string | number,
    label: string | React.ReactNode
  }[]
  /** 드롭다운 위치 */
  placement?: 'left' | 'right'
  /** 드롭다운 크기 */
  width?: number
}

const Dropdown = ({
  children,
  open,
  onCancel,
  items,
  placement = 'left',
  width
}: DropdownProps) => {

  const style = css`
    top: 40px;
    padding: 4px;
    width: ${width ? `${width}px` : 'auto'};
  `;

  const placements = {
    left: css`
      ${tw`left-0`}
    `,
    right: css`
      ${tw`right-0`}
    `
  }

  /** 드롭다운 이외 공간 클릭시 이벤트 */
  const ref = useRef<any>(null)
  useEffect(() => {
    const onClick = (e: any) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        onCancel()
      }
    }
    if (open) {
      window.addEventListener('click', onClick)
    }
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [open])


  return(
    <div
      ref={ref}
      className="relative"
    >
      <span>{children}</span>
      {open && (
        <div
          css={[style, placements[placement]]}
          className="absolute right-0 bg-white shadow rounded text-sm whitespace-nowrap"
        >
          <ul>
            {items?.map(v => (
              <li key={v.key} className="px-2 py-1 hover:bg-gray-100 rounded">{v.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown