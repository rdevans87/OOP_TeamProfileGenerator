const Engineer = require("../lib/Engineer")

test("Set GitHub Account from constructor", () => {
    const testValue = "GitHub"
    const emp = new Engineer("Bobby", 2, "https://github.com/fgithubaccount", testValue);
    expect(emp.github).toBe(testValue);

});

test("Set Email from constructor", () => {
    const testValue = "kelli@fmail.com";
    const emp = new Engineer ("Kelli", 4, "kelli@fmail.com", testValue);
});
