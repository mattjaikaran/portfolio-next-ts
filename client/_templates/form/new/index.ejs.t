---
to: components/forms/<%= type || 'utils' %>/<%= h.changeCase.pascal(name) || 'new-form' %>.tsx
---
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

type Inputs = {
  example: string,
  exampleRequired: string,
};

const <%= h.changeCase.pascal(name) || 'NewForm' %> = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting } 
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        console.log(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.firstName}>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <Input
          id="firstName"
          placeholder="firstName"
          {...register("firstName", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.firstName && errors.firstName.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default <%= h.changeCase.pascal(name) || 'NewForm' %>