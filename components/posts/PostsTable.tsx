import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption
} from "@/components/ui/table"

import Link from 'next/link'
import posts from '@/data/posts'
import { Post } from '@/types/posts'

interface PostsTableProps {
  limit?: number;
  title?: string;
}
const PostsTable = ( { limit,title } : PostsTableProps ) => {

  const SortedPosts = posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime() ).slice(0,limit);
  return (
    <div className='mt-10'>
      <h3 className="font-semibold text-2xl mb-4">
        {
          title ?? 'Posts'
        }
      </h3>

      <Table>
        <TableHeader>
          <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className='hidden md:table-cell'>Author</TableHead>
              <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
              <TableHead>View</TableHead>


          </TableRow>
        </TableHeader>
        <TableBody>
          {
            SortedPosts?.map((post)=> {
              return <TableRow key={post.id}>
                <TableCell>{ post.title }</TableCell>
                <TableCell className='hidden md:table-cell'>{ post.author }</TableCell>
                <TableCell className='hidden md:table-cell text-right'>{ post.date }</TableCell>
                <TableCell>
                  <Link href={`/posts/edit/${post.id}`}>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>
                      Edit
                    </button>
                  </Link>
                </TableCell>

              </TableRow>
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default PostsTable