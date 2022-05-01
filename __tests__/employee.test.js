// jest test

const Employee = require("../lib/employee")



describe("Testing Employee Class to meet standards",()=>{
    test("It should have a name",()=>{
        let testEmployee = new Employee("Steve")
        expect(testEmployee.name).toBe("Steve")
    })
})