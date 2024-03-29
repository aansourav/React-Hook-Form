import { useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "a@a.com", password: "@A1a1111" };
    const found = formData.email === user.email && formData.password === user.password;

    if (!found) {
      setError("root.random", {
        message: `User with email ${formData.email} not found`,
        type: "random",
      });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
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
          <div className='my-2 text-red-600'>{errors?.root?.random?.message}</div>
          <Field>
            <button className='p-1 px-3 mx-auto text-white bg-purple-500 border rounded-lg cursor-pointer text-md'>
              Login
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default LoginForm;
