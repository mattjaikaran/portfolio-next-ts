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
import { IconBrandGithub } from '@tabler/icons';

interface IHeroProps {
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

const Hero = (props: IHeroProps) => {
  const { backgroundImage, title, subtitle, btnText, btnLink, textColor } =
    props;
  return (
    <Box sx={{ maxWidth: '100%', height: '100vh' }} mx="auto">
      <BackgroundImage
        src={backgroundImage}
        radius="sm"
        sx={{ maxWidth: '100%', height: '100vh' }}
      >
        <Center p="md" sx={{ height: '70vh' }}>
          <Stack>
            <Title color="#fff">{title}</Title>
            <Text color="#fff" ta="center">
              {subtitle}
            </Text>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={btnLink}
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
              {btnText}
            </Button>
          </Stack>
        </Center>
      </BackgroundImage>
    </Box>
  );
};

export default Hero;
