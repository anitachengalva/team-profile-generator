// jest test

const Engineer = require("../lib/engineer")



describe("Testing to Check Engineer Profile for GitHub",()=>{
    test("It should have a GitHub",()=>{
        let testEmployee = new Engineer("Steve",2,"a@email.com","here's a github")
        expect(testEmployee.github).toBe("here's a github")
    })
})