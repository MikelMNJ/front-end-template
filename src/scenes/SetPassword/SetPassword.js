import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Font, H3 } from 'components';
import { appConstants } from 'modules';
import { tokenValid, updateLocalStorage } from 'helpers';
import { StyledSetPassword, Center } from './styles';
import { Field, FieldError, Button, Spacer } from 'xerum';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const dark = appConstants.themes.dark;
const tokenParam = appConstants.tokenParam;
const autoLogin = false;

const defaultValues = {
  password: '',
  confirmNewPassword: '',
};

const validationSchema = yup.object().shape({
  password: yup.string().required('New password is required.'),

  confirmNewPassword: yup.string()
    .required('Confirm new password is required.')
    .oneOf([ yup.ref('password'), null ], 'Passwords must match'),
});

const SetPassword = props => {
  const { updateUser, addNotification, ...rest } = props;
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const [ searchParams, setSearchParams ] = useSearchParams();

  const navigate = useNavigate();
  const resetToken = searchParams.get(tokenParam);
  const expired = !tokenValid(resetToken);
  const darkTheme = rest.selectedTheme === dark;

  const handleSubmit = (values, { setSubmitting }) => {
    const { password, confirmPassword } = values;
    const successMessage = { message: 'Password successfully reset.' };
    const errorMessage = { message: 'Failed to set new password.', type: 'error' };
    const payload = {
      password,
      confirmPassword,
      token: resetToken,
    };

    const callbacks = {
      onSuccess: res => {
        addNotification(successMessage);

        if (autoLogin) {
          updateLocalStorage(tokenParam, res.token);
          navigate('/');
          return;
        }

        navigate('/login');
      },
      onFail: () => addNotification(errorMessage),
      onComplete: () => setSubmitting(false),
    };

    const resetTokenParam = () => {
      const resetError = { message: 'Invalid reset token, send a new reset request.', type: 'error' };

      searchParams.delete(tokenParam);
      setSearchParams(searchParams);
      addNotification(resetError);
      navigate('/reset-password');
    };

    expired ? resetTokenParam() : updateUser(payload, callbacks);
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
            <H3>Set password</H3>
            <Spacer size={2} />

            <Field
              type={passwordVisible ? 'text' : 'password'}
              name='password'
              label={<Font weight='bold'>New password</Font>}
              icon={passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
              iconCallback={() => setPasswordVisible(!passwordVisible)}
              disabled={false}
              solidFill={false}
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='password' {...rest} />
            <Spacer />

            <Field
              type={passwordVisible ? 'text' : 'password'}
              name='confirmNewPassword'
              label={<Font weight='bold'>Confirm new password</Font>}
              icon={passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
              iconCallback={() => setPasswordVisible(!passwordVisible)}
              autoComplete='current-password'
              form={form}
              textColor={darkTheme && '#fafafa'}
              {...rest}
            />
            <FieldError name='confirmNewPassword' {...rest} />
            <Spacer size={2} />

            <Button
              type='submit'
              text={
                <Font weight='bold'>
                  {form.isSubmitting ? 'Setting new password...' : 'Set password'}
                </Font>
              }
              disabled={form.isSubmitting}
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