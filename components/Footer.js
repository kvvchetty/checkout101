
const Footer = () => {
    const mystyle = {
        "height": "100px",
        "position": "absolute",
        "bottom": "0",
        "width": "100%",
        "backgroundColor": "#333",
        "color":"#fff",
    };
    return (
        <footer style={mystyle} className="page-footer font-small bg-blue pt-4">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
                <p>email:subashi.k@outlook.com</p>
              </div>
              <div className="col-md-6 mb-md-0 mb-3">
                <h5 className="text-uppercase font-weight-bold">Return Policy</h5>
                <p>We accept returns after 7 days max</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <span> SithaRamaRetailerChennai </span>
          </div>
        </footer>
    );
  };
  export default Footer;