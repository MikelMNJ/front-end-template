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
  const { sendResetEmail, userInfo, ...rest } = props;
  const darkTheme = rest.selectedTheme === dark;
  const token = userInfo?.token;

  const handleSubmit = (values, actions) => {
    const { setSubmitting } = actions;
    const { email } = values;
    const payload = { email };
    const callbacks = {
      onComplete: () => setSubmitting(false),
    };

    sendResetEmail(payload, callbacks);
  };

  const buildForm = () => {
    return (
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
              label={<Font weight='semibold'>Email</Font>}
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
                <Font weight='semibold'>
                  {form.isSubmitting ? 'Sending reset request...' : 'Send reset request'}
                </Font>
              }
              disabled={form.isSubmitting}
              callback={form.handleSubmit}
              {...rest}
            />

            {!token && (
              <>
                <Spacer />

                <Center>
                  <Link to='/login'>Log in</Link> or&nbsp;
                  <Link to='/create-account'>Create account</Link>
                </Center>
              </>
            )}
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <StyledResetPassword>
      {buildForm()}
    </StyledResetPassword>
  );
};

export { ResetPassword };