import './banner.scss';

/**
 * @description Banner component rendering a title to be displayed on the page.
 * @param {string} title - The title to be displayed in the banner.
 * @param {string} description - An optional description to be displayed below the title.
 * @returns {JSX.Element} A JSX element representing the banner with the title.
 */

export default function Banner({ title, description = '' }) {
  return (
    <div className="banner">
      <div className="container-standard">
        <h1 className="banner__title">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
