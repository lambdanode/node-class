		
    //    var length ;                               // Number
	//	var lastName="Amar";                      // String
	//	var cars = ["Saab", "Volvo", "BMW"];           // Array
	//	var x = {firstName:"John", lastName:"Doe"};    // Object
    
    	var answer1 = "It's alright";             // Single quote inside double quotes
		var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
		var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes 
        var answer4 = 'He is called "Johnny"';  

    //    console.log(answer1);
    /*    console.log(answer2);
        console.log(answer3);  */

        function myFunction(p1, p2) {
                return p1 * p2;   
            }
      
  //    console.log(myFunction(10,10));

     lastname = "Doe";
     lastName = "Peterson"; 
     var carName; //its value is undefined

  //   console.log(lastName);
  //   console.log(lastname);

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    address :  {doorNo : 20 , streetName : "NTM"}, 
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

console.log(person.address.doorNo);

