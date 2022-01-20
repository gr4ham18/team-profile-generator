const Intern = require("../lib/Intern");

test("setting school via the constructor argument", () => {
    const testValue = "University of Central Florida";
    const employee = new Intern("Gr4", 1, "gr4@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Gr4", 1, "gr4@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "University of Central Florida";
    const employee = new Intern("Gr4", 1, "gr4@gmail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});