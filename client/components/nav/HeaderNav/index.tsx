import { useState } from 'react';
import { useRouter } from 'next/router';
import { routes } from '@/lib/routes';
import {
  ActionIcon,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  Paper,
  Title,
  Transition,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons';

const HEADER_HEIGHT = 60;

const useStyles = createStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

const HeaderNav = () => {
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(routes[0].link);
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const globalTheme = useMantineTheme();

  const items = routes.map(route => (
    <a
      key={route.label}
      href={route.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === route.link,
      })}
      onClick={event => {
        event.preventDefault();
        console.log('event', event);
        setActive(route.link);
        router.push(route.link);
        close();
      }}
    >
      {route.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
        <Title order={3} weight={300} onClick={() => router.push('/')}>
          Matt Jaikaran
        </Title>
        <Group spacing={5} className={classes.links}>
          {items}
          <Group position="center" my="xl">
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={{
                backgroundColor:
                  globalTheme.colorScheme === 'dark'
                    ? globalTheme.colors.dark[6]
                    : globalTheme.colors.gray[0],
                color:
                  globalTheme.colorScheme === 'dark'
                    ? globalTheme.colors.yellow[4]
                    : globalTheme.colors.blue[6],
              }}
            >
              {colorScheme === 'dark' ? (
                <IconSun size={18} />
              ) : (
                <IconMoonStars size={18} />
              )}
            </ActionIcon>
          </Group>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Group position="center" my="xl">
                <ActionIcon
                  onClick={() => toggleColorScheme()}
                  size="lg"
                  sx={{
                    backgroundColor:
                      globalTheme.colorScheme === 'dark'
                        ? globalTheme.colors.dark[6]
                        : globalTheme.colors.gray[0],
                    color:
                      globalTheme.colorScheme === 'dark'
                        ? globalTheme.colors.yellow[4]
                        : globalTheme.colors.blue[6],
                  }}
                >
                  {colorScheme === 'dark' ? (
                    <IconSun size={18} />
                  ) : (
                    <IconMoonStars size={18} />
                  )}
                </ActionIcon>
              </Group>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default HeaderNav;
