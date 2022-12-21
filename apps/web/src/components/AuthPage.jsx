import "./AuthPage.css";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useSignIn } from "react-auth-kit";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string()
    .min(8, "Email must be at least 8 characters")
    .max(25, "Enail must be at most 25 characters")
    .required("Email is a required field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must be at most 25 characters")
    .required("Password is a required field"),
});

const Authentication = () => {
  const { hovered, ref } = useHover();
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleLoginSubmit = async (values) => {
    console.log(values);
    try {
      /**
        @todo: send login request to the server
      **/

      signIn({
        token: "the token will be here",
        expiresIn: 60,
        tokenType: "Bearer",
        authState: values.email,
      })

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        handleLoginSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Container size={420} my={40}>
          <form noValidate onSubmit={handleSubmit}>
            <Title
              align="center"
              sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
              Welcome back!
            </Title>
            <Text color="white" size="sm" align="center" mt={5}>
              Do not have an account yet?{' '}
              <Anchor sx={{ color: '#A4EDE0' }} href="#" size="sm" onClick={(event) => event.preventDefault()}>
                Create account
              </Anchor>
            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <TextInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label="Email"
                placeholder="Your email"
                required
              />
              {errors.email && touched.email && errors.email ? (
                <label className='error-label'>
                  {errors.email && touched.email && errors.email}
                </label>
              ) : (
                <></>
              )}
              <PasswordInput
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                label="Password"
                placeholder="Your password"
                required
                mt="md"
              />
              {errors.password && touched.password && errors.password ? (
                <label className='error-label'>
                  {errors.password && touched.password && errors.password}
                </label>
              ) : (
                <></>
              )}
              <Group position="apart" mt="lg">
                <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                <Anchor sx={{ color: '#466C61' }} onClick={(event) => event.preventDefault()} href="#" size="sm">
                  Forgot password?
                </Anchor>
              </Group>
              <Button
                ref={ref}
                styles={{
                  root: {
                    backgroundColor: '#ECB365',
                    '&:hover': {
                      backgroundColor: '#ECB400',
                    }
                  }
                }}
                fullWidth mt="xl"
                type="submit"
              >
                Sign in
              </Button>
            </Paper>
          </form>
        </Container>
      )}
    </Formik>
  );
}

export default Authentication;