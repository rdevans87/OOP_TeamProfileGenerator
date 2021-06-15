const Intern = require("../lib/Intern");

test("get school from constructor", () => {
    const testValue = "The Ohio State University";
    const emp = new Intern("Ali", 4, "ali@fmail.com", testValue);
});

test("Set Email from constructor", () => {
    const testValue = "kelli@fmail.com";
    const emp = new Intern("Kelli", 4, "kelli@fmail.com", testValue);
});
