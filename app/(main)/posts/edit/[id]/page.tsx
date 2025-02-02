'use client'

import BackButton from '@/components/BackButton'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form,FormControl,FormField,FormItem,FormMessage,FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import posts from '@/data/posts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
    title : z.string().min(1,{
        message:'Title is required'
    }),
    body : z.string().min(1,{
        message:'body is required'
    }),
    author : z.string().min(1,{
        message:'author is required'
    }),
    date : z.string().min(1,{
        message:'date is required'
    })
})

interface EditPostProps {
    params : Promise<{
        id:string
    }>
}
const EditPostPage = ( { params } : EditPostProps ) => {


const { toast } = useToast();

const { id } = React.use(params);
    const post = posts?.find((data)=> data?.id === id);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title:post?.title || '',
            body:post?.body || '',
            author:post?.author || '',
            date:post?.date || '',       
        }
    })

    const handleSubmit = ()=>{
        toast({
            title: "Post Updated Successfully",
            description: `Updated by ${post?.author} on ${post?.date}`,
          })
    }
  return (
    <>
    <BackButton link='/' text='Back to Posts'/>

    <h3 className="text-2xl mb-4">Edit Post</h3>
    <Form {...form}>
         <form onSubmit={form.handleSubmit(handleSubmit)}
         className='space-y-8'
         >

<FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='text-xs uppercase font-bold text-zinc-500 dark:text-white'>Title</FormLabel>
      <FormControl>
        <Input
        className='focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-100 dark:bg-slate-500 border-0 text-black dark:text-white'
        placeholder="Enter Title" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="body"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='text-xs uppercase font-bold text-zinc-500 dark:text-white'>body</FormLabel>
      <FormControl>
        <Textarea
        className='focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-100 dark:bg-slate-500 border-0 text-black dark:text-white'
        placeholder="Enter body" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="author"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='text-xs uppercase font-bold text-zinc-500 dark:text-white'>author</FormLabel>
      <FormControl>
        <Input
        className='focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-100 dark:bg-slate-500 border-0 text-black dark:text-white'
        placeholder="Enter author" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="date"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='text-xs uppercase font-bold text-zinc-500 dark:text-white'>date</FormLabel>
      <FormControl>
        <Input
        className='focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-100 dark:bg-slate-500 border-0 text-black dark:text-white'
        placeholder="Enter date" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<Button className='w-full dark:bg-slate-800 dark:text-white'>Update Post</Button>

         </form>
    </Form>
    
    </>
  )
}

export default EditPostPage