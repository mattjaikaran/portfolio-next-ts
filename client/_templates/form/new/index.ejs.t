---
to: components/forms/<%= type || 'utils' %>/<%= h.changeCase.pascal(name) || 'new-form' %>.tsx
---
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string,
  exampleRequired: string,
};

const <%= h.changeCase.pascal(name) || 'NewForm' %> = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data): void => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  )
}

export default <%= h.changeCase.pascal(name) || 'NewForm' %>