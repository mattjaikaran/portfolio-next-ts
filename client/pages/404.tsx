import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@/views/layouts/MainLayout';
import { useRouter } from 'next/router';
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Group,
} from '@mantine/core';

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  inner: {
    position: 'relative',
  },

  content: {
    paddingTop: 220,
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 300,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const ErrorPage: NextPage = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <MainLayout>
      <Head>
        <title>Matt Jaikaran - Error</title>
        <meta name="Error Page" content="meta content for Error Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={classes.root}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Nothing to see here</Title>
            <Text
              color="dimmed"
              size="lg"
              align="center"
              className={classes.description}
            >
              This page does not exist.
            </Text>
            <Group position="center">
              <Button size="md" onClick={() => router.push('/')}>
                Return Home
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ErrorPage;
