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
  
  export default function Authentication() {
    const { hovered, ref } = useHover();
    return (
     <Container size={420} my={40}>
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
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
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
                  backgroundColor: '#466C61',
                  '&:hover': {
                    backgroundColor: '#4A5A55',
                  }
                }
            }}
            fullWidth mt="xl"
            >
          Sign in
        </Button>
      </Paper>
     </Container>
    );
  }