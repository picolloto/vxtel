import React, { useCallback } from "react";
import "./Banner.scss";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const Banner = ({ text, src, alt }) => {

    const onFocus = useCallback(() => {
        document.querySelector("#focus").focus();
    }, []);

    return (
        <div className="banner-container">
            <div className="banner-content">
                <div className="banner-text">
                    <h4>{text.plan}</h4>
                    <h2>{text.title}</h2>
                    <h6>{text.description}</h6>
                    <Button color="secondary" onClick={onFocus}>{text.buttonName}</Button>
                </div>
                <img src={src} alt={alt} />
            </div>
        </div>
    );
}

Banner.propTypes = {
    src: PropTypes.any,
    alt: PropTypes.string,
    text: PropTypes.object
};

export default Banner;