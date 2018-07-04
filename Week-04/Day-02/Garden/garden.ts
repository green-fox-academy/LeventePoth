class Garden {
    plants = []
    color: string
    threshhold: number = 0
    waterAmount: number
    type: string

constructor() {
}

// initializePlants() {
//     this.plants.push(new Tree('purple'))
//     this.plants.push(new Tree('green'))
//     this.plants.push(new Flower('yellow'))
//     this.plants.push(new Flower('white'))
// }

whenType (type: string): void {
    if (type === 'Tree') {
        this.threshhold = 5
    }
    else (this.threshhold = 10);
}

whenWater (amount: number): void {
    if (this.threshhold > this.waterAmount) {
      this.waterAmount += amount;
    }
}

}

class Tree {
color: string
type: string = "Tree"
threshhold: number = 10
waterAmount: number = 0
  
constructor (color: string) {
    this.color = color
    }
}

class Flower {
    color: string
    type: string = "Flower"
    threshhold: number = 5
    waterAmount: number = 0
        
        constructor (color) {
        this.color = color;
    
        }
    }

let levigarden: Garden = new Garden
let tree1 = new Tree('purple');
console.log(tree1)