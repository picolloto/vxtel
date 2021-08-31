import { Router } from "express";
import cors from "cors";

import PlanController from "./app/controllers/PlanController";
import TariffController from "./app/controllers/TariffController";

const routes = new Router();

routes.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,POST,DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

// Plan routes
routes.get("/plan", PlanController.index);

// Tariff routes
routes.get("/tariff", TariffController.index);

export default routes;
