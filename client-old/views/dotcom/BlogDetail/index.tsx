import Link from 'next/link';
import { Container, Title, Text } from '@mantine/core';
import styles from './BlogDetail.module.scss';

const BlogDetail = () => {
  return (
    <Container className={styles.blogDetail}>
      <Link href="/blog">Back</Link>
    </Container>
  );
};

export default BlogDetail;
