class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}

/**
 * The same as: class Car
 * but with a shorter syntax
 */
class Car2 {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

//Modeficators
class Animal {
  /**
   * protected - only inside the class and in the class that extends this class
   */
  protected voice: string = '';

  /**
   * public - by default
   */
  public color: string = 'black';

  /**
   * private - only inside the class
   */
  private go() {
    console.log('Go');
  }
}

class Cat extends Animal {
  /**
   *
   * @param voice - can be accessed only inside the class
   * and in the class that extends this class
   * (in this case - Cat)
   * because of protected
   * (in this case - Animal)
   */
  public setVoice(voice: string): void {
    this.voice = voice;

    /**
     * Property 'go' is private and only accessible within class 'Animal'.
     */
    // this.go(); //error
  }
}

const cat = new Cat();
cat.setVoice('meow');
console.log(cat.color);
// cat.voice; // error

//Abstract classes
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'This is info';
  }
}
