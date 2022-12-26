import { Link } from 'react-router-dom';
import { Font, H3 } from 'components';
import { appConstants } from 'modules';
import { StyledResetPassword, Center } from './styles';
import { Field, FieldError, Button, Spacer } from 'xerum';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const dark = appConstants.themes.dark;

const defaultValues = {
  email: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email.').required('Email is required.'),
});

const ResetPassword = props => {
  const { sendResetEmail, addNotification, ...rest } = props;
  const darkTheme = rest.selectedTheme === dark;

  const handleSubmit = (values, { setSubmitting }) => {
    const { email } = values;
    const payload = { email };
    const successMessage = { message: 'Reset request sent.', type: 'success' };
    const errorMessage = { message: 'Failed to send reset request.', type: 'error' };
    const callbacks = {
      onSuccess: () => addNotification(successMessage),
      onFail: () => addNotification(errorMessage),
      onComplete: () => setSubmitting(false),
    };

    sendResetEmail(payload, callbacks);
  };

  return (
    <StyledResetPassword>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        enableReinitialization={true}
        onSubmit={handleSubmit}
      >
        {form => (
          <Form>
            <H3>Reset password</H3>
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
            <Spacer size={2} />

            <Button
              type='submit'
              text={
                <Font weight='bold'>
                  {form.isSubmitting ? 'Sending reset request...' : 'Send reset request'}
                </Font>
              }
              disabled={form.isSubmitting}
              callback={form.handleSubmit}
              {...rest}
            />

            <Spacer />

            <Center>
              <Link to='/login'>Log in</Link> or&nbsp;
              <Link to='/create-account'>Create account</Link>
            </Center>
          </Form>
        )}
      </Formik>
    </StyledResetPassword>
  );
};

export { ResetPassword };