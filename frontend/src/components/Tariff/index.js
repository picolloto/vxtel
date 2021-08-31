import React, { useEffect, useState } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

import { Container, Table } from "reactstrap";
import { api } from "../../shared/const";

import "./Tariff.scss";

const Tariff = ({ title }) => {
    const [tariff, setTariff] = useState([]);

    const getTariffs = async () => {
        const tariffExists = localStorage.getItem("tariffs");
        try {
            if (!tariffExists) {
                const { data } = await Axios.get(`${api.URL_API}/tariff`);
                
                if(!data) {
                    throw new Error("Nenhuma tarifa encotrada");
                }

                localStorage.setItem("tariffs", JSON.stringify(data));
                
                setTariff(data);
            } else {
                setTariff(JSON.parse(tariffExists));
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTariffs();
    }, []);

    return (
        <Container fluid>
            <h3>{title}  <span>+</span></h3>
            <Table borderless>
                <thead>
                    <tr>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>$/min</th>
                    </tr>
                </thead>
                <tbody>
                { tariff &&
                    tariff.map((item) => 
                        <tr key={item.id}>
                            <td>{item.origin}</td>
                            <td>{item.destiny}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </Container>
    );
}

Tariff.propTypes = {
    title: PropTypes.string.isRequired
};

export default Tariff;