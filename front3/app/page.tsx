'use client';
import styled from '@emotion/styled'
import tw from 'twin.macro';

const Page = () => {
  return(
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>sdf</div>
      <Button>sdfds</Button>
    </>
  )
}

const Button = styled.div(() => [
  tw`text-lg px-8 py-2 rounded focus:outline-none`,

])

export default Page