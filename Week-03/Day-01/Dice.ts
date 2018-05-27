class DiceSet {
    // You have a `DiceSet` class which has a list for 6 dices
    // You can roll all of them with roll()
    // Check the current rolled numbers with getCurrent()
    // You can reroll with reroll()
    // Your task is to roll the dices until all of the dices are 6
        dices: number[];
        readonly numOfDices: number = 6;
    
        roll(): number[] {
            this.dices = [];
            for(var i = 0; i < this.numOfDices; i++) { 
                this.dices.push(Math.floor(Math.random() * 6 + 1)); // a dices Array-babelepusholunk egy számot
            }
            return this.dices;
        }

        reroll(index: number) {
            if(index == undefined) {
                for(var i = 0; i < this.numOfDices; i++) { 
                    this.dices[i] = Math.floor(Math.random() * 6 + 1);
                }
            } else {
                this.dices[index] = Math.floor(Math.random() * 6 + 1);
            }
        }
        
        getCurrent(index: number) {
            if(index == undefined) {
                for(var i = 0; i < this.numOfDices; i++) { 
                    console.log(this.dices[i]);
                }
            } else {
                console.log(this.dices[index]);
            }        
        }

    }

    
    let diceSet = new DiceSet();        // DiceSet-en belül egy diceSet-et hoztam létre
    diceSet.roll(); 
    
    let issix: boolean= true                // A boeleant alapban igazra állítjuk
    diceSet.dices.forEach(value => {
        if (value != 6) {
            issix = false                   // Ha a dobás értéke nem hatos, akkor a boolean false
        }
    });

    while (!issix) {                     // Ha a számunk nem lett hatos, azaz issix nem igaz (false) akkor újragurítunk  
            diceSet.reroll ()           
            issix = true                    // újragurítás után megint megnézzük, hogy true e, ezt feltételezzük
    diceSet.dices.forEach(value => {
        if (value != 6) {       
            issix = false                           // az egész egy folymatos újragurítás tulajdonképpen
        }
    });                                     // ha az issix false és a while() true akkor kidob
        }

        diceSet.getCurrent()
    
    
    
    // dobás, ha csak ez van és aztán Console.log akkorkapunk egy db számot amit dobtunk
    // diceSet.getCurrent();  // az összes dobást kilistázza, de nem tudunk vele semmit kezdeni, mert console.logol
    // diceSet.reroll();  // ismét kilistázza a dobásokat
    // console.log(diceSet.dices[1]);   // 2. kocka első dobása

    // diceSet.roll();
    // diceSet.getCurrent();                        // getCurrent consolelogol, nem tudunk vel mit csinálni
    // console.log("------------------");
    // diceSet.reroll();
    // diceSet.getCurrent();
    // console.log("------------------");
    // diceSet.getCurrent(5);
    // diceSet.reroll();
    // diceSet.getCurrent();
    // console.log("------------------");
    // diceSet.reroll(4);
    // diceSet.getCurrent();
