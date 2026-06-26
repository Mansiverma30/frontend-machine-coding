# Password Strength Indicator

## Problem Statement

Build a component that:

* Accepts a password from the user.
* Evaluates its strength based on password length.
* Displays the strength dynamically as the user types.


## Concepts Used

* React
* useState
* Controlled Components
* Conditional Rendering
* String Length Validation


## State Design

### Password State

```js
const [password, setPassword] = useState("");
```

Stores the current password entered by the user.


## Password Strength Levels

```js
const strength = ["Low", "Medium", "High"];
```

Represents the available strength labels.

Current logic:

| Password Length | Strength |
| --------------: | -------- |
|           `< 6` | Low      |
|         `6 - 9` | Medium   |
|           `10+` | High     |


## Controlled Input

```jsx
<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

The input is controlled by React state.

Flow:

```txt
User Types
      ↓
onChange Fires
      ↓
setPassword()
      ↓
State Updates
      ↓
Component Re-renders
```


## Strength Calculation

The component determines password strength based on the current password length.

Example:

```txt
"abc"
↓
Length = 3
↓
Low
```

```txt
"abcdef"
↓
Length = 6
↓
Medium
```

```txt
"abcdefghijk"
↓
Length = 11
↓
High
```

## Conditional Rendering

```jsx
{password && (
  <p>Password Strength: ...</p>
)}
```

The strength is displayed only when the user has entered a password.

This prevents showing unnecessary information before typing begins.


## How It Works

```txt
User Types Password
        ↓
Password State Updates
        ↓
Password Length Checked
        ↓
Strength Determined
        ↓
React Re-renders
        ↓
Strength Displayed
```

## React Patterns Learned

### useState

Stores the password entered by the user.

### Controlled Components

The input value is managed entirely by React state.

### Conditional Rendering

Displays password strength only when a password exists.

### Derived State

The strength is **not stored separately**.

Instead, it is calculated from the password length during rendering.

## Development Journey

### Version 1

```txt
Password Input
```

### Version 2

```txt
Length-Based Strength Detection
```

### Final Version

```txt
Password Input
Dynamic Strength Detection
Conditional Rendering
```

## Overall

This project reinforced:

```txt
useState
Controlled Components
Conditional Rendering
Derived State
Basic Validation Logic
```

while demonstrating how to build a simple real-time validation component in React.


## Possible Follow-Ups


- Detect Uppercase Letters
- Detect Lowercase Letters
- Detect Numbers
- Detect Special Characters
- Minimum 8 Character Rule
- Password Strength Progress Bar
- Show Password Requirements
- Show/Hide Password Toggle
- Password Match Checker
- Generate Strong Password
