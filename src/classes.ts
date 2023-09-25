function lexicalName(func : Function)
{
    return func.name;
}

// Initialization of a class also known as memory allocation 
const expDate = new Date();

// Notation for the use of the class (Object) members. 
expDate.getHours();
expDate.getTime();
expDate.toISOString();

console.log("A member of the class Date is Date." + lexicalName(expDate.getDate));

// Simply definition of a class : class <className> 

class RomanDate
{
    year: number = 0; // The variable MUST to be initialized if there is no constructor.
    month: number = 0 ;
    day: number = 0;
}


/**
 *  Note that the properties (variables) of the class do not have an accesor prefix, instead TypeScript only uses the typ
 *  Excellent!
* */


class AmericanDate
{
	year:number;
	month: number;
	day: number;

	// Use the constructo keyword to create the constructor
		// Note that is could be very different on other languages

	constructor(year: number, month: number, day: number)
	{
		this.year = year;
		this.month = month;
		this.day = day;
	}
}


/***
 * Here American Data implements the constructor.
 * And then we can observe how TypeScript formats the classes through the console.
*/
let mericanDate = new AmericanDate(2023,3,13);

console.log(mericanDate);













