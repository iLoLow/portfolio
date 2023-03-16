import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="Firstname" {...register("firstName")} />
      <input type="submit" />
    </form>
  );
}

export default Form;
