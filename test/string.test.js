test("test strinng", () => {
	const name = "Asep Riki Hari";

	expect(name).toBe("Asep Riki Hari");
	expect(name).toBe("Asep Riki Hari");
	expect(name).toMatch(/iki/);
})