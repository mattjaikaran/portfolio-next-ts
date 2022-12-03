import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
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
      name: value =>
        value.trim().length < 2
          ? 'Name must have more than 2 characters'
          : null,
      email: value => (!/^\S+@\S+$/.test(value) ? 'Invalid Email' : null),
      subject: value => (value.trim().length === 0 ? 'Enter a subject' : null),
      message: value => (value.trim().length === 10 ? 'Add a message' : null),
    },
  });

  function onSubmit(values: ContactInputs) {
    try {
      console.log(JSON.stringify(values, null, 2));
      form.setValues(prev => ({ ...prev, ...values }));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={form.onSubmit(() => onSubmit(form.values))}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        withAsterisk
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        withAsterisk
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
