import Layout from '@/layouts/Layout.jsx';

export default function PartLookupPage() {
  return (
    <Layout title="Part Lookup" description="Search for a specific part by its ID">
      <div className="part-lookup-page">
        <form className="part-lookup-page__form">
          <label htmlFor="part-id">Part ID:</label>
          <input
            className="part-lookup-page__input"
            type="text"
            id="part-id"
            name="part-id"
            placeholder="Enter part ID"
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </Layout>
  );
}
