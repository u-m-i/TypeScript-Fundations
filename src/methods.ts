class HttpRequest
{
	status: number;
	date: Date;

	method: string = "";

	constructor(status: number, date: Date)
	{
		this.date = date;
		this.status = status;
	}


	// As equals as the variables we can type the functions
	printStatus() : string
	{
		return `Status: ${this.status}`;
	}



	// This is the literal type
	configureMethod(method: 'get' | 'update' | 'post')
	{
		this.method = method;
	}
}

// Common usage

const request = new HttpRequest(200, new Date());

console.log(request.printStatus());

request.configureMethod('get');






