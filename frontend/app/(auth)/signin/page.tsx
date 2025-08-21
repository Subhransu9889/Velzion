'use client'

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import Image from "next/image";
import {X} from "lucide-react";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {api, ENDPOINT} from "@/lib/api";
import {useDispatch, useSelector} from "react-redux";
import {setLogIn} from "@/redux/userSlice";


const formSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

const Signin = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    // @ts-ignore
    const userData = useSelector((state) => state.user);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
        password: ''
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
      if(!values.email || !values.password) {
          toast.error('Please fill all the fields');
          return;
      }
      setLoading(true);
      try{
          const res = await api.post(ENDPOINT.login, {
              email: values.email,
              password: values.password
          })
          if(res.data.success) {
              toast.success('Login Successful');
              dispatch(setLogIn(res.data.user));
              router.push('/');
          }
      } catch(err) {
          // @ts-ignore
          toast.error(err.response.data.message);
      } finally {
          setLoading(false);
      }
  }

  const crossHandler = () => {
      router.push('/');
  }
  return <div className='h-screen bg-transparent bg-blur z-60 w-full flex items-center justify-center'>
      <Card className='md:h-[450px] sm:h-[350px] md:w-[400px] sm:w-[200px] rounded-lg bg-black text-white shadow-2xl'>
          <CardHeader>
              <CardTitle className='flex flex-col items-center justify-center gap-2'>
                  <div className='self-end w-fit'>
                      <X width={25} height={25} className='text-red-700 cursor-pointer' onClick={crossHandler}/>
                  </div>
                  <div className='flex gap-2'>
                      <Image src='/Velzion_logo.png' alt='logo' width={28} height={28} />
                      <Image src='/Velzion_brand.png' alt='brand' width={98} height={28} />
                  </div>
                  <h2 className='md:text-2xl sm:text-[14px]'>Sign In</h2>
              </CardTitle>
          </CardHeader>
          <CardContent>
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                      <Input placeholder="Enter your email" {...field} />
                                  </FormControl>
                              </FormItem>
                          )}
                      />
                      <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Password</FormLabel>
                                  <FormControl>
                                      <Input placeholder="Enter your password" type='password' {...field} />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                          )}
                      />
                      <Button type="submit" disabled={loading}>
                          {loading ? 'Loading...' : 'Sign In'}
                      </Button>
                  </form>
              </Form>
          </CardContent>
          <CardFooter className='w-full flex items-center justify-center'>
              <div className="flex items-center justify-center gap-2 p-2">
                  <Link href="/fogetPassword">Forgot Password?</Link>
                  <div>
                      <Link href="/signup" className="underline">
                          Create an account?
                      </Link>
                  </div>
              </div>
          </CardFooter>
      </Card>
  </div>;
};

export default Signin;