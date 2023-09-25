/**
 *  The encapsulation of TypeScript is the next
 */

export class Node
{
	// By default a member of the class is public
	name:string;

	public left:Node;
	// But we can explicitly declare it public
	
	// The accesibility keyword for static values : readonly
	readonly acces_level:number = 14;



	constructor(name:string)
	{
		this.name = name;
	}
}


