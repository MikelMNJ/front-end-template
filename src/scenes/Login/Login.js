import { Link } from 'react-router-dom';
import { Font } from 'components';
import { appConstants } from 'modules';
import { StyledLogin, Center } from './styles';
import { Field, FieldError, Button, Checkbox, Spacer } from 'xerum';
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
            <Field
              type='email'
              name='email'
              label={<Font weight='bold'>Email</Font>}
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
              label={<Font weight='bold'>Password</Font>}
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