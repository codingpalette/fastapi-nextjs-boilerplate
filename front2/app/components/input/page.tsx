/** @jsxImportSource @emotion/react */
"use client";

import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";

const page = () => {
  return(
    <>
      <div className="p-4 flex items-center gap-4">
        <Input />
      </div>
      <div className="p-4 flex items-center gap-4">
        <Input placeholder="color" />
        <Input color="error" />
        <Input color="warning" />
        <Input color="success" />
      </div>
    </>
  )
}

export default page