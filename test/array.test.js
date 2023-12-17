test('array', () => {
	const names = ["Asep", "Riki", "Hari", "Rendi"];
	expect(names).toContain("Hari");
	expect(names).toEqual(["Asep", "Riki", "Hari", "Rendi"])
	
	const person = [{ name: "Asep" }, { name: "Riki" }];
	expect(person).toContainEqual({ name: "Riki" });
	expect(person).toEqual([{name:"Asep"},{name:"Riki"}])
})