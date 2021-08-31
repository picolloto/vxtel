import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getTariffs, getPlans } from "../../shared/utils";

import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    FormGroup, 
    Label, 
    Input, 
    Form, 
    Row,
    Col,
    CardBody,
    Card,
    CardText,
    FormFeedback
} from "reactstrap";

import "./ModalPlan.scss";

const ModalPlan = ({ labelButton, title }) => {
    const [modal, setModal] = useState(false);
    const [tariff, setTariff] = useState([]);
    const [plans, setPlans] = useState([]);
    const [plan, setPlan] = useState(1);
    const [destiny, setDestiny] = useState(1);
    const [minutes, setMinutes] = useState(null);
    const [withPlan, setWithPlan] = useState((0).toFixed(2));
    const [noPlan, setNoPlan] = useState((0).toFixed(2));
    const [invalid, setInvalid] = useState(false);

    const toggle = () => setModal(!modal);

    const loadData = useCallback (async () => {
        const itemsTariffs = await getTariffs();
        const itemsPlans = await getPlans();
        setTariff(itemsTariffs);
        setPlans(itemsPlans);
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const CalculateWithoutPlan = useCallback (() => {
        try {
            const calculated = (minutes*tariff[destiny-1].price).toFixed(2);

            if (!calculated) {
                throw new Error("Problema ao calcular total sem plano.");
            }
            return calculated;
        } catch (error) {
            console.log(error);
        }
    }, [tariff, destiny, minutes]);

    const CalculateWithPlan = useCallback (() => {
        try {
            const percentage = (Number(tariff[destiny-1].price)*0.10);
            let calculated = ((minutes-plan)*(Number(tariff[destiny-1].price)+percentage));
            
            if (!calculated) {
                throw new Error("Problema ao calcular total com plano.");
            }

            calculated = (minutes-plan) < 1 ? 0.00 : calculated; 
            return calculated.toFixed(2);
        } catch (error) {
            console.log(error);
        }
    }, [plan, tariff, destiny, minutes]);

    const handleSubmit = useCallback ((e) => {
        e.preventDefault();

        if (plan && minutes && destiny) {
            const usePlan = (minutes > plan);
            if (usePlan) {
                setWithPlan(CalculateWithPlan);
            }
    
            setNoPlan(CalculateWithoutPlan);
            setInvalid(false);
        } else if (!minutes) {
            setInvalid(true);
        }

    }, [CalculateWithoutPlan, CalculateWithPlan, minutes, plan, destiny]);
  
    return (
        <div>
            <Button color="info" onClick={toggle}>{labelButton}</Button>
            { toggle &&
                <Modal isOpen={modal} fade={true} toggle={toggle} >
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {
                        <Form>
                            <Label className="selectPlan">Selecione um plano</Label>
                            <FormGroup check>
                                <Row>
                                    {
                                        plans.map(item =>
                                            <Col key={item.id} xs="12" sm="4">
                                                <Label>
                                                    <Input 
                                                        defaultChecked={item.id === 1}
                                                        type="radio" 
                                                        name="plan" 
                                                        value={Number(item.free_minutes)}
                                                        onClick={({ target }) => setPlan(Number(target.value))}
                                                    />
                                                        {' '}
                                                        {item.name}
                                                        <span id={`plan-${item.free_minutes}`}>&nbsp;{item.free_minutes}</span>
                                                </Label>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </FormGroup>
                            <Row>
                                <Col xs="12" sm="4" >
                                    <FormGroup>
                                        <Label for="origin" className="selectOrigin">Escolha a origem</Label>
                                        <Input 
                                            type="select" 
                                            name="origin" 
                                            id="origin"
                                            onChange={({ target }) => setDestiny(Number(target.value))} 
                                            value={Number(destiny)}>
                                            {
                                                tariff.map(item =>
                                                    <option key={item.id} value={item.id}>{item.origin}</option>
                                                )
                                            }
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" sm="4">
                                    <FormGroup >
                                        <Label for="destiny" className="selectDestiny">Escolha o destino</Label>
                                        <Input 
                                            type="select" 
                                            name="destiny" 
                                            id="destiny" 
                                            onChange={({ target }) => setDestiny(Number(target.value))} 
                                            value={Number(destiny)}
                                        >
                                            {
                                                tariff.map((item) =>
                                                    <option key={item.id} value={item.id}>{item.destiny}</option>
                                                )
                                            }
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" sm="4">
                                    <FormGroup>
                                        <Label>Minutos</Label>
                                        <Input 
                                            invalid={invalid}
                                            type="number" 
                                            name="minutes" 
                                            id="minutes"
                                            maxLength={5}
                                            min={1}
                                            value={minutes}
                                            onChange={({ target }) => {
                                                if (target.value > 0) {
                                                    setMinutes(Number(target.value));
                                                }
                                            }}
                                        />
                                        <FormFeedback>Deve ser no mínimo 1</FormFeedback>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <Card body className="comparative">
                                        <CardBody>
                                            <Row>
                                                <Col xs="6">
                                                    <Label>Valor com plano</Label>
                                                    <CardText id="with-plan">${withPlan}</CardText>
                                                </Col>
                                                <Col xs="6">
                                                    <Label>Valor sem plano</Label>
                                                    <CardText id="no-plan">${noPlan}</CardText>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>Calcular</Button>
                    <Button color="danger" onClick={toggle}>Fechar</Button>
                </ModalFooter>
            </Modal>
            }
        </div>
  );
}

ModalPlan.propTypes = {
    labelButton: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ModalPlan;



