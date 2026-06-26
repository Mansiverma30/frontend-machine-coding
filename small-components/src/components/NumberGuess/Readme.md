# Number Guessing Game

## Problem Statement

Build a simple number guessing game where:

* The computer generates a random number.
* The user guesses the number.
* Feedback is displayed after every guess.
* The user can restart the game with a new random number.



## Concepts Used

* React
* useState
* Event Handling
* Conditional Rendering
* Random Number Generation
* Comparison Operators



## State Design

### User Guess

```js
const [num, setNum] = useState("");
```

Stores the number entered by the user.

---

### Game Result

```js
const [guess, setGuess] = useState("");
```

Stores the feedback message.

Example:

```txt
Too Low
Too High
Correct 🎉
```

---

### Computer's Number

```js
const [computerPick, setComputerPick] = useState(
  Math.floor(Math.random() * 100) + 1
);
```

Stores the randomly generated number between **1 and 100**.

The number is generated **only once** when the component mounts and remains the same until a new game starts.



## Controlled Input

```jsx
<input
  type="number"
  value={num}
  onChange={(e) => setNum(Number(e.target.value))}
/>
```

React controls the input value through state.

Flow:

```txt
User Types
      ↓
onChange Fires
      ↓
setNum()
      ↓
State Updates
      ↓
Component Re-renders
```



## Guess Logic

When the user clicks **Guess**:

```txt
Computer Number == User Guess
```

Possible outcomes:

```txt
Correct
```

or

```txt
Too Low
```

or

```txt
Too High
```

The feedback helps the user move closer to the correct answer.



## How It Works

```txt
Component Loads
        ↓
Random Number Generated
        ↓
User Enters Guess
        ↓
Clicks Guess
        ↓
Compare Numbers
        ↓
Display Feedback
```



## Play Again

```txt
Play Again
```

Generates a new random number and resets the game.

Typical reset actions:

```txt
New Random Number
Clear Input
Clear Feedback
```



## Random Number Generation

```js
Math.floor(Math.random() * 100) + 1
```

Produces values between:

```txt
1 → 100
```

Explanation:

```txt
Math.random()
      ↓
0 ≤ value < 1

×100
      ↓
0 ≤ value < 100

Math.floor()
      ↓
0 → 99

+1
      ↓
1 → 100
```



## React Patterns Learned

### useState

Stores:

* User input
* Computer's number
* Feedback message


### Controlled Components

The input value is controlled using React state.



### Conditional Logic

Uses comparisons to determine whether the user's guess is:

* Too High
* Too Low
* Correct


### Event Handling

Button clicks trigger:

* Guess checking
* Game reset

## Development Journey

### Version 1

```txt
User Input
```

### Version 2

```txt
Random Number Generation
```

### Version 3

```txt
Guess Comparison
```

### Version 4

```txt
Feedback Messages
```

### Final Version

```txt
Random Number
Guess Validation
Feedback
Play Again
Game Reset
```



## Overall

This project reinforced:

```txt
useState
Controlled Components
Random Number Generation
Conditional Rendering
Comparison Logic
Game State Management
```

while demonstrating how to build a simple interactive game using React.


## Possible Follow-Ups

- Attempt Counter
- Guess History
- Limit Attempts (e.g., 10)
- Difficulty Levels (Easy/Medium/Hard)
- Timer Challenge
- Score System
- Disable Input After Winning
- Reveal Answer Button
- Keyboard Support (Enter Key)
- Confetti Animation on Win

