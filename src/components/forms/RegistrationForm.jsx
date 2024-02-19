import { useFieldArray, useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { append, fields, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label='Enter your details'>
          <Field label='Full name' error={errors.fname}>
            <input
              className={`p-2 border box-border w-[300px] rounded-sm ${
                errors.fname ? "border-red-300" : "border-gray-200"
              } focus:outline-none`}
              type='text'
              name='fname'
              id='fname'
              placeholder='Enter full name'
              {...register("fname", { required: "Name is required" })}
            />
          </Field>

          <Field label='Age' error={errors.age}>
            <input
              className={`p-2 border box-border w-[300px] rounded-sm ${
                errors.age ? "border-red-300" : "border-gray-200"
              } focus:outline-none`}
              type='number'
              name='age'
              id='age'
              placeholder='Enter age'
              {...register("age", {
                required: "Age is required",
                min: { value: 18, message: "Age must be at least 18" },
                max: { value: 70, message: "Age must be at most 70" },
              })}
            />
          </Field>

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

          <FieldSet label='Add Social Accounts'>
            {fields.map((field, index) => {
              return (
                <div className='flex justify-between items-center w-max' key={field.id}>
                  <Field label='Social Name'>
                    <input
                      className='p-2 border box-border w-full rounded-md'
                      type='text'
                      {...register(`socials[${index}].name`)}
                      id={`socials[${index}].name`}
                      name={`socials[${index}].name`}
                    />
                  </Field>

                  <Field label='Social URL'>
                    <input
                      className='p-2 border box-border w-full rounded-md'
                      type='text'
                      {...register(`socials[${index}].url`)}
                      id={`socials[${index}].url`}
                      name={`socials[${index}].url`}
                    />
                  </Field>
                  <button className='mt-8 mr-2 text-2xl' onClick={() => remove(index)}>
                    &#8722;
                  </button>
                </div>
              );
            })}

            <button
              className='mt-4 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto'
              onClick={() =>
                append({
                  name: "",
                  url: "",
                })
              }
            >
              Add
            </button>
          </FieldSet>
          <div className='my-2 text-red-600'>{errors?.root?.random?.message}</div>
          <Field>
            <button className='p-1 px-3 mx-auto text-white bg-purple-500 border rounded-lg cursor-pointer text-md'>
              Register
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default RegistrationForm;
