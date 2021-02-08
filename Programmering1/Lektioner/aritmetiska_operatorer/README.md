# Aritmetiska operatorer

## Innehåll

- [JavaScript Aritmetiska operatorer](#javascript-aritmetiska-operatorer)
- [Aritmetiska operatorer](#aritmetiska-operatorer)
- [Operatorer och operander](#operatorer-och-operander)
    - [Addition](#addition)
    - [Subtraktion](#subtraktion)
    - [Multiplikation](#multiplikation)
    - [Division](#division)
    - [Rest (Remainder)](#rest-remainder)
    - [Incrementing](#incrementing)
    - [Decrementing](#decrementing)
    - [Exponentiation](#exponentiation)
- [Operatörens företräde (Operator Precedence)](#operatrens-fretrde-operator-precedence)
- [JavaScript Operator Precedence Values](#javascript-operator-precedence-values)

# JavaScript Aritmetiska operatorer

Aritmetiska operatörer utför aritmetik på siffror (literals eller variabler).

| Operator      | Beskrivning   |
| ------------- |:-------------:|
| + | Addition
| - | Subtraction
| * | Multiplication
| ** | Exponentiation (ES2016)
| / | Division
| % | Modulus (Remainder)
| ++ | Increment
| -- | Decrement

# Aritmetiska operatorer

En typisk aritmetisk operation fungerar på två siffror.

De två siffrorna kan vara literals:

```javascript
let x = 100 + 50;
```

eller variabler:

```javascript
let x = a + b;
```

eller uttryck:

```javascript
let x = (100 + 50) * a;
```

# Operatorer och operander

## Addition

**Additions** operatorn (`+`) lägger till siffror:

```javascript
let x = 5;
let y = 2;
let z = x + y;
```

## Subtraktion

**Subtraktions** operatorn (`-`) subtraherar siffror:

```javascript
let x = 5;
let y = 2;
let z = x - y;
```

## Multiplikation

**Multiplikations** operatorn (`*`) multiplicerar siffror:

```javascript
let x = 5;
let y = 2;
let z = x * y;
```

## Division

**Divisions** operatorn (`/`) dividerar siffror:

```javascript
let x = 5;
let y = 2;
let z = x / y;
```

## Rest (Remainder)

**Modulus** operatorn (`%`) returnerar "resten" av en ekvation:

```javascript
let x = 5;
let y = 2;
let z = x % y;
```

_I aritmetik ger delningen av två heltal en kvot och en återstod._

_I matematik är resultatet av en moduls operation återstoden/resten av en aritmetisk uppdelning._

## Incrementing

**Incrementing** operatorn (`++`) ökar nummer:

```javascript
let x = 5;
x++;
let z = x;
```

## Decrementing

**Decrementing** operatorn (`--`) minskar nummer:

```javascript
let x = 5;
x--;
let z = x;
```

## Exponentiation

**Exponentiation** operatorn (`**`) upphöjer den första operanden med den andra operanden:

```javascript
let x = 5;
let z = x ** 2;          // result is 25
```

`x ** y` ger samma resultat som `Math.pow(x,y)`:

```javascript
let x = 5;
let z = Math.pow(x, 2);   // result is 25
```

# Operatörens företräde (Operator Precedence)

Operatörens prioritet beskriver i vilken ordning operationer utförs i ett aritmetiskt uttryck.

```javascript
let x = 100 + 50 * 3;
```

Är resultatet av exemplet ovan samma som 150 * 3, eller är det samma som 100 + 150?

Görs additionen eller multiplikationen först?

Som i traditionell skolmatematik görs multiplikationen först.

Multiplikation (*) och division (/) har högre företräde än addition (+) och subtraktion (-) och (som i skolmatematik)
kan företräde ändras med parenteser:

```javascript
let x = (100 + 50) * 3;
```

När du använder parentes beräknas operationerna inom parentes först.

När många operationer har samma företräde (som addition och subtraktion) beräknas de från vänster till höger:

```javascript
let x = 100 + 50 - 3;
```

# JavaScript Operator Precedence Values

Value | Operator  | Description         | Example
----- | --------- | ------------------- | -------
20    | ( )       | Expression grouping | (3 + 4)
19    | .         | Member              | person.name
19    | []        | Member              | person["name"]
19    | ()        | Function call       | myFunction()
19    | new       | Create              | new Date()
17    | ++ | Postfix Increment | i++
17    | -- | Postfix Decrement | i--
16      | ++         | Prefix Increment |    ++i
16      | --         | Prefix Decrement |    --i
16      | !         | Logical not        |  !(x==y)
16      | typeof     | Type                |  typeof x
15      | **          | Exponentiation (ES2016)     | 10 ** 2
14     | *	 | Multiplication         | 10 * 5
14     | /     | Division             | 10 / 5
14     | %     | Division Remainder     | 10 % 5
13     | +     | Addition       | 10 + 5
13     | -     | Subtraction       | 10 - 5
12     | <<     | Shift left                 | x << 2
12     | > >     | Shift right                 | x >> 2
12     | > > >     | Shift right (unsigned)     | x >>> 2
11     | <             | Less than                 | x < y
11     | <=             | Less than or equal         | x <= y
11     | >             | Greater than             | x > y
11     | > =             | Greater than or equal     | x >= y
11     | in             | Property in Object         | "PI" in Math
11     | instanceof     | Instance of Object         | instanceof Array
10     | ==     | Equal             | x == y
10     | ===     | Strict equal     | x === y
10     | !=     | Unequal             | x != y
10     | !==     | Strict unequal     | x !== y
9     | &     | Bitwise AND     | x & y
8     | ^     | Bitwise XOR     | x ^ y
7     | |	 | Bitwise OR     | x | y
6     | &&     | Logical AND     | x && y
5     | ||	 | Logical OR	 | x || y
4     | ? :     | Condition     | ? "Yes" : "No"
3     | +=         | Assignment     | x += y
3     | /=         | Assignment     | x /= y
3     | -=         | Assignment     | x -= y
3     | *=         | Assignment     | x *= y
3     | %=         | Assignment     | x %= y
3     | <<=         | Assignment     | x <<= y
3     | > > =         | Assignment     | x >>= y
3     | > > > =         | Assignment     | x >>>= y
3     | &=         | Assignment     | x &= y
3     | ^=         | Assignment     | x ^= y
3     | |=         | Assignment     | x |= y
2     | yield     | Pause Function     | yield x
1     | ,         | Comma         | 5 , 6

_Uttryck inom parentes beräknas helt innan värdet används i resten av uttrycket._
