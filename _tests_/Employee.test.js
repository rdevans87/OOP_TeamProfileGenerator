const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

test("new Employee created", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");

});


// test("Set GitHub Account from constructor", () => {
//     const testValue = "GitHub"
//     const emp = new Engineer("Jimmy", 9, "https://github.com/fgithubaccount", testValue);
//     expect(emp.github).toBe(testValue);

// });


test("Set Email from constructor", () => {
    const testValue = "kelli@fmail.com";
    const emp = new Intern("Kelli", 4, "kelli@fmail.com", testValue);
});
