import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Font, H3 } from 'components';
import { appConstants } from 'modules';
import { tokenValid } from 'helpers';
import { TermsOfService, PrivacyPolicy } from 'scenes';
import { Field, FieldError, FieldReqs, Button, Checkbox, Spacer, Modal } from 'xerum';
import { StyledCreateAccount, Center } from './styles';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import _ from 'lodash';

const dark = appConstants.themes.dark;

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
  conditions: false,
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email.').required('Email is required.'),
  password: yup.string().required('Password is required.'),

  confirmPassword: yup.string()
    .required('Confirm password is required.')
    .oneOf([ yup.ref('password'), null ], 'Passwords must match'),

  conditions: yup
    .boolean()
    .oneOf([ true ], 'You must agree to the terms and conditions.'),
});

const CreateAccount = props => {
  const { modalContent, setModalContent, createUser, userInfo, ...rest } = props;
  const [ passwordVisible, setPasswordVisible ] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  const token = userInfo?.token;
  const darkTheme = rest.selectedTheme === dark;

  useEffect(() => {
    if (token) {
      const expired = !tokenValid(token);
      const route = !_.isEmpty(state) ? state.from.pathname + state.from.search : '/';

      if (!expired) navigate(route);
    }
  }, [ token, state, navigate ]);

  const handleSubmit = (values, actions) => {
    const { setSubmitting } = actions;
    const { email, password, confirmPassword } = values;

    const callbacks = {
      onComplete: () => setSubmitting(false),
    };

    const payload = {
      email: email.toLowerCase(),
      password,
      confirmPassword,
    };

    createUser(payload, callbacks);
  };

  const buildForm = () => {
    if (!token) {
      return (
        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          enableReinitialization={true}
          onSubmit={handleSubmit}
        >
          {form => (
            <Form>
              <H3>Create account</H3>
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
              <Spacer />

              <Field
                type={passwordVisible ? 'text' : 'password'}
                name='password'
                label={<Font weight='semibold'>Password</Font>}
                icon={passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
                iconCallback={() => setPasswordVisible(!passwordVisible)}
                autoComplete='current-password'
                form={form}
                textColor={darkTheme && '#fafafa'}
                {...rest}
              />
              <FieldError name='password' {...rest} />
              <Spacer />

              <Field
                type={passwordVisible ? 'text' : 'password'}
                name='confirmPassword'
                label={<Font weight='semibold'>Confirm password</Font>}
                icon={passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
                iconCallback={() => setPasswordVisible(!passwordVisible)}
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
                label={
                  <>
                    I agree to the&nbsp;
                    <Link to={null} onClick={() => setModalContent(<TermsOfService {...rest} />)}>
                      terms and conditions
                    </Link> and&nbsp;
                    <Link to={null} onClick={() => setModalContent(<PrivacyPolicy {...rest} />)}>
                      privacy policy
                    </Link>.
                  </>
                }
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
                text={
                  <Font weight='semibold'>
                    {form.isSubmitting ? 'Creating account...' : 'Create account'}
                  </Font>
                }
                disabled={form.isSubmitting}
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
      );
    }
  };

  return (
    <StyledCreateAccount>
      {buildForm()}

      <Modal visible={!_.isEmpty(modalContent)} onClose={() => setModalContent(null)} {...rest}>
        {modalContent}
      </Modal>
    </StyledCreateAccount>
  );
};

export { CreateAccount };