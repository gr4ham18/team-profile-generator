const Manager = require('../lib/Manager');


test("setting office number", () => {
    const testValue = "37";
    const employee = new Manager("Gr4", 1, "gr4@gmail.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
})

test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Gr4", 1, "gr4@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})