// jest test

const Manager = require("../lib/manager")



describe("Testing to Check Manager Profile for an Office",()=>{
    test("Managers should have an Office number listed",()=>{
        let testEmployee = new Manager("Manager",2,"a@email.com","12345")
        expect(testEmployee.officeNumber).toBe("12345")
    })
})