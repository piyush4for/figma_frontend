import React from 'react'
import { Button } from '@nextui-org/button'

function ButtonGradiant(Link,text) {
  return (
    <Button className="bg-gradient-to-r from-red-400 via-red-600 to-red-700" as={Link}  href="#" variant="flat">
    {text}
  </Button>
  )
}

export default ButtonGradiant