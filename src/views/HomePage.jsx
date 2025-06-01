import CardNavigation from '@/components/CardNavigation';
import Layout from '@/layouts/Layout';

export default function HomePage() {
  const cards = [
    {
      title: 'Part Lookup',
      description: 'Look up compatible parts by their id.',
      url: '/part-lookup',
      external: false,
    },
    {
      title: 'Exclusions',
      description: 'Add, edit or delete items from yuor exclusions list.',
      url: '/exclusions',
      external: false,
    },
    {
      title: 'Cat Ipsum',
      description:
        "Cat ipsum dolor sit amet, attack dog, run away and pretend to be victim. Human is in bath tub, emergency! drowning! meooowww!. Time to go zooooom rub butt on table i'm going to lap some water out of my  but poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls so make meme, make cute face or chase after silly colored fish toys around the house.",
      url: 'http://www.catipsum.com/index.php',
      external: true,
    },
  ];
  return (
    <Layout title="Home">
      <div className="container-2col">
        {cards.map((card, index) => (
          <CardNavigation
            key={index}
            title={card.title}
            description={card.description}
            url={card.url}
            external={card.external}
          />
        ))}
      </div>
    </Layout>
  );
}
