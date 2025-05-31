import ArrowIcon from '@/components/icons/ArrowIcon';
import './card-navigation.scss';
import ExternalIcon from '@/components/icons/ExternalIcon';

/**
 * @description CardNavigation component renders a card-like navigation element.
 * It displays a title, description, and a link to learn more.
 * @param {string} title - The title of the card.
 * @param {string} description - A brief description of the card's content.
 * @param {string} url - The URL to navigate to when the card is clicked.
 * @param {boolean} external - Indicates if the link is external. If true, an external icon is shown.
 * @returns {JSX.Element} - A JSX element representing the card navigation.
 */
export default function CardNavigation({ title, description, url, external = false }) {
  return (
    <a
      className="card-navigation"
      href={url}
      aria-label={`${title}`}
      target={external && '_blank'}
      rel={external && 'noopener noreferrer'}
    >
      <h2 className="card-navigation__title">{title}</h2>
      <p className="card-navigation__description">{description}</p>
      <span className="card-navigation__link" aria-hidden="true">
        <span>Learn More</span>
        {external ? (
          <ExternalIcon className="card-navigation__link-icon" />
        ) : (
          <ArrowIcon className="card-navigation__link-icon" />
        )}
      </span>
    </a>
  );
}
