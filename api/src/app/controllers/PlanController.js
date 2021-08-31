import Plan from "../models/Plan";

class PlanController {
    async index(req, res) {
		try{
			const plans = await Plan.findAll();

			if (!plans) {
				return res.status(204).json({ message: "Nenhum plano foi encontrado." });
			}

			return res.status(200).json(plans);
		} catch (error) {
			return res.status(500).json(error);
		}
    }
}

export default new PlanController();
