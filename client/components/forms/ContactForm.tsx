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

const profileFormSchema = z.object({
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

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const ContactForm = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  });

  function onSubmit(data: ProfileFormValues) {
    console.log('data', data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input placeholder="Cornel West" {...form.register('name')} />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              placeholder="cornellwest@gpny.org"
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
        <Button type="submit" disabled>
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
