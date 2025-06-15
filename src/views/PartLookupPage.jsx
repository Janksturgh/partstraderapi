import { useState } from 'react';
import Layout from '@/layouts/Layout.jsx';
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
   * @param {string} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    // handling the empty input value here instead of at the api level so it wouldn't incur additional api calls when it isn't needed.
    if (!inputValue.trim()) {
      setResult('Please enter a part number.');
      setResultType('error');
      return;
    }

    // fetching the backend api endpoint
    const response = await fetch(
      `http://localhost:5186/api/parts/validate?partNumber=${encodeURIComponent(inputValue)}`
    );

    // creating a data varible for the json response just to make it cleaner below
    const data = await response.json();

    // creating switch statement to check against the returned api responses to handle the success/excluded response correctly.
    if (response.ok) {
      switch (data.resultType) {
        case 'Success':
          setResult(`${data.result}\nCompatible parts: ${data.compatibleParts?.join(', ')}`);
          setResultType('success');
          break;

        case 'Excluded':
          setResult(null);
          setResultType('excluded');
          break;
      }
    } else {
      // If the response is not ok then fallback to the error result message
      setResult(data.result);
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
                  textAnchor="middle"
                  fontSize="12"
                  fontFamily="Arial, sans-serif"
                  fill="#ffffff"
                  fontWeight="bold"
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
