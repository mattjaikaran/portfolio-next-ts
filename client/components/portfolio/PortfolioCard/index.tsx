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
      {img ? (
        <Card.Section>
          <Image src={img} height={300} alt="Norway" />
        </Card.Section>
      ) : null}

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
  );
};

export default PortfolioCard;
