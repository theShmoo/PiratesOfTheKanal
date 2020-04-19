import React from 'react'
import { Image } from 'rebass'

const Avatar = ({ image, ...props}) =>
  <Image
    src={image}
    sx={{
      width: 48,
      height: 48,
      borderRadius: 9999,
    }}
  />

export default Avatar;
