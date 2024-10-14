"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomField from "@/components/CustomField";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  type: "sign-in" | "sign-up";
}
interface formTitles {
  title: string;
  subtitle: string;
  buttonText: string;
  altLink: {
    title: string;
    href: string;
  };
}
const CustomForm = ({ type }: Props) => {
  const formSchema = getFormSchema(type);

  let formTitles: formTitles;
  switch (type) {
    case "sign-in":
      formTitles = {
        title: "Войдите",
        subtitle: "Добро пожаловать, введите свои данные",
        buttonText: "Войти",
        altLink: {
          title: "Нет аккаунта? Создать",
          href: "/sign-up",
        },
      };
      break;
    case "sign-up":
      formTitles = {
        title: "Зарегистрируйтесь",
        subtitle: "Введите свои данные для регистрации",
        buttonText: "Зарегестрироватся",
        altLink: {
          title: "Есть аккаунт? Войти",
          href: "/sign-in",
        },
      };
      break;
    default:
      formTitles = {
        title: "default value",
        subtitle: "default value",
        buttonText: "default value",
        altLink: {
          title: "default value",
          href: "default value",
        },
      };
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="flex flex-col">
      <div className="mb-11 flex gap-2 items-center text-3xl font-bold ">
        <Image src="/icons/logo.svg" alt="L" height={32} width={32} />
        <h1>Banking App</h1>
      </div>
      <div className="mb-8">
        <h2 className="mb-3 text-4xl font-semibold">{formTitles.title}</h2>
        <p className="text-gray-600">{formTitles.subtitle}</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {type === "sign-up" && (
            <div>
              <CustomField
                label="Имя"
                name="firstName"
                description="Ваше имя"
                form={form}
                placeholder="Иван"
              />

              <CustomField
                label="Фамилия"
                name="lastName"
                description="Ваша фамилия"
                form={form}
                placeholder="Иванов"
              />
            </div>
          )}
          <CustomField
            label="email"
            name="email"
            description="Ваш email"
            form={form}
            placeholder="example@gmail.com"
          />
          <CustomField
            label="пароль"
            name="password"
            description="Ваш пароль"
            form={form}
            placeholder="example@gmail.com"
          />
          <Button
            type="submit"
            className="w-full h-11 bg-blue-500 hover:bg-blue-800"
          >
            {formTitles.buttonText}
          </Button>
        </form>
      </Form>
      <p className="mt-8 self-center">
        <Link
          href={formTitles.altLink.href}
          className="text-blue-700  font-bold underline"
        >
          {formTitles.altLink.title}
        </Link>
      </p>
    </section>
  );
};

export const getFormSchema = (type: "sign-in" | "sign-up") => {
  return z.object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(2).max(10),
    firstName:
      type == "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    lastName:
      type == "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
  });
};
export default CustomForm;
