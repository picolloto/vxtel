import Sequelize, { Model } from "sequelize";

class Tariff extends Model {
	static init(sequelize) {
		super.init(
			{
				origin: Sequelize.INTEGER,
				destiny: Sequelize.INTEGER,
				price: Sequelize.NUMERIC,
			},
			{
				sequelize,
			}
		);

		return this;
	}
}

export default Tariff;
