import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from "../ui/form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const form = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbx7l5nXgpB4FJ4g9BwKDU-GwlqmzKYvXGdb1849SXGrhIt7t3Q2HklZPeb65YwMUOgr/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.status === "success") {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Error submitting form");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl asChild>
            <input type="text" {...form.register("name", { required: "Name is required" })} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl asChild>
            <input type="email" {...form.register("email", { required: "Email is required" })} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Phone</FormLabel>
          <FormControl asChild>
            <input type="text" {...form.register("phone", { required: "Phone is required" })} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Subject</FormLabel>
          <FormControl asChild>
            <input type="text" {...form.register("subject", { required: "Subject is required" })} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl asChild>
            <textarea {...form.register("message", { required: "Message is required" })} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
