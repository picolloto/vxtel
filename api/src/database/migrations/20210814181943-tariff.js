module.exports = {
	up: async (queryInterface, Sequelize) =>
		queryInterface.createTable("tariffs", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			origin: {
				type: Sequelize.STRING(3),
			},
			destiny: {
				type: Sequelize.STRING(3),
			},
			price: {
				type: Sequelize.NUMERIC(16,2),
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		}),

	down: async (queryInterface) => queryInterface.dropTable("tariffs"),
};
