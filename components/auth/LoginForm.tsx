'use client'
import React from 'react'
import * as z from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Form,FormControl,FormField,FormItem,FormMessage,FormLabel } from '@/components/ui/form'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    const router = useRouter();

const formSchema = z.object({
    name : z.string().min(1,{
        message:'name is required'
    }),
    password : z.string().min(1,{
        message:'password is required'
    })
})

  const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
          name:'',
          password:''
        }
    })


    const handleSubmit = ()=>{
        router.push('/')
    }

  return (
    <Card>
        <CardContent>
        <h3 className="text-2xl my-4">Login</h3>
    <Form {...form}>
         <form onSubmit={form.handleSubmit(handleSubmit)}
         className='space-y-8'
         >

<FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='text-xs uppercase font-bold text-zinc-500 dark:text-white'>Name</FormLabel>
      <FormControl>
        <Input
        className='focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-100 dark:bg-slate-500 border-0 text-black dark:text-white'
        placeholder="Enter Name" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>



<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='text-xs uppercase font-bold text-zinc-500 dark:text-white'>password</FormLabel>
      <FormControl>
        <Input
        className='focus-visible:ring-0 focus-visible:ring-offset-0 bg-slate-100 dark:bg-slate-500 border-0 text-black dark:text-white'
        placeholder="Enter password" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>



<Button className='w-full dark:bg-slate-800 dark:text-white'>Update Post</Button>

         </form>
    </Form>
        </CardContent>
    </Card>
  )
}

export default LoginForm