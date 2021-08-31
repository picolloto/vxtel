import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Plan from "../../components/Plan";
import Tariff from "../../components/Tariff";
import Footer from "../../components/Footer";

import man from "../../assets/images/man.png";

import "./Home.scss";

const Home = () => {
    const bannerText = {
        plan: "FALE MAIS",
        title: "Pague somente os minutos excedentes",
        description: "Fale mais com seus amigos, sua família, sem mensalidade. Aqui você só paga os minutos excedentes, sem supresas na sua fatura!",
        buttonName: "Ver planos"
    }

    return (
        <>
            <Header 
                title="VxTel"
                subtitle="Chamadas com qualidade e preços incríveis"
            />
            <Banner 
                src={man}
                alt="Banner do plano fale mais"
                text={bannerText}
            />
            <Plan 
                content="é isso mesmo, você só paga os minutos excedentes."
                name="Plano FaleMais"
            />
            <Tariff
                title="Tarifa por minuto"
            />
            <Footer />
        </>
    );
}

export default Home;