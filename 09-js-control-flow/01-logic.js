/* Javascript logic follows that of other programming languages I've learned very closely */

//One important distinction is type coercion
// "==" attempts to convert variables into the same type before comparing
// "===" also compares the type of two variables
//
// Similarly "!=" performs type coercion while "!==" will evaluate to true if the two
// variables are of different types
// 
//This leads to some quirks (examples below)

true == "1" //true ("1" becomes 1 which is true)
true == "2" //false (All numbers != 0 or 1 are false when compared to either boolean)
false == "0" //true ("0" becomes 0 which is false)
null == undefined //true
null === undefined // false
NaN == NaN //false


//Non-boolean values are still "truthy" or "falsey" in a boolean context
!"hello" //false (A non-emtpy string is truthy)
!""  //true (An empty string is falsey)
//false, "", undefined, null, 0 and NaN are falsey, everything else is truthy


//As in other languages, we can use the && (and), ||  (or) and ! (not) operators

