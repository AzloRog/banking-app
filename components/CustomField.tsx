"use client";
import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { FieldPath, UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { getFormSchema } from "./CustomForm";

interface Props {
  form: UseFormReturn<any>;
  name: FieldPath<z.infer<ReturnType<typeof getFormSchema>>>;
  label: string;
  placeholder: string;
  description?: string;
}

const CustomField = ({
  form,
  label,
  name,
  placeholder,
  description,
}: Props) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={name == "password" ? "password" : undefined}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomField;
