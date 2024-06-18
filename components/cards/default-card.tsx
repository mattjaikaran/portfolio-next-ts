import { HeadingH3, Paragraph } from '../shared/typography';
import { Button } from '../ui/button';

export default function DefaultCard() {
  return (
    <div className="p-8 md:p-24 lg:p-32 bg-foreground text-background md:px-64 md:py-32 text-center">
      <HeadingH3>Title</HeadingH3>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged.
      </Paragraph>
      <Button variant="outline" className="text-foreground">
        See More
      </Button>
    </div>
  );
}

{
  /* <div className="bg-foreground text-background p-24 text-center">
  <HeadingH3>what up</HeadingH3>
  <Button variant="outline" className="bg-foreground text-background">
    Click Here
  </Button>
</div>; */
}
