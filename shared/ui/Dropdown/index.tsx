import { Button, Popover } from 'antd'
import React from 'react'

const Dropdown = () => {
  return (
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
  )
}

export default Dropdown

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);