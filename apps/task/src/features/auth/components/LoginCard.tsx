"use client";

import { Button } from "@ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@ui/components/ui/card";
import { Input } from "@ui/components/ui/input";
import { Separator } from "@ui/components/ui/separator";

export const LoginCard = () => {
  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none bg-white'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Title</CardTitle>
      </CardHeader>
      <div className='px-7 py-2'>
        <Separator />
      </div>
      <CardContent className='p-7'>
        <form className='space-y-4'>
          <Input
            required
            type='email'
            onChange={() => {}}
            placeholder='Email'
            disabled={false}
          />
          <Input
            required
            type='password'
            onChange={() => {}}
            placeholder='Password'
            disabled={false}
            min={8}
            max={256}
          />
          <Button size='lg'>로그인</Button>
        </form>
      </CardContent>
    </Card>
  );
};
