const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "gr4ham18";
    const employee = new Engineer("Gr4", 1, "gr4@gmail.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Gr4", 1, "gr4@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "gr4ham18";
    const employee = new Engineer("Gr4", 1, "gr4@gmail.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})