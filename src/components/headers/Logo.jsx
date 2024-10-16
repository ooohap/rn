import { Link } from "react-router-dom";
export default function Logo({ cssStyles }) {
  return (
    <Link to="/" className={cssStyles}>
      RN
    </Link>
  );
}
