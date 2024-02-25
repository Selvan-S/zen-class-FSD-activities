# Table of contents

1. [Introduction](#introduction)
2. [Creating an Object](#creating-an-object)
   - [Using object initializers](#using-object-initializers)
   - [Using a constructor function](#using-a-constructor-function)
   - [Using the Object.create() method](#using-the-objectcreate-method)
3. [Objects and properties](#using-the-objectcreate-method)
   - [Accessing properties](#accessing-properties)
   - [Deleting properties](#deleting-properties)

## Introduction

An Object is an collection of properties, and a property is an "Key and Value" pairs.</br>

Similar to other programming languages, objects in JavaScript also can be compared to objects in real life. For an example, A car is an object with the properties of colour, width, height, weight, a material it is made of, etc.

## Creating an Object

### Using object initializers

```JavaScript
const date = {
    day: 25,
    month: "February",
    year: 2024
}
```

Each property name before colons is an identifier or "Key", and after colons is an "value" which is assigned to the property name. </br>

The Object literal are wrapped inside curly braces `{}`.

### Using a constructor function

```JS
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.publishYear = year;
}
```

To define an object type, create a function for the object type that specifies its name, properties, and methods. </br>

In this case, we created an object type called `Book`, and properties as `title`, `author` and `year`.
</br>

Notice the use of this to assign values to the object's properties based on the values passed to the function.
</br>

Now we can create an object called myBook as follows:

```JS
const myBook = new Book("A Brief History of Time", "Stephen Hawking", 1988);
```

This statement creates `myBook` and assigns it the specified values for its properties. Then the value of `myBook.title` is the string `"A Brief History of Time"`, `myBook.author` is the string `"Stephen Hawking"`, myBook.publishYear is the integer `1988`, and so on. The order of arguments and parameters should be the same.

### Using the Object.create() method

```JS
const Book = {
    this.title = "N/A", // Default value of properties
    this.author = "N/A", // Default value of properties
    this.publishYear = 0, // Default value of properties
    displayType() {
    // Method which will display properties of Book
        console.log("Title: " + title );
        console.log("Author: " + author );
        console.log("Publish Year: " + publishYear);
  },
};

// Create new Book called book1
const book1 = Object.create(Book);
animal1.displayType(); 
/* Logs:  Title: N/A
          Author: N/A
          Publish Year: 0 
*/

// Create new book called book2
const book2 = Object.create(Animal);
book2.title = "A Brief History of Time";
book2.author = "Stephen Hawking";
book2.publishYear = 1988;
fish.displayType();
/* Logs:  Title: A Brief History of Time
          Author: Stephen Hawking
          Publish Year: 1988 
*/
```
## Objects and properties
A JavaScript object has properties associated with it. Object properties are basically the same as variables, except that they are associated with objects, not scopes. The properties of an object define the characteristics of the object.</br>

For example, this example creates an object named `date`, with properties named `day`, `month`, and `year`, with their values set to `25`, `"February"`, and `2024`:
```JavaScript
const date = {
    day: 25,
    month: "February",
    year: 2024
}
```

### Accessing properties
We can access a property of an object by its property name. Property accessors come in two syntaxes: dot notation and bracket notation. For example, you could access the properties of the `date` object as follows:
``` JS 
// Dot notation
date.day = 25;
date.month = "February";
date.year = 2024;

console.log(date.month); // logs: February

// Bracket notation
date["day"] = 25;
date["month"] = "February";
date["year"] = 2024;

console.log(date[month]); // logs: February

```
### Deleting properties
The following code shows how to remove a property.
``` JS
// Creates a new object, birthday, with three properties, day, month and year.

const birthday = new Object();
birthday.day = 25;
birthday.month = "February";
birthday.year = 2024;

// Removes the year property.

delete birthday.year;
console.log("year" in birthday); // false
```
