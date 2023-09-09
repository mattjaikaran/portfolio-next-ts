import BlogCard from '@/components/blog/BlogCard';
import styles from './Blog.module.scss';
import {
  createStyles,
  SimpleGrid,
  Title,
  useMantineTheme,
} from '@mantine/core';

const mockdata = [
  {
    id: '1',
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
    route: '/blog/1',
  },
  {
    id: '2',
    title: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 27, 2022',
    route: '/blog/2',
  },
  {
    id: '3',
    title: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 9, 2022',
    route: '/blog/3',
  },
  {
    id: '4',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 12, 2022',
    route: '/blog/4',
  },
];

const useStyles = createStyles(theme => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

const Blog = () => {
  const { classes } = useStyles();
  const globalTheme = useMantineTheme();

  const renderCards = mockdata.map(blog => (
    <BlogCard key={blog.id} blog={blog} classes={classes} />
  ));
  return (
    <div className={styles.blog}>
      <Title
        order={2}
        size="h1"
        sx={{
          fontFamily: `Greycliff CF, ${globalTheme.fontFamily}`,
        }}
        weight={300}
        pb="xl"
      >
        Blog
      </Title>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {renderCards}
      </SimpleGrid>
    </div>
  );
};

export default Blog;
