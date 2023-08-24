/**
 *  The encapsulation of TypeScript is the next
 */

export class Node
{
	// By default a member of the class is public
	name:string;
	public reference:Node;
	// But we can explicitly declare it public
	
	// The accesibility keyword for static values : readonly
	readonly antropy:int = 13;



	Node(name:string)
	{
		this.name = name;
	}
}


