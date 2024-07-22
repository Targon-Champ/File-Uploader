import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <div>Page not found. Please go back to the home page.</div>

      <Link to="home">
        <button>
          <span>click here to go back to home page</span>
        </button>
      </Link>
    </div>
  );
}
