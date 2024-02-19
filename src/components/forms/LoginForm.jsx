import Field from '../Field'
import FieldSet from '../FieldSet'

const LoginForm = () => {
  return (
    <div>
      <FieldSet label='Enter login details'>
        <Field label='Email'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email'
          />
        </Field>
      </FieldSet>
    </div>
  )
}

export default LoginForm
