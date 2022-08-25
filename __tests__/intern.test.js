// jest test

const Intern = require("../lib/intern")



describe("Testing to Check Intern Profile for a School",()=>{
    test("Interns should have a School listed",()=>{
        let testEmployee = new Intern("Student",2,"a@email.com","here's a school")
        expect(testEmployee.school).toBe("here's a school")
    })
})