import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <MDBFooter bgColor="light" className="text-center footer">
        <div className="text-center fText">
          @ {currentYear} ThankYouForYourTime
        </div>
      </MDBFooter>
    );
}