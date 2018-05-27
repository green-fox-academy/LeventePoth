import {Thing} from "./things";

class Fleet {
    private things: Thing[];

    constructor(){}
    add(thing: Thing){
        this.things.push(thing);
    }
}

export {Fleet};