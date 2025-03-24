"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema } from "./registerValidation";
import { registerAction } from "@/servicces/authServices";
import { toast } from "sonner";
import { PiSpinnerBallFill } from "react-icons/pi";

const Register = () => {
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const {formState: {isSubmitting}} = form;

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    try{
      const res = await registerAction(data)
      if(res.success){
        toast.success(res?.message)
      }else{
        toast.error(res?.message)
      }
    }catch(err: any){
      return Error(err)
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@example.com"
                  {...field}
                  value={field.value || ""}
                />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm password"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              {confirmPassword && password !== confirmPassword ? (
                <FormMessage>
                  Password and Confirm Password does not match
                </FormMessage>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        />
        <Button
          disabled={!confirmPassword || password !== confirmPassword}
          className="mt-5 py-6 w-full bg-[#693AF8] font-semibold text-xl"
        >
          {isSubmitting? <PiSpinnerBallFill className="animate-spin" /> :"Register"}
        </Button>
      </form>
    </Form>
  );
};

export default Register;
