const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee")

test("Set Office Number from constructor argument", () => {
const testValue = 1;
const emp = new Manager("Johnny", 1, "johnny@fmail.com", testValue);
expect(emp.officeNumber).toBe(testValue);


});