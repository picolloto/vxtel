import Tariff from "../models/Tariff";

class TariffController {
    async index(req, res) {
		try {
			const tariffs = await Tariff.findAll();

			if (!tariffs) {
				return res.status(204).json({ message: "Nenhuma tarifa foi encontrada." });
			}

			return res.status(200).json(tariffs);
		} catch (error) {
			return res.status(500).json(error);
		}
    }
}

export default new TariffController();
