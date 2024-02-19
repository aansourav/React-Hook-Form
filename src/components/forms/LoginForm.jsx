import { useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label='Enter login details'>
          <Field label='Email' error={errors.email}>
            <input
              className={`p-2 border box-border w-[300px] rounded-sm ${
                errors.email ? "border-red-300" : "border-gray-200"
              } focus:outline-none`}
              type='email'
              name='email'
              id='email'
              placeholder='Enter email'
              {...register("email", { required: "Email is required" })}
            />
          </Field>
          <Field label='Password' error={errors.password}>
            <input
              className={`p-2 border box-border w-[300px] rounded-sm ${
                errors.password ? "border-red-300" : "border-gray-200"
              }  focus:outline-none`}
              type='password'
              name='password'
              id='password'
              placeholder='Enter password'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password nust be atleast 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
            />
          </Field>
          <Field>
            <button className='text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 mx-auto '>
              Login
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default LoginForm;
