// import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { Checkbox, TextInput } from '@mantine/core';

interface ContactInputs {
  firstName: string;
  lastName: string;
  email: string;
  content: string;
}

function loadInitialValues(): Promise<ContactInputs> {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          firstName: 'Bob',
          lastName: 'Boblaw',
          email: 'test@email',
          content: 'ur cool',
        }),
      2000
    );
  });
}

const ContactForm = () => {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm<ContactInputs>()

  const form = useForm<ContactInputs>({
    initialValues: { email: '', terms: false },
  });

  useEffect(() => {
    loadInitialValues().then(values => form.setValues(values));
  }, []);

  function onSubmit(values: ContactInputs) {
    try {
      console.log(JSON.stringify(values, null, 2));
    } catch (err) {
      console.log(err);
      console.log(errors);
    }
  }

  return (
    <form>
      <div style={{ maxWidth: 320, margin: 'auto' }}>
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps('email')}
        />
        <Checkbox
          mt="sm"
          label="I accept terms and conditions"
          {...form.getInputProps('terms', { type: 'checkbox' })}
        />
      </div>
      {/* <div style={{ maxWidth: 320, margin: 'auto' }}>
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps('email')}
        />
        <Checkbox
          mt="sm"
          label="I accept terms and conditions"
          {...form.getInputProps('terms', { type: 'checkbox' })}
        />
      </div>
      <FormControl isInvalid={errors.firstName}>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <Input
          id="firstName"
          placeholder="First Name"
          {...register('firstName', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.firstName && errors.firstName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.lastName}>
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <Input
          id="lastName"
          placeholder="Last Name"
          {...register('lastName', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.lastName && errors.lastName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="firstName">Email</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.content}>
        <FormLabel htmlFor="firstName">Message</FormLabel>
        <Textarea
          id="content"
          placeholder="Message"
          {...register('content', {
            required: 'This is required',
            minLength: { value: 10, message: 'Minimum length should be 10' },
          })}
        />
        <FormErrorMessage>
          {errors.content && errors.content.message}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button> */}
    </form>
  );
};

export default ContactForm;
