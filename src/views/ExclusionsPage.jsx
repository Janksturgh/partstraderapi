import Layout from '@/layouts/Layout.jsx';
import exclusions from '@/data/Exclusions.json';
import '@/styles/pages/exclusions-page.scss';

export default function ExclusionsPage() {
  return (
    <Layout title="Exclusions">
      <div className="exclusion-items">
        <div className="exclusion-items__header-row">
          <p className="exclusion-items__header-row-item">Part Number</p>
          <p className="exclusion-items__header-row-item">Description</p>
        </div>
        <div className="exclusion-items__body">
          {exclusions.map((exclusion, index) => (
            <div key={index} className="exclusion-items__row">
              <p className="exclusion-items__title">{exclusion.PartNumber}</p>
              <p className="exclusion-items__description">{exclusion.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
