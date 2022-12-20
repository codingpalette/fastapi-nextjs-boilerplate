'use client';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MainContainer from "../containers/MainContainer";

const page = () => {
  return(
    <>
      <MainContainer>
        <Button>
          dsfdsfds
        </Button>
        <div>
          Page
        </div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
      </MainContainer>
    </>
  )
}

export default page