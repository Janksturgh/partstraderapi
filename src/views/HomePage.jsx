import CardNavigation from '@/components/CardNavigation';
import Layout from '@/layouts/Layout';

export default function HomePage() {
  const cards = [
    {
      title: 'Part Lookup',
      description: 'Look up compatible parts by their id.',
      url: '/part-lookup',
    },
    {
      title: 'Exclusions',
      description: 'Add, edit or delete items from yuor exclusions list.',
      url: '/exclusions',
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
          />
        ))}
      </div>
    </Layout>
  );
}
