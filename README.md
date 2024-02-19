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

# <a href="String.js">3. String </a>
# <a href="Array.js">4. Array</a>
# <a href="Object.js">5. Object</a>
# <a href="functions.js">6. Loop's</a>
<u>For...in loop</u>
The for...in loop in Javascript is used to loop through the properties of an object. 
for (key in object) {
  // code block to be executed
}
<u>For...of loop</u>
We can use the javascript for-of loop to loop through the values of an iterable object in Javascript. Objects that we can iterate over with for..of loop are called iterable. To be more specific, iterables must implement the Symbol.iterator method to qualify as an iterable.
for (variable of iterable) {
  // code block to be executed
}

``
