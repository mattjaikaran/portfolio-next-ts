import BackgroundWithText from '@/components/shared/BackgroundWithText';
import ImgCarousel from '@/components/shared/ImgCarousel';
import Hero from '@/components/shared/Hero';
import styles from './Home.module.scss';

const homeHeroImg =
  'https://images.unsplash.com/photo-1641058911831-da976344fc0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80';

const homeSlides = [
  {
    id: 1,
    title: 'Design Projects 1',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 2,
    title: 'Design Projects 2',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
  },
  {
    id: 3,
    title: 'Design Projects 3',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
];

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero
        homeHero
        backgroundImage={homeHeroImg}
        title="Matt Jaikaran"
        subtitle="Software Engineer"
        btnText="View GitHub"
        btnLink="https://github.com/mattjaikaran"
      />
      <BackgroundWithText
        bgColor="black"
        textColor="white"
        title="This is some big text"
        subtitle="With some smaller text below"
      />
      <ImgCarousel images={homeSlides} />
    </div>
  );
};

export default Home;
