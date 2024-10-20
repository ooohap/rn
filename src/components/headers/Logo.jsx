import { Link } from "react-router-dom";
export default function Logo({ cssStyles }) {
  return (
    <>
      <Link to="/">
        <span className={`${cssStyles} inline-block mb-1`}>RN</span>
        <br />
        <div className="text-xs md:text-sm font-bold mx-auto">
          ROWAD ALNAJAH
        </div>
        <div className="text-xs md:text-sm font-bold mx-auto">
          FOR FOOD & BEVERAGES
        </div>
      </Link>
    </>
  );
}
