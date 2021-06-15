const Engineer = require("../lib/Engineer")

test("Set GitHub Account from constructor", () => {
    const testValue = "GitHub"
    const emp = new Engineer("Bobby", 2, "https://github.com/fgithubaccount", testValue)Engineer;
    expect(emp.github).toBe(testValue);

});