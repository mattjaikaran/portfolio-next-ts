import { Card, Image, Text, AspectRatio } from '@mantine/core';
import { useRouter } from 'next/router';

interface BlogCardProps {
  blog: BlogProps;
  classes: Classes;
}

interface BlogProps {
  id: string;
  title: string;
  date: string;
  image: string;
  route: string;
}

interface Classes {
  card: string;
  title: string;
}

const BlogCard = (props: BlogCardProps) => {
  const { blog, classes } = props;
  const router = useRouter();
  return (
    <Card
      key={blog.title}
      p="md"
      radius="md"
      component="a"
      onClick={() => router.push(blog.route)}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={blog.image} alt={blog.title} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {blog.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {blog.title}
      </Text>
    </Card>
  );
};

export default BlogCard;
