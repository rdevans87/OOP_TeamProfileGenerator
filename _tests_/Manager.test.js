const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee")

test("Set Office Number from constructor argument", () => {
    const testValue = 0;
    const emp = new Manager("Johnny", 0, "johnny@fmail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);


});


test("Set employee ID from constructor argument", () => {
    const testValue = "";
    const emp = new Manager("Johnny", "", "johnny@fmail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);


});

test("Set Email from constructor", () => {
    const testValue = "mike@fmail.com";
    const emp = new Manager("Mike", 3, "mike@fmail.com", testValue);
});
