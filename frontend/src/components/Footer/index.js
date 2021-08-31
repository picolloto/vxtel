import React from "react";
import { getYear } from "date-fns";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <p>©Copyright {getYear(new Date())} - Todos os direitos reservados à <b>VxTel</b></p>
        </footer>
    );
}

export default Footer;