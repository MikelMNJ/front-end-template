import { Link } from 'react-router-dom';
import { Font } from 'components';
import { appConstants } from 'modules';
import { StyledSetPassword, Center } from './styles';
import { Field, FieldError, Button, Spacer } from 'xerum';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const dark = appConstants.themes.dark;

const defaultValues = {
  password: '',
  confirmNewPassword: '',
};

const validationSchema = yup.object().shape({
  password: yup.string().required('New password is required.'),

  confirmNewPassword: yup.string()
    .required('Confirm new password is required.')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SetPassword = props => {
  const { modalContent, setModalContent, ...rest } = props;
  const darkTheme = rest.selectedTheme === dark;

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <StyledSetPassword>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        enableReinitialization={true}
        onSubmit={handleSubmit}
      >
        {form => (
          <Form>
            <Field
              type='password'
              name='password'
              label={<Font weight='bold'>New password</Font>}
              disabled={false}
              solidFill={false}
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='password' {...rest} />
            <Spacer />

            <Field
              type='password'
              name='confirmNewPassword'
              label={<Font weight='bold'>Confirm new password</Font>}
              autoComplete='current-password'
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='confirmNewPassword' {...rest} />
            <Spacer size={2} />

            <Button
              type='submit'
              text={<Font weight='bold'>Reset password</Font>}
              callback={form.handleSubmit}
              {...rest}
            />

            <Spacer />

            <Center>
              <Link to='/login'>Log in</Link>,&nbsp;
              <Link to='/create-account'>Create account</Link> or&nbsp;
              <Link to='/reset-password'>Resend reset request</Link>
            </Center>
          </Form>
        )}
      </Formik>
    </StyledSetPassword>
  );
};

export { SetPassword };