const Employee = require("../lib/Employee");

test("new Employee created", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");

});