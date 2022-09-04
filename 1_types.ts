// const variable : type = value;

const str: string = 'Hello';
const num: number = 42;
const float: number = 4.2;
const big: number = 3e10;
const isFetching: boolean = true;
const isLoading: boolean = false;
const message: string = 'Hello Typescript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];

/**
 * this style of writing is called generics
 * we call global Array type and pass to it type of array elements
 * this is the same as number[]
 * Array< type what we want >
 */

const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const words: string[] = ['Hello', 'Typescript'];

//Tuple
const contact: [string, number] = ['Andriy', 1234567];

//Any
let variable: any = 42;
//...
variable = 'New String';
variable = [];

/**
 *
 * we put void if function doesn't return anything
 */

function SayMyName(name: string): void {
  console.log(name);
}

SayMyName('Andriy');

/**
 * The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
 * never also appears when TypeScript determines there’s nothing left in a union.
 */
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

/**
 * Own type.
 * we can create our own type and use it in our code
 */
type Login = string;

const login: Login = 'admin';
// const login2: Login = 2;

/**
 * Own type.
 * we can create our own type and use it in our code
 */
type ID = string | number;


const id1: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true;

//Null
type SomeType = string | null | undefined;
