import React from 'react'

import SchemeNode from './SchemeNode'

const mockData = {
  name: 'Split 01',
}
const SchemeMap = () => {
  return (
    <div>
      <h1>Scheme Map</h1>
      <SchemeNode nodeData={mockData} />
    </div>
  )
}

export default SchemeMap
