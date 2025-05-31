/**
 * @description External Icon is a simple SVG component that renders an arrow icon.
 * It can be used in various parts of the application where an arrow icon is needed.
 * This is used instead of writing inline svg's in the components so the browser does 
 * not have to parse the same svg multiple times and instead Vite will bundle it as a single file.
 * @param {string} className - Optional class name to apply custom styles to the icon.
 * @returns {JSX.Element} - A JSX element representing the arrow icon.  
 */

export default function ExternalIcon({ className = '' }) {
    return (
        <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>

    );
}