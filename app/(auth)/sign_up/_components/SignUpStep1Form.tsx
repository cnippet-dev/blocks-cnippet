// app/sign-up/_components/SignUpStep1Form.tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signUpSchemaStep1 } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { signUpStep1 as signUpStep1Action } from "@/lib/actions/auth.actions"
import { useState } from "react"
import { toast } from "sonner"

interface SignUpStep1FormProps {
  onSubmit: (data: z.infer<typeof signUpSchemaStep1>) => void
}

export default function SignUpStep1Form({ onSubmit }: SignUpStep1FormProps) {
  const [isPending, setIsPending] = useState(false)
  const form = useForm<z.infer<typeof signUpSchemaStep1>>({
    resolver: zodResolver(signUpSchemaStep1),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      acceptTerms: false,
    },
  })

  async function handleSubmit(values: z.infer<typeof signUpSchemaStep1>) {
    setIsPending(true)
    const result = await signUpStep1Action(values)
    setIsPending(false)

    if (result?.error) {
      Object.keys(result.error).forEach((key) => {
        form.setError(key as keyof z.infer<typeof signUpSchemaStep1>, {
          type: "manual",
          message: result.error![key as keyof z.infer<typeof signUpSchemaStep1>]![0],
        })
      })
      toast.error("Please correct the errors in the form.")
    } else {
      toast.success(result?.message || "Success!")
      onSubmit(values)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
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
                <Input placeholder="john@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I accept the <a href="/terms" className="underline">Terms and Conditions</a>
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Processing..." : "Next Step"}
        </Button>
      </form>
    </Form>
  )
}