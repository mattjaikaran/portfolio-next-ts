import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useRouter } from 'next/router';

interface PortfolioCardProps {
  title: string;
  description: string;
  tags: Array<string>;
  img?: string;
  link: string;
}

const PortfolioCard = (props: PortfolioCardProps) => {
  const router = useRouter();
  const { img, title, description, tags, link } = props;
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {img && (
        <Card.Section>
          <Image src={img} height={300} alt="Norway" />
        </Card.Section>
      )}

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {tags.map(tag => (
          <Badge key={tag} color="pink" variant="light">
            {tag}
          </Badge>
        ))}
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => router.push(link)}
      >
        View Details
      </Button>
    </Card>
    // <Center py={6}>
    //   <Box
    //     maxW={'320px'}
    //     w={'full'}
    //     bg={useColorModeValue('white', 'gray.900')}
    //     boxShadow={'2xl'}
    //     rounded={'lg'}
    //     p={6}
    //     textAlign={'center'}>
    //     <Avatar
    //       size={'xl'}
    //       src={
    //         'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    //       }
    //       alt={'Avatar Alt'}
    //       mb={4}
    //       pos={'relative'}
    //       _after={{
    //         content: '""',
    //         w: 4,
    //         h: 4,
    //         bg: 'green.300',
    //         border: '2px solid white',
    //         rounded: 'full',
    //         pos: 'absolute',
    //         bottom: 0,
    //         right: 3,
    //       }}
    //     />
    //     <Heading fontSize={'2xl'} fontFamily={'body'}>
    //       {title}
    //     </Heading>
    //     <Text fontWeight={600} color={'gray.500'} mb={4}>
    //       {subtitle}
    //     </Text>
    //     <Text
    //       textAlign={'center'}
    //       color={useColorModeValue('gray.700', 'gray.400')}
    //       px={3}>
    //       {description}
    //     </Text>

    //     <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
    //       <Badge
    //         px={2}
    //         py={1}
    //         bg={useColorModeValue('gray.50', 'gray.800')}
    //         fontWeight={'400'}>
    //         #{tags[0]}
    //       </Badge>
    //       <Badge
    //         px={2}
    //         py={1}
    //         bg={useColorModeValue('gray.50', 'gray.800')}
    //         fontWeight={'400'}>
    //         #{tags[1]}
    //       </Badge>
    //       <Badge
    //         px={2}
    //         py={1}
    //         bg={useColorModeValue('gray.50', 'gray.800')}
    //         fontWeight={'400'}>
    //         #{tags[2]}
    //       </Badge>
    //     </Stack>

    //     <Stack mt={8} direction={'row'} spacing={4}>
    //       <Button
    //         onClick={() => router.push(link)}
    //         flex={1}
    //         fontSize={'sm'}
    //         rounded={'full'}
    //         bg={'blue.400'}
    //         color={'white'}
    //         boxShadow={
    //           '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
    //         }
    //         _hover={{
    //           bg: 'blue.500',
    //         }}
    //         _focus={{
    //           bg: 'blue.500',
    //         }}>
    //         View Details
    //       </Button>
    //     </Stack>
    //   </Box>
    // </Center>
  );
};

export default PortfolioCard;
