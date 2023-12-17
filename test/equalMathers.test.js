test("test tobe", () => {
	let name = "Asep";
	let hello = `hello ${name}`

	expect(hello).toBe("hello asep");
})

test("test toEquals", () => {
	let person = { id: "riki" };
	Object.assign(person, { name: "Asep Riki" })
	
	expect(person).toEqual({ id: "riki", name: "Asep Riki" });
})