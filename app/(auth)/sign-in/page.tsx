"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomField from "@/components/CustomField";
import CustomForm from "@/components/CustomForm";

const SignIn = () => {
  return <CustomForm type="sign-in" />;
};

export default SignIn;
