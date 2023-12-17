test("truethiness test", () => {
	let value = null;
	// memestikan bahwa value adalah null
	expect(value).toBeNull();

	// memastika value buka undefined (defined)
	expect(value).toBeDefined();

	// memasitkan value bernilai false, asal if statement
	expect(value).toBeFalsy()

	value = undefined;
	expect(value).toBeUndefined();
	expect(value).toBeFalsy();
	value = "Asep Riki";
	expect(value).toBeTruthy();
})