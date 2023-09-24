import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import axios from 'axios';
import { MailCheck } from 'lucide-react';
import { useRouter } from 'next/router';

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  title: z
    .string()
    .min(2, {
      message: 'Title must be at least 2 characters.',
    })
    .max(30, {
      message: 'Title must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  message: z.string().max(1024).min(10),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState<string>('');
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const messageData = {
        to: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
        from: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
        name: data.name,
        subject: data.title,
        text: `${data.message} from ${data.email}`,
        html: `
          <p>${data.message}</p>
          <p style="margin-top: 2rem;">${data.name}</p>
          <p>${data.email}</p>
        `,
      };
      const response = await axios.post('/api/sendgrid', messageData);
      console.log('response', response);
      setAlertMessage(response.data.message);
      setTimeout(() => {
        router.push('/');
      }, 8000);
    } catch (error: any) {
      console.log('error in onSubmit', error);
      if (error.response) {
        console.log('error.response.data', error.response.data);
      }
    }
  };

  return (
    <>
      {alertMessage ? (
        <Alert className="mt-8">
          <MailCheck />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      ) : null}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Test Example" {...form.register('name')} />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder="test@example.com"
                {...form.register('email')}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Enter a Title" {...form.register('title')} />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message"
                    className="resize-none"
                    {...form.register('message')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send Message</Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
