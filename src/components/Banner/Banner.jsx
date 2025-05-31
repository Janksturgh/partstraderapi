import './banner.scss';

/**
 * @description Banner component rendering a title to be displayed on the page.
 * @param {string} title - The title to be displayed in the banner. 
 * @returns {JSX.Element} A JSX element representing the banner with the title.
 */

export default function Banner({title}) {
  return (
    <div className='banner'>
        <div className='container-standard'> 
            <h1 className='banner__title'>{title}</h1>
      </div>
    </div>
  );
}