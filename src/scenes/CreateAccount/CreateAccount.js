import { Link } from 'react-router-dom';
import { Font } from 'components';
import { appConstants } from 'modules';
import { StyledCreateAccount, Center } from './styles';
import { Field, FieldError, FieldReqs, Button, Checkbox, Spacer } from 'xerum';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const dark = appConstants.themes.dark;

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
  conditions: false,
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required.'),
  password: yup.string().required('Password is required.'),

  confirmPassword: yup.string()
    .required('Confirm password is required.')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),

  conditions: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions.'),
});

const CreateAccount = props => {
  const { modalVisible, setModalVisible, ...rest } = props;

  const darkTheme = rest.selectedTheme === dark;
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <StyledCreateAccount>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        enableReinitialization={true}
        onSubmit={handleSubmit}
      >
        {form => (
          <Form>
            <Field
              type='email'
              name='email'
              label='Email'
              disabled={false}
              solidFill={false}
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='email' {...rest} />
            <Spacer />

            <Field
              type='password'
              name='password'
              label='Password'
              autoComplete='current-password'
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='password' {...rest} />
            <Spacer />

            <Field
              type='password'
              name='confirmPassword'
              label='Confirm password'
              autoComplete='current-password'
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='confirmPassword' {...rest} />
            <Spacer />

            <FieldReqs
              value={form.values.password}
              upper={true}
              lower={true}
              number={true}
              min={8}
              special={true}
              {...rest}
            />
            <Spacer />

            <Checkbox
              name='conditions'
              label='I have read, and agree to, the terms and conditions.'
              form={form}
              checkColor={darkTheme && '#fafafa'}
              {...rest}
            />

            <Center>
              <FieldError name='conditions' {...rest} />
            </Center>
            <Spacer size={2} />

            <Button
              type='submit'
              text={<Font weight='bold'>Create account</Font>}
              callback={form.handleSubmit}
              {...rest}
            />

            <Spacer />

            <Center>
              <Link to='/login'>Log in</Link> or&nbsp;
              <Link to='/reset-password'>Reset Password</Link>
            </Center>
          </Form>
        )}
      </Formik>
    </StyledCreateAccount>
  );
};

export { CreateAccount };