"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const BlogDetail = () => {
  const id = useParams().id
  return (
    <div>BlogDetail, ini blog dengan id ke {id}</div>
  )
}

export default BlogDetail