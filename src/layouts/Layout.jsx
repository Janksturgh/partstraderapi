import PropTypes from 'prop-types';
import Banner from '@/components/Banner';
import Header from '@/components/Header';

/**
 * @description Layout component serves as a wrapper for the main content of the application.
 * @param {string} title - The title to be displayed in the main section.
 * @param {string} description - A brief description to be displayed in the main section.
 * @param {JSX.Element} children - The child components to be rendered within the main section.
 * @returns {JSX.Element} - A JSX element representing the layout with a header and main content area.
 */
export default function Layout({ title, description = '', children }) {
  return (
    <>
      <Header />
      <Banner title={title} description={description} />
      <main role="main" className="container-standard">
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};
