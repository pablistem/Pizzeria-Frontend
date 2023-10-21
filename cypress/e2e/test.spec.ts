describe("test", ()=>{
    it("title-page", ()=>{
        cy.visit("http://localhost:5173/")
        cy.contains("Pizzería Don Remolo")
    })
})