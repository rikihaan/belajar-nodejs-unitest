import { MyException, callMe } from "../src/exception";

test("exception", function () {
	expect(() => callMe("Asep")).toThrow();
	expect(() => callMe("Asep")).toThrow(MyException);
	expect(() => callMe("Asep")).toThrow("Ups my exception happens");
})