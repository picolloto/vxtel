module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert("plans", [
			{
				name: "FALE MAIS",
				price: 0,
				free_minutes: 30,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "FALE MAIS",
				price: 0,
				free_minutes: 60,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "FALE MAIS",
				price: 0,
				free_minutes: 120,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},
	down: () => {},
};
