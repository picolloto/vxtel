import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPlans, styleTitle } from "../../shared/utils";

import { Card, CardBody, CardDeck, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import ModalPlan from "../ModalPlan";

import "./Plan.scss";

const Plan = ({ content, name }) => {
    const [plan, setPlan] = useState([]);
    const observation = "*minutos extras terão acrécimo de 10% sobre a tarifa normal do minuto. Veja os valores na tabela abaixo.";

    const findPlans = async () => {
        const data = await getPlans();
        setPlan(data);
    }

    useEffect(() => {
        findPlans();
    }, []);

    return (
        <Container fluid id="focus" tabindex="-1">
            <div id="header-plan">
                <h3>{name}&nbsp;<span>+</span></h3>
                <ModalPlan
                    labelButton="Calcular valores do plano"
                    title="Calcular valores dos planos FaleMais"
                />
            </div>
            <CardDeck>
                <Row>
                    { plan &&
                        plan.map((item) => 
                        <Col key={item.id} xs="12" sm="6" md="4">
                                <Card className={`card-${item.free_minutes}`}>
                                    <CardBody>
                                        <CardTitle tag="h5">{styleTitle(item.name)}</CardTitle>
                                        <div className="minutes">
                                            <CardText >{item.free_minutes}<span>minutos</span></CardText>
                                        </div>
                                        <CardText className="for-only">por apenas</CardText>
                                        <div className="price">
                                            <CardText>${item.price}<span>/mês</span></CardText>
                                        </div>
                                        <CardText className="content">{content}</CardText>
                                        <CardText>
                                            <small className="text-muted">{observation}</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </CardDeck>
        </Container>
    );
}

Plan.propTypes = {
    content: PropTypes.string,
    name: PropTypes.string
};

export default Plan;