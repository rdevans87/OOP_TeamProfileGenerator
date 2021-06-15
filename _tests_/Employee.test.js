const Employee = require("../lib/Employee");

test("new Employee created", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");

});


test("Set GitHub Account from constructor", () => {
    const testValue = "GitHub"
    const emp = new Employee("Jimmy", 9, "https://github.com/fgithubaccount", testValue);
    expect(emp.github).toBe(testValue);

});


test("get school from constructor", () => {
    const testValue = "Kent State University";
    const emp = new Employee ("Kelli", 4, "kelli@fmail.com", testValue);
});
