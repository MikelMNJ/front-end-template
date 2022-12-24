import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Font, H3 } from 'components';
import { appConstants } from 'modules';
import { StyledLogin, Center } from './styles';
import { Field, FieldError, Button, Spacer } from 'xerum';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const dark = appConstants.themes.dark;

const defaultValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

const Login = props => {
  const { modalContent, setModalContent, ...rest } = props;
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const darkTheme = rest.selectedTheme === dark;

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <StyledLogin>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        enableReinitialization={true}
        onSubmit={handleSubmit}
      >
        {form => (
          <Form>
            <H3>Log in</H3>
            <Spacer size={2} />

            <Field
              type='email'
              name='email'
              label={<Font weight='bold'>Email</Font>}
              icon='fa-solid fa-envelope'
              disabled={false}
              solidFill={false}
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='email' {...rest} />
            <Spacer />

            <Field
              name='password'
              label={<Font weight='bold'>Password</Font>}
              type={passwordVisible ? 'text' : 'password'}
              icon={passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
              iconCallback={() => setPasswordVisible(!passwordVisible)}
              autoComplete='current-password'
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='password' {...rest} />
            <Spacer size={2} />

            <Button
              type='submit'
              text={<Font weight='bold'>Login</Font>}
              callback={form.handleSubmit}
              {...rest}
            />

            <Spacer />

            <Center>
              <Link to='/create-account'>Create account</Link> or&nbsp;
              <Link to='/reset-password'>Reset Password</Link>
            </Center>
          </Form>
        )}
      </Formik>
    </StyledLogin>
  );
};

export { Login };