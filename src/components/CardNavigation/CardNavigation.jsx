import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowIcon from '@/components/icons/ArrowIcon';
import './card-navigation.scss';

/**
 * @description CardNavigation component renders a card-like navigation element.
 * It displays a title, description, and a link to learn more and returns
 * a react route link..
 * @param {string} title - The title of the card.
 * @param {string} description - A brief description of the card's content.
 * @param {string} url - The URL to navigate to when the card is clicked.
 * @returns {JSX.Element} - A JSX element representing the card navigation.
 */
export default function CardNavigation({ title, description, url }) {
  return (
    <Link to={url} className="card-navigation" aria-label={title}>
      <h2 className="card-navigation__title">{title}</h2>
      <p className="card-navigation__description">{description}</p>
      <span className="card-navigation__link" aria-hidden="true">
        <span>Learn More</span>
        <ArrowIcon className="card-navigation__link-icon" />
      </span>
    </Link>
  );
}

CardNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
