import React from 'react' 
import Text from '../components/Text'
import Album from '../components/Album'
import transition from '../transition'
 function Photos() {
  return (
    <>
    <Text/>
    <Album/>
    </>
  )
}

export default transition(Photos)

