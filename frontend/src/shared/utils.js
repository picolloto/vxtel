import Axios from "axios";
import { api } from "./const";

export const getTariffs = async () => {
    const tariffExists = localStorage.getItem("tariffs");
    try {
        if (!tariffExists) {
            const { data } = await Axios.get(`${api.URL_API}/tariff`);
            
            if(!data) {
                throw new Error("Nenhuma tarifa encotrada");
            }

            localStorage.setItem("tariffs", JSON.stringify(data));
            
            return data;
        } else {
            return JSON.parse(tariffExists);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getPlans = async () => {
    const planExists = localStorage.getItem("plans");
    try {
        if (!planExists) {
            const { data } = await Axios.get(`${api.URL_API}/plan`);
            
            if(!data) {
                throw new Error("Nenhum plano encotrado");
            }

            localStorage.setItem("plans", JSON.stringify(data));
            
            return data;
        } else {
            return JSON.parse(planExists);
        }

    } catch (error) {
        console.log(error);
    }
}

export const styleTitle = (value) => {
    if (value) {
        const styled = value.split(" ");
        return styled.map((item, key) => <span key={key}>{item}</span>);
    }
}