import React from "react";
import ReactDOM from "react-dom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { banner, tariff, header } from "./mock/components";

import App from "../App";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Plan from "../components/Plan";
import Tariff from "../components/Tariff";
import Footer from "../components/Footer";

configure({ adapter: new Adapter() });

it("renders Header without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Header 
      title={header.title}
      subtitle={header.subtitle}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Banner without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Banner 
        src={banner.src}
        alt={banner.alt}
        text={banner.text}
    />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Plan without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Plan />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Tariff without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Tariff
      title={tariff.title}
    />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Footer without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders App without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
