import { useRouter } from 'next/router';

interface IHeroProps {
  homeHero: boolean;
  backgroundImage: string;
  title: string;
  subtitle?: string;
  btnText: string;
  btnLink: string;
  btnText2?: string;
  btnLink2?: string;
}

const Hero = (props: IHeroProps) => {
  const {
    homeHero,
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
    <div>Hero</div>
    // <Flex
    //   w={'full'}
    //   h={'100vh'}
    //   backgroundImage={`url(${backgroundImage})`}
    //   backgroundSize={'cover'}
    //   backgroundPosition={'center'}>
    //   <VStack
    //     w={'full'}
    //     justify={'center'}
    //     px={useBreakpointValue({ base: 4, md: 8 })}
    //     bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
    //     <Stack maxW={'2xl'} align={homeHero ? 'center' : 'flex-start'} spacing={4}>
    //       <Text
    //         color={'white'}
    //         fontWeight={700}
    //         lineHeight={1}
    //         fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
    //         {title}
    //       </Text>
    //       <Text
    //         color={'white'}
    //         fontWeight={500}
    //         lineHeight={1.2}
    //         fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}>
    //         {subtitle}
    //       </Text>
    //       <Stack direction={'row'}>
    //         <a href={btnLink} target="_blank" rel="noreferrer">
    //           <Button
    //             bg={'blue.400'}
    //             rounded={'full'}
    //             color={'white'}
    //             _hover={{ bg: 'blue.500' }}>
    //             {btnText}
    //           </Button>
    //         </a>
    //         {btnText2 && btnLink2 && (
    //           <Button
    //             bg={'whiteAlpha.300'}
    //             rounded={'full'}
    //             color={'white'}
    //             onClick={() => router.push(btnLink2)}
    //             _hover={{ bg: 'whiteAlpha.500' }}>
    //             {btnText2}
    //           </Button>
    //         )}
    //       </Stack>
    //     </Stack>
    //   </VStack>
    // </Flex>
  );
};

export default Hero;
