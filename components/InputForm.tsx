'use client'

import { useState } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const BASE_URL = process.env.SPAM_DETECTION_API || "https://spam-detection-backend-flask.onrender.com"

const allowedContentTypes = ["email", "message"] as const;
const contentTypeEnum = z.enum(allowedContentTypes);

const formSchema = z.object({
  prediction_content: z.string().min(5, {
    message: "content must be at least 2 characters.",
  }),
  content_type: contentTypeEnum.default("email")
})
type FormValues = z.infer<typeof formSchema>

export default function InputForm() {

  const [loading, setLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prediction_content: "",
      content_type: "email"
    },
  })

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const options = {
        headers: {
          "Content-Type": "application/json",
        }
      }
      const url = data.content_type == "email" ? `${BASE_URL}/api/predict-email` : `${BASE_URL}/api/predict-message`;
      const api_data = data.content_type == "email" ? { email: data.prediction_content } : { message: data.prediction_content }

      const response = await axios.post(url, api_data, options)
      let toastMessage = data.content_type == "email" ? "Given Email is " : "Given Message is "
      toastMessage += response.data.result;
      if (response.data.result == "Spam") {
        toast.error(toastMessage)
      }
      else {
        toast.success(toastMessage)
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
    finally {
      setLoading(false)

    }
  }

  console.log(BASE_URL);
  return (

    <>
      <div className="max-w-screen-md border-2 border-input p-4 rounded-xl mx-auto w-full h-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="content_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Spam Type</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={"hello"}
                          placeholder="Choose type of content you want to predict"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="message">Message</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prediction_content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Data</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="Enter the content here"
                      className="h-auto"
                      {...field}
                      rows={10}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center gap-3 w-fit">
              <Button disabled={loading}type="submit">Submit</Button>
              <Button disabled={loading}type="reset">Clear</Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="h-32 md:h-0" />
    </>
  );
}
