"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Input } from "@ui/components/ui/input";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface RHFInputProps {
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  type?: HTMLInputTypeAttribute;
}

export function RHFInput({
  name,
  label,
  placeholder,
  description,
  type,
}: RHFInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className='flex items-center'>
            <FormLabel>{label}</FormLabel>
          </div>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
