import Banner from '@/components/Banner';
import Header from '@/components/Header';

/**
 * @description Layout component serves as a wrapper for the main content of the application.
 * @param {string} title - The title to be displayed in the main section.
 * @param {JSX.Element} children - The child components to be rendered within the main section. 
 * @returns {JSX.Element} - A JSX element representing the layout with a header and main content area.
 */
export default function Layout({title, children}) {
  return (
    <>
      <Header />
       <Banner title={title} />
      <main role='main' className='container-standard'>
        {children}
      </main>
    </>
  );
}