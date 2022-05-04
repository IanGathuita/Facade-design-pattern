/* Facade  design pattern provides a simplified interface to access a complex set of classes
in a subsystem */

class Hi{
    sayHi():void{
        console.log("Hi user. ");
    }
}

class Welcome{
    welcome():void{
        console.log("Welcome to my site. ");
    }
}

class Learn{
    learn():void{
        console.log("We are going to learn about design patterns.");
    }
}

class Facade{
    private _hiInstance:Hi;
    private _welcomeInstance:Welcome;
    private _learnInstance:Learn;

    constructor(){
        this._hiInstance = new Hi();
        this._welcomeInstance = new Welcome();
        this._learnInstance = new Learn();
    }

    //convenience method to work with operations from 3 classes. Client won't worry about this complexity
    callAllOperations():void{
        this._hiInstance.sayHi();
        this._welcomeInstance.welcome();
        this._learnInstance.learn();
    }
    
}

//client code
const facade:Facade = new Facade();
facade.callAllOperations();

