import React, { useState } from 'react'
import Button from '@mui/material/Button';

const Index = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1> Hello Home Page {count} </h1>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </>
  )
}

export default Index;