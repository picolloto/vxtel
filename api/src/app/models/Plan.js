import Sequelize, { Model } from "sequelize";

class Plan extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				price: Sequelize.NUMERIC,
				free_minutes: Sequelize.INTEGER
			},
			{
				sequelize,
			}
		);

		return this;
	}
}

export default Plan;
