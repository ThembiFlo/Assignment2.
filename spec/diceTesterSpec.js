describe ("diceFactory", function(){
    it("should make 6 sided dice", function(){
        let diceFactory = new diceFactory(6);
        diceFactory.makeDie()
        expect(diceFactory.sixSidedDice.length).toBeLessThanOrEqual(6);
    });

/*describe("diceFactory", function(){
    it("should make 20 sided dice", function(){
        let diceFactory = new diceFactory(20);
        diceFactory.makeDie();
        expect(diceFactory.TwentySidedDice.length).toBeLessThanOrEqual(20);
    
    });*/
    it("should return true if dice is fair",function() {
		let diceTester = new DiceTester();
		expect(diceTester.testDie()).toBeTruthy();
    });
});


