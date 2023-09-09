import { useRouter } from 'next/router';
import {
  BackgroundImage,
  Center,
  Text,
  Box,
  Title,
  Button,
  Stack,
} from '@mantine/core';
import { IconCode, IconBrandGithub } from '@tabler/icons';

interface HeroProps {
  homeHero: boolean;
  backgroundImage: string;
  title: string;
  subtitle?: string;
  btnText: string;
  btnLink: string;
  btnText2?: string;
  btnLink2?: string;
  textColor?: string;
}

const Hero = (props: HeroProps) => {
  const {
    backgroundImage,
    title,
    subtitle,
    btnText,
    btnLink,
    btnText2,
    btnLink2,
  } = props;
  const router = useRouter();
  return (
    <Box sx={{ maxWidth: '100%', height: '100vh' }} mx="auto">
      <BackgroundImage
        src={backgroundImage}
        radius="sm"
        sx={{ maxWidth: '100%', height: '100vh' }}
      >
        <Center p="md" sx={{ height: '70vh' }}>
          <Stack>
            <Title color="#fff" weight={300}>
              {title}
            </Title>
            <Text color="#fff" ta="center">
              {subtitle}
            </Text>
            <Button
              leftIcon={<IconCode size={14} />}
              onClick={() => router.push(btnLink)}
            >
              {btnText}
            </Button>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={btnLink2}
              leftIcon={<IconBrandGithub size={14} />}
              styles={theme => ({
                root: {
                  backgroundColor: '#00acee',
                  border: 0,
                  height: 42,
                  paddingLeft: 20,
                  paddingRight: 20,

                  '&:hover': {
                    backgroundColor: theme.fn.darken('#00acee', 0.05),
                  },
                },

                leftIcon: {
                  marginRight: 15,
                },
              })}
            >
              {btnText2}
            </Button>
          </Stack>
        </Center>
      </BackgroundImage>
    </Box>
  );
};

export default Hero;
