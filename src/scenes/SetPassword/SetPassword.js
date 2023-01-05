/* eslint-disable */
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
  const { updateUser, userInfo, addNotification, ...rest } = props;
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const [ searchParams, setSearchParams ] = useSearchParams();

  const navigate = useNavigate();
  const token = userInfo?.token;
  const resetToken = searchParams.get(tokenParam);
  const expired = resetToken && !tokenValid(resetToken);
  const darkTheme = rest.selectedTheme === dark;

  const handleSubmit = (values, { setSubmitting }) => {
    const { password, confirmPassword } = values;
    const payload = {
      password,
      confirmPassword,
      token: resetToken,
    };

    const handleRedirect = res => {
      if (autoLogin) {
        updateLocalStorage(tokenParam, res.token);
        navigate('/');
        return;
      }

      navigate('/login');
    };

    const callbacks = {
      onSuccess: handleRedirect,
      onFail: () => console.log('failed'),
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
            <H3>Set password</H3>
            <Spacer size={2} />

            <Field
              type={passwordVisible ? 'text' : 'password'}
              name='password'
              label={<Font weight='semibold'>New password</Font>}
              icon={passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
              iconCallback={() => setPasswordVisible(!passwordVisible)}
              solidFill={false}
              form={form}
              textColor={darkTheme && '#fafafa'}
              disabled={!resetToken}
              {...rest}
            />
            <FieldError name='password' {...rest} />
            <Spacer />

            <Field
              type={passwordVisible ? 'text' : 'password'}
              name='confirmNewPassword'
              label={<Font weight='semibold'>Confirm new password</Font>}
              icon={passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
              iconCallback={() => setPasswordVisible(!passwordVisible)}
              autoComplete='current-password'
              form={form}
              textColor={darkTheme && '#fafafa'}
              disabled={!resetToken}
              {...rest}
            />
            <FieldError name='confirmNewPassword' {...rest} />
            <Spacer size={2} />

            <Button
              type='submit'
              text={
                <Font weight='semibold'>
                  {!resetToken && 'Missing reset token'}
                  {resetToken && !form.isSubmitting && 'Set password'}
                  {resetToken && form.isSubmitting && 'Setting new password...'}
                </Font>
              }
              disabled={form.isSubmitting || !resetToken}
              callback={form.handleSubmit}
              {...rest}
            />

              <>
                <Spacer />

                <Center>
                  {!token && (
                    <>
                      <Link to='/login'>Log in</Link>,&nbsp;
                      <Link to='/create-account'>Create account</Link> or&nbsp;
                    </>
                  )}

                  <Link to='/reset-password'>Resend reset request</Link>
                </Center>
              </>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <StyledSetPassword>
      {buildForm()}
    </StyledSetPassword>
  );
};

export { SetPassword };