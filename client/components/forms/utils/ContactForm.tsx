import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';

interface ContactInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: value => value.trim().length < 2,
      email: value => !/^\S+@\S+$/.test(value),
      subject: value => value.trim().length === 0,
    },
  });

  function onSubmit(values: ContactInputs) {
    try {
      console.log(JSON.stringify(values, null, 2));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={form.onSubmit(() => onSubmit(form.values))}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
  );
};

export default ContactForm;
