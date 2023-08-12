function lexicalName(func : Function)
{
    return func.name;
}

// Initialization 
const expDate = new Date();

// Members usage. 
expDate.getHours();
expDate.getTime();
expDate.toISOString();

console.log("A member of the class Date is Date." + lexicalName(expDate.getDate));

// Definition of class

class RomanDate
{
    year: number = 0; // The variable MUST to be initialized if there is no constructor.
    month: number = 0 ;
    day: number = 0;
}
// ^
/**
 *  Note that the properties (variables) of the class do not have an scope prefix, instead TypeScript only uses the typ
 *  Excellent!
* */


class AmericanDate
{
	year:number;
	month: number;
	day: number;

	constructor(year: number, month: number, day: number)
	{
		this.year = year;
		this.month = month;
		this.day = day;
	}
}

let mericanDate = new AmericanDate(2023,3,13);

/***
 * Here American Data implements the constructor.
 * And then we can observe how TypeScript formats the classes through the console.
*/

console.log(mericanDate);













