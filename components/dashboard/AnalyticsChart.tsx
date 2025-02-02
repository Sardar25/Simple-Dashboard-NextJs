'use client';
import React from 'react'
import { LineChart, Line, XAxis, YAxis ,CartesianGrid, ResponsiveContainer  } from 'recharts'
import analyticsData from '@/data/analytics'
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '@/components/ui/card'

const AnalyticsChart = () => {
  return (
    <>
    <Card>
        <CardHeader>
            <CardTitle>This Year Analytics</CardTitle>
            <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
            <div style={{ width:'100%', height:300 }}>
              <ResponsiveContainer>
                <LineChart width={1100} height={300} data={analyticsData}>

                    <Line type={'monotone'} dataKey={'uv'} stroke='#8884d8'/>
                    <CartesianGrid stroke='#ccc'/> 
                    <XAxis dataKey={'name'}/>
                    <YAxis />



                </LineChart>
              </ResponsiveContainer>
            </div>
        </CardContent>
    </Card>
    </>
  )
}

export default AnalyticsChart