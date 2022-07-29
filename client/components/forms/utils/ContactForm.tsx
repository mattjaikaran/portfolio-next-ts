import { useForm, SubmitHandler } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'

type ContactInputs = {
  firstName: string,
  lastName: string,
  email: string,
  content: string,
};

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactInputs>()

  function onSubmit(values: ContactInputs) {
    try {
      console.log(JSON.stringify(values, null, 2));
    } catch (err) {
      console.log(err);
      console.log(errors);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl isInvalid={errors.firstName}>
      <FormLabel htmlFor="firstName">First Name</FormLabel>
      <Input
        id="firstName"
        placeholder="First Name"
        {...register("firstName", {
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
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
        {...register("lastName", {
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
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
        {...register("email", {
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
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
        {...register("content", {
          required: "This is required",
          minLength: { value: 10, message: "Minimum length should be 10" },
        })}
      />
      <FormErrorMessage>
        {errors.content && errors.content.message}
      </FormErrorMessage>
    </FormControl>

    <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
      Submit
    </Button>
  </form>
  )
}

export default ContactForm