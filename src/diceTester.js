class DiceFactory{
    constructor(){
        this.sixSidedDice = [];
    };
    makeDie(){
        for(let i = 1; i < 7; i++){
            this.sixSidedDice.push(i);
        };
        let dice = this.sixSidedDice;
        return dice;
    };
};
    
class DiceTester{
    testDie(){
        let diceFactory = new DiceFactory();
        //diceFactory.makeDie();
        diceFactory.sixSidedDice.push();
        for(let i = 1; i < diceFactory.sixSidedDice.length; i++){
            if(diceFactory.sixSidedDice[i - 1] != i){
                throw new Error("dice not fair");
            };
        }
        return true;
}
}
    let diceTester = new DiceTester();
    diceTester.testDie();

  
      




