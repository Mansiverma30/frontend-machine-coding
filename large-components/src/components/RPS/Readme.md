# Rock Paper Scissors

## Problem Statement

Build a Rock Paper Scissors game where:

* The user can select Rock, Paper, or Scissors.
* The computer randomly selects one option.
* The winner is determined according to the game rules.
* The result is displayed on the screen.

---

## Concepts Used

* React
* useState
* Event Handling
* Arrays
* Random Number Generation
* Conditional Logic
* Conditional Rendering

---

## State Design

### User Choice

```js
const [user, setUser] = useState(null);
```

Stores the option selected by the user.

Example:

```txt
Rock
Paper
Scissors
```

---

### Computer Choice

```js
const [comp, setComp] = useState(null);
```

Stores the computer's randomly selected option.

---

### Winner State

```js
const [win, setWin] = useState(null);
```

Stores the game result.

Possible values:

```txt
You
Computer
Draw
```

---

## Choices Array

```js
const choice = [
  "Rock",
  "Paper",
  "Scissors"
];
```

Stores all available options.

Used for:

* Rendering buttons
* Selecting computer choice
* Comparing results

---

## Computer Selection Logic

```js
let compPick =
  Math.floor(Math.random() * 3);
```

### How It Works

```txt
Math.random()
↓
0 - 0.999...
↓
Multiply By 3
↓
0 - 2.999...
↓
Math.floor()
↓
0, 1, or 2
```

These values are used as indices for:

```js
choice[compPick]
```

---

## User Click Logic

```js
const click = (i) => {
  setUser(choice[i]);
};
```

The clicked button index determines the user's choice.

Example:

```txt
Index 0 → Rock
Index 1 → Paper
Index 2 → Scissors
```

---

## Winner Logic

### Draw

```js
if (choice[i] === choice[compPick]) {
  setWin("Draw");
}
```

Example:

```txt
Rock vs Rock
```

---

### User Wins

```js
(Rock vs Scissors)
(Paper vs Rock)
(Scissors vs Paper)
```

Implementation:

```js
(choice[i] === "Rock" &&
 choice[compPick] === "Scissors")

||

(choice[i] === "Paper" &&
 choice[compPick] === "Rock")

||

(choice[i] === "Scissors" &&
 choice[compPick] === "Paper")
```

---

### Computer Wins

All remaining cases:

```js
else {
  setWin("Computer");
}
```

Examples:

```txt
Rock vs Paper
Paper vs Scissors
Scissors vs Rock
```

---

## Rendering Choices

Buttons are generated dynamically using:

```js
choice.map(...)
```

```jsx
{
  choice.map((c, i) => (
    <button>
      {c}
    </button>
  ));
}
```

This avoids manually creating three separate buttons.

---

## Displaying Results

```jsx
<p>You: {user}</p>
<p>Computer: {comp}</p>
<p>Winner: {win}</p>
```

Example Output:

```txt
You: Rock
Computer: Scissors
Winner: You
```

---

## How It Works

```txt
User Clicks Button
↓
User Choice Stored
↓
Computer Randomly Picks Option
↓
Winner Logic Executes
↓
State Updates
↓
Component Re-renders
↓
Result Displayed
```

---

## React Patterns Learned

### State Management

```js
useState()
```

### Arrays

```js
choice[]
```

### Random Number Generation

```js
Math.random()
Math.floor()
```

### Event Handling

```js
onClick()
```

### Conditional Logic

```js
if / else if / else
```

---

## Development Journey

### Version 1

```txt
Buttons Only
```

### Version 2

```txt
Computer Random Choice
```

### Version 3

```txt
Display User Choice
Display Computer Choice
```

### Version 4

```txt
Winner Logic
```

### Final Version

```txt
Rock
Paper
Scissors

Random Opponent

Winner Detection

Result Display
```

---

## Overall

This project reinforced:

```txt
Arrays
State Management
Randomness
Conditional Logic
Event Handling
```

while introducing basic game logic and decision-making.

---

## Key Takeaway

Not every React component is about forms or inputs.

Sometimes the challenge is:

```txt
User Action
↓
Random Event
↓
Decision Logic
↓
UI Update
```

which is exactly what happens in Rock Paper Scissors.

## Possible Follow Up
- Add score tracking.
- Add best of 3 mode.
- Add best of 5 mode.
- Add game history.
- Add reset game button.
- Add emojis (🪨 📄 ✂️).
- Add animations for winner.
- Add sound effects.
- Add countdown before reveal.
- Add multiplayer mode.
- Add difficulty levels.
- Add streak tracking.