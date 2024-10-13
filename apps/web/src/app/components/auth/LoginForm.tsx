"use client";
import Link from "next/link";

import { Button } from "@ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/components/ui/card";
import { Label } from "@ui/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpPayload, userSchemas } from "@/app/schema/user";
import { RHFInput } from "@/app/components/RHFInput";
import { Form } from "@ui/components/ui/form";

export function LoginForm() {
  const form = useForm<SignUpPayload>({
    mode: "onChange",
    resolver: zodResolver(userSchemas.signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Card className='max-w-sm mx-auto border p-7'>
      <CardHeader>
        <CardTitle className='text-2xl font-semibold text-center'>
          Login
        </CardTitle>
        <CardDescription className='text-center text-gray-600'>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className='space-y-8'>
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='name'>Name</Label>
                <RHFInput name='name' label='Name' placeholder='Henry' />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <RHFInput
                  name='email'
                  label='Email'
                  placeholder='henry@example.com'
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <RHFInput
                  name='password'
                  label='Password'
                  type='password'
                  placeholder=''
                />
              </div>
              <Button type='submit' className='w-full'>
                Create an account
              </Button>
              <Button variant='outline' className='w-full'>
                Sign up with GitHub
              </Button>
            </div>
            <div className='mt-4 text-sm text-center'>
              Already have an account?
              <Link href='#' className='underline'>
                Sign in
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
