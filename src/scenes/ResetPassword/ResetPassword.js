import { Link } from 'react-router-dom';
import { Font } from 'components';
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
  email: yup.string().email().required('Email is required'),
});

const ResetPassword = props => {
  const { modalVisible, setModalVisible, ...rest } = props;
  const darkTheme = rest.selectedTheme === dark;

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
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
            <Spacer size={2} />

            <Button
              type='submit'
              text={<Font weight='bold'>Send reset request</Font>}
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