module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert("tariffs", [
			{
				origin: "011",
				destiny: "016",
				price: 1.90,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				origin: "016",
				destiny: "011",
				price: 2.90,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				origin: "011",
				destiny: "017",
				price: 1.70,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				origin: "017",
				destiny: "011",
				price: 2.70,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				origin: "011",
				destiny: "018",
				price: 0.90,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				origin: "018",
				destiny: "011",
				price: 1.90,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},
	down: () => {},
};
