/** @jsxImportSource @emotion/react */
"use client";
import Button from "../../../components/base/Button";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'

const page = () => {
  return(
    <>

      <div className="p-4 flex items-center gap-4">
        <Button>Default Button</Button>
        <Button theme="primary">Primary Button</Button>
        <Button theme="dashed">Dashed Button</Button>
        <Button theme="text">Text Button</Button>
        <Button theme="link">Link Button</Button>
      </div>
      <div className="p-4 flex items-center gap-4">
        <Button color="error">Error Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
      </div>
      <div className="p-4 flex items-center gap-4">
        <Button theme="primary" color="error">Error Button</Button>
        <Button theme="primary" color="success">Success Button</Button>
        <Button theme="primary" color="warning">Warning Button</Button>
      </div>
      <div className="p-4 flex items-center gap-4">
        <Button theme="dashed" color="error">Error Button</Button>
        <Button theme="dashed" color="success">Success Button</Button>
        <Button theme="dashed" color="warning">Warning Button</Button>
      </div>
      <div className="p-4 flex items-center gap-4">
        <Button size="large">Large Button</Button>
        <Button size="middle">Middle Button</Button>
        <Button size="small">small Button</Button>
      </div>
      <div className="p-4 flex items-center gap-4">
        <Button loading>Loading</Button>
        <Button theme="primary" loading>Loading</Button>
      </div>
      <div className="p-4 flex items-center gap-4 flex-wrap">
        <Button block>Block Button</Button>
        <Button theme="primary" block>Block Button</Button>
      </div>
      <div className="p-4 flex items-center gap-4 flex-wrap">
        <Button><MagnifyingGlassIcon className="w-4 h-4 inline-block mr-2" /> Icon Button</Button>
        <Button circle><MagnifyingGlassIcon className="w-4 h-4 inline-block" /></Button>
        <Button theme="primary" circle><MagnifyingGlassIcon className="w-4 h-4 inline-block" /></Button>
        <Button theme="primary" circle><ArchiveBoxXMarkIcon className="w-4 h-4 inline-block" /></Button>
      </div>
    </>
  )
}

export default page