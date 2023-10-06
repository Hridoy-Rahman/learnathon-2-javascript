//  JavaScript Class

// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

// class Rectangle {
//     constructor(hight, width) {
//         this.width = width;
//         this.height = hight;
//     }

//     getArea() {
//         return this.height * this.width;
//     }
//     getParameter() {
//         return 2 * (this.height + this.width)
//     }


// }

// const myRectangle1 = new Rectangle(3, 2);
// const myRectangle2 = new Rectangle(4, 5);
// console.log("Area of rectangle1 is " + myRectangle1.getArea())
// console.log("Parameter of rectangle1 is " + myRectangle1.getParameter())
// console.log("Area of rectangle2 is " + myRectangle2.getArea())
// console.log("Parameter of rectangle2 is " + myRectangle2.getParameter())



// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


// class Person{
//     constructor(name,age,height){
//         this.name=name;
//         this.age=age;
//         this.height=height;
//     }

//     displayDetails(){
//         console.log('Name :' + this.name)
//         console.log('Age :' + this.age)
//         console.log('Height :' + this.height)
//     }
// }

// const person1=new Person('Rakib',24,5.5);
// const person2=new Person('Hridoy',25,5.3);

// console.log('Person1 Details')
// person1.displayDetails();
// console.log('Person2 Details :');
// person2.displayDetails();




// Write a JavaScript program that creates a class called 'Vehicle' with properties for name, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.



// class Vehicle {
//     constructor(name, model, year) {
//         this.name = name;
//         this.model = model;
//         this.year = year;
//     }

//     displayDetails() {

//         console.log('Vehicle DEetails')
//         console.log(`name: ${this.name}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Year: ${this.year}`);

//     }
// }

// class Car extends Vehicle{
//     constructor(name,model,year,doors){
//         super(name,model,year);
//         this.doors=doors;
//     }

//     displayDetails() {

//         console.log('Car Details')
//         console.log(`name: ${this.name}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Year: ${this.year}`);
//         console.log(`Doors : ${this.doors}`)

//     }
// }


// const vehicle=new Vehicle('Ford','mustang',2015)
// const car=new Car('Toyota','Corolla',2023,4)

// vehicle.displayDetails()
// car.displayDetails()




// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

// class BankAccount{
//     constructor(accountNo,balance){
//         this.accountNo=accountNo;
//         this.balance=balance;

//         console.log(`Account No. : ${accountNo}`)
//         console.log(`Balance : ${balance}`)
//     }
//     deposite(amount){
//         this.balance += amount;
//         console.log(`Deposited amount: ${amount}`)
//     }
//     withdraw(amount){
//         if(this.balance>=amount){
//             this.balance -=amount;
//             console.log(`Withdrawn amount : ${amount}`)
//         }
//         else{
//             console.log(`Your balance is ${this.balance} and you want to withdraw ${amount}`)
//             console.log('Insufficient Balance')
//         }
//     }

//     displayBalance(){
//         console.log(`Your Balance is ${this.balance}`)
//     }
// }


// const account=new BankAccount(12243423,2000);

// account.deposite(1000);
// account.displayBalance();
// account.withdraw(1500);
// account.displayBalance();




// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


// class Employee{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary;
//         console.log(`Employee Name : ${name}`)
//         console.log(`Employee's Salary : ${salary}`)
//     }
//     calculateSalary(){
//         return this.salary *12;
//     }

// }

// class Manager extends Employee{
//     constructor(name,salary,department){
//         super(name,salary)
//         this.department=department;
//     }

//     calculateSalary(){
//         const baseSalary= super.calculateSalary();
//         const bonus=0.15;
//         return (baseSalary* 0.15)+baseSalary;
//     }
// }

// const employee= new Employee('Rakib',1000);
// console.log(`Annual Salary : ${employee.calculateSalary()}`)


// const manager= new Manager('Hridoy',1200,'HR')

// console.log(`Manager: ${manager.name}`);
// console.log(`Department: ${manager.department}`);
// console.log(`Annual Salary: $${manager.calculateSalary()}`);





// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

// class Book{
//     constructor(title,author,year){
//         this.title=title;
//         this.author=author;
//         this.year=year;
//     }

//     dispDetails(){
//         console.log(`Book Title : ${this.title}`)
//         console.log(`Book Author : ${this.author}`)
//         console.log(`Publish Year: ${this.year}`)
//     }
// }

// class Ebook extends Book{
//     constructor(title,author,year,price){
//         super(title,author,year);
//         this.price=price;
//     }

//     dispDetails(){
//         super.dispDetails();
//         console.log(`Book Price : ${this.price}`)
//     }
// }


// const book=new Ebook('Javascript','John Doe',2016,250.50)
// book.dispDetails()