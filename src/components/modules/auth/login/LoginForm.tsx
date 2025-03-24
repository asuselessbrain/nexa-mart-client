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
import { loginAction } from "@/servicces/authServices";
import { toast } from "sonner";
import { PiSpinnerBallFill } from "react-icons/pi";
import { loginSchema } from "./loginValidation";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {formState: {isSubmitting}} = form;


  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    try{
      const res = await loginAction(data)
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
        <Button
        disabled={isSubmitting}
          className="mt-5 py-6 w-full bg-[#693AF8] font-semibold text-xl"
        >
          {isSubmitting? <PiSpinnerBallFill className="animate-spin" /> :"Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
