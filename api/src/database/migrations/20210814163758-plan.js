module.exports = {
	up: async (queryInterface, Sequelize) =>
		queryInterface.createTable("plans", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING(30),
			},
			price: {
				type: Sequelize.NUMERIC(16,2),
			},
			free_minutes: {
				type: Sequelize.INTEGER,
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

	down: async (queryInterface) => queryInterface.dropTable("plans"),
};
