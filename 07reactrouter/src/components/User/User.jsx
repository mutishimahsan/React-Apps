import React from 'react'
import { useParams } from 'react-router'

export default function User() {
    const {userid} = useParams()

  return (
    <div className='text-center my-4 bg-gray-700 text-3xl text-white p-4'>
      User: {userid}
    </div>
  )
}
