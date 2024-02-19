# -Namaste-Javascript 

A-Z of javascript

# <a href="Hoisting.js">1. Hoisting</a>

<pre>
  In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.<br>
  Hoisting allow to used var ,functions,class before  declarations`<br>
  We can only acces for var if only it assigned but not declaired
    ex- console.log(a);
    let a=2; //in output it show reference error because it dont support hoisting in same use case for Const
     <br>
    console.log(a);
    var b=3;//in output dont show any error but get the value is undefined
</pre>

# <a href="functions.js">2. Functions</a>
 functions basically 2types-----
 1. Named function<br>
 ===========================<br>
 `A function which have a name.`<br>
 function wish( ){<br>
  console.log("Happy birthday");<br>
 }
 2. Anonymous function <br>
 ===========================<br>
` A function basically have no name but stored in a variable.`
 <br>let wish=function( ){<br>
  console.log("Happy birthday");<br>
 }

# <a href="String.js">3. String </a>

# <a href="Array.js">4. Array</a>
`Array is linear data structure which store/hold elements of various datatypes and indexed starting from zero.`
<pre>
we can declair it various way like
1. using `Array Literal`  like let name=["A","B","C","D"]
2. using ` New Array()`   Keyword like let address=new Array();
address[0]="Ghaziabad";
address[0]="Delhi";
address[0]="INDIA";
</pre>>
# <a href="Object.js">5. Object</a>

# <a href="Loops.js">6. Loop's</a>
1.<u>For...in loop</u><br>
============<br>
The for...in loop in Javascript is used to loop through the properties of an object. <br>
for (key in object) {<br>
  // code block to be executed<br>
}<br>
2.<u>For...of loop</u><br>
============<br>
We can use the javascript for-of loop to loop through the values of an iterable object in Javascript.<br> Objects that we can iterate over with for..of loop are called iterable. <br>To be more specific, iterables must implement the Symbol.iterator method to qualify as an iterable.<br>
 (variable of iterable) {<br>
  // code block to be executed<br>
}

``
