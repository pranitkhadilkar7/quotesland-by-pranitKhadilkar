import { Nav } from "react-bootstrap";

export function MainNav() {
  return (
    <div className="main-nav p-3">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="brand">Quotesland</h2>
        <Nav defaultActiveKey="/home">
          <Nav.Link eventKey="/home">Home</Nav.Link>
          <Nav.Link eventKey="/more">More Quotes</Nav.Link>
          <Nav.Link eventKey="/about">About</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}
