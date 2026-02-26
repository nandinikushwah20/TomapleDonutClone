import { Link } from "react-router-dom";

export default function PageHeader({ title, bg }) {
  return (
    <div
      className="pageHeader"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="phOverlay">
        <h1>{title}</h1>

        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
