import React from 'react'

const NestedElement = () => {
  return (
    React.createElement(
        'div',{},React.createElement(
            'i',{},React.createElement(
                'h2',{},'click me'
            )
        )
    )
  )
}

export default NestedElement