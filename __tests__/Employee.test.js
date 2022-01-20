const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Employee Name', () => {
    const name = "Gr4"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
test('Set ID', () => {
    const testId = 37;
    const employee = new Employee("gr4", testId);
    expect(employee.id).toBe(testId);
});
test('Set Email', () => {
    const testEmail = "gr4@gmail.com"
    const employee = new Employee("gr4", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('get name from getName', () => {
    const testName = "gr4"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "37"
    const employee = new Employee("gr4", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email from getEmail', () => {
    const testEmail = "gr4@gmail.com"
    const employee = new Employee("Gr4", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Gr4", 1, "gr4@gmail.com4");
    expect(employee.getRole()).toBe(testRole);
});