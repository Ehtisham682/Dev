num1 = 10
num2 = 15
num3 = '10'

// "==" Operator checks for equality of values only, not the data type
console.log(num1==num2) // false
console.log(num1==num3) // true

// "===" Operator checks for equality of values and data type
console.log(num1===num2) // false
console.log(num1===num3) // false

// "!=" Operator checks for inequality of values only, not the data type
console.log(num1!=num2) // true

// "!==" Operator checks for inequality of values and data type
console.log(num1!==num2) // true
console.log(num1!==num3) // true

// "<" less than Operator checks if the left operand is less than the right operand
console.log(num1<num2) // true

// ">" greater than Operator checks if the left operand is greater than the right operand
console.log(num1>num2) // false

// "<=" less than or equal to Operator checks if the left operand is less than or equal to the right operand
console.log(num1<=num2) // true

// ">=" greater than or equal to Operator checks if the left operand is greater than or equal to the right operand
console.log(num1>=num2) // false