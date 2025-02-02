import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const AuthTabs = () => {
  return (
    <Tabs defaultValue="Login" className="w-[400px]">
    <TabsList className='grid grid-cols-2 w-full'>
      <TabsTrigger value="Login">Login</TabsTrigger>
      <TabsTrigger value="Password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="Login">
        <LoginForm/>
    </TabsContent>
    <TabsContent value="Password">
        <RegisterForm/>
    </TabsContent>
  </Tabs>
  
  )
}

export default AuthTabs