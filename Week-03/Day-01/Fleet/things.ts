class Thing {
    private name: string;           // át lehet akár írni public-ra is,de˛ inkább egy új method kellene :/
    private completed: boolean;

    constructor(name: string){
        this.name = name;
    }
    public complete() {
        this.completed = true;
    }
}

export {Thing};