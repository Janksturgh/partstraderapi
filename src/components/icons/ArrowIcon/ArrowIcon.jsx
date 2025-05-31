/**
 * @description Arrow Icon is a simple SVG component that renders an arrow icon.
 * It can be used in various parts of the application where an arrow icon is needed.
 * This is used instead of writing inline svg's in the components so the browser does
 * not have to parse the same svg multiple times and instead Vite will bundle it as a single file.
 * @param {string} className - Optional class name to apply custom styles to the icon.
 * @returns {JSX.Element} - A JSX element representing the arrow icon.
 */

export default function ArrowIcon({ className = '' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="12" y1="5" x2="19" y2="12" />
      <line x1="12" y1="19" x2="19" y2="12" />
    </svg>
  );
}
