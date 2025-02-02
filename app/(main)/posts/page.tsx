import BackButton from '@/components/BackButton'
import PostPagination from '@/components/posts/PostPagination'
import PostsTable from '@/components/posts/PostsTable'
import React from 'react'

const page = () => {
  return (
    <>
    <BackButton text='Go Back' link='/'/>
    <PostsTable/>
    <PostPagination/>
    </>
  )
}

export default page