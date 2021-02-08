# Concatenating Strings

Sätta ihop 2 strängar

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"

alert(greetUser + userName)
```

Result: `Hey ! Welcome to my websiteArasto`

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message = greetUser + userName

alert(message)
```

Result: `Hey ! Welcome to my websiteArasto`

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message2 = $greetUser

alert(message2)
```

Result: `greetUser`

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message2 =`${greetUser}`

alert(message2)
```

Result: `Hey ! Welcome to my website`

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message2 = ${greetUser}

alert(message2)
```

Result: `Hey ! Welcome to my website`
