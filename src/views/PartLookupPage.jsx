import { useState } from 'react';
import Layout from '@/layouts/Layout.jsx';
import checkExclusionsList from '@/utils/checkExclusionsList.js';

/**
 * @description PartLookupPage component allows users to search for a specific part by it's part number.
 * @returns {JSX.Element} The rendered PartLookupPage component.
 */
export default function PartLookupPage() {
  // State to manage input value and error message
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  // State to manage result type (success/error)
  const [resultType, setResultType] = useState();

  const [showTooltip, setShowTooltip] = useState(false);

  // Function to handle input changes and update the state of the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setResult(''); // Clear result on input change
  };

  /**
   * handleSubmit function to validate the part number when the form is submitted
   * If the part number is valid, it clears the result message.
   * If the part number is invalid, it sets an result message.
   * @param {string} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    // try-catch block to handle validation and set the result message
    try {
      const result = checkExclusionsList(inputValue);

      /**
       * If the part number returns true from the checkExclusionsList function,
       * it means the part number is valid and not excluded
       */
      if (result === true) {
        // If the part number is valid and not excluded
        setResult(`Part number is valid: ${inputValue}`);
        setResultType('success');
      }
    } catch (error) {
      setResult(error.message);
      setResultType('error');
    }
  };
  return (
    <Layout title="Part Lookup" description="Search for a specific part by its part number.">
      <div className="part-lookup-page">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__label-and-tooltip-wrapper">
            <label className="form__label" htmlFor="part-number">
              Search for a part number
            </label>
            <button
              onClick={() => setShowTooltip(!showTooltip)}
              aria-label={showTooltip ? 'Hide tooltip' : 'Show tooltip'}
              aria-expanded={showTooltip}
              className="form__tooltip-button"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-label="Tooltip information icon"
              >
                <circle cx="10" cy="10" r="10" fill={showTooltip ? '#005abb' : '#000000'} />
                <text
                  x="10"
                  y="14"
                  text-anchor="middle"
                  font-size="12"
                  font-family="Arial, sans-serif"
                  fill="#ffffff"
                  font-weight="bold"
                >
                  ?
                </text>
              </svg>
            </button>
          </div>
          <div className="form__input-and-button-wrapper">
            <input
              type="text"
              id="part-number"
              name="part-number"
              placeholder="Enter part number"
              value={inputValue}
              onChange={handleInputChange}
              className="form__input"
            />
            <button type="submit" className="form__button" aria-label="Search for part number">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="form__icon"
              >
                <g transform="scale(-1,1) translate(-24,0)">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </g>
              </svg>
            </button>
          </div>
          {showTooltip && (
            <p className="form__helper-text">
              A part number should consist of a 4 digit number, followed by a hyphen, and then a 4
              character minimum alphanumeric code (e.g. 0001-sparkplugs).
            </p>
          )}
          {result && (
            <div
              className={`form__result-message ${resultType == 'success' ? 'form__result-message--success' : 'form__result-message--error'}`}
            >
              {result}
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
}
