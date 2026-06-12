# OTP Input

## Problem Statement

Build an OTP (One-Time Password) Input component where:

* The user can enter a 4-digit OTP.
* Each digit should be entered in a separate input box.
* Every input should accept only one character.
* The entered OTP should be stored and displayed correctly.

## Concepts Used

* React
* useState
* Controlled Inputs
* Array State
* Event Handling
* Dynamic Rendering
* Array Updates

## Approach

Initially, I considered using a single state value:

```js
const [otp, setOtp] = useState("");
```

However, I quickly realized that all input boxes would share the same value.

Since an OTP contains multiple digits, each input needed its own value.

I switched to:

```js
const [otp, setOtp] = useState(["", "", "", ""]);
```

which allowed each input box to store a separate digit.

## Dynamic Input Generation

Instead of manually writing four input elements, I generated them dynamically:

```js
Array.from({ length: 4 })
```

This keeps the code cleaner and easier to scale.

```jsx
{Array.from({ length: 4 }).map((_, i) => (
  <input key={i} />
))}
```

## Input Restrictions

Each input accepts only one character:

```jsx
maxLength={1}
```

This mimics the behavior of a real OTP input field.

## State Update Logic

When a user types in a specific box:

1. Create a copy of the current OTP array.
2. Update only the targeted index.
3. Save the updated array back into state.

```js
const fillOtp = (e, i) => {
  const newOtp = [...otp];
  newOtp[i] = e.target.value;
  setOtp(newOtp);
};
```

## How It Works

```txt
User Types Digit
↓
Identify Input Index
↓
Copy Existing OTP Array
↓
Update Specific Position
↓
Re-render UI
```

### Example

Initial State:

```txt
["", "", "", ""]
```

User enters:

```txt
1 5 3 8
```

State becomes:

```txt
["1", "5", "3", "8"]
```

## Learnings

### Array State

Learned that some problems require storing multiple related values.

Instead of:

```txt
One State
↓
One Value
```

the OTP component required:

```txt
One State
↓
Multiple Values (Array)
```

### Updating Specific Array Elements

Learned how to:

```js
const newArray = [...array];
newArray[index] = value;
setArray(newArray);
```

which is a very common React pattern.

### Dynamic Rendering

Practiced rendering multiple inputs using:

```js
Array.from().map()
```

instead of manually creating each element.

### Controlled Inputs

Used:

```jsx
value={otp[i]}
```

and

```jsx
onChange(...)
```

to keep React state synchronized with the UI.

## Review & Feedback (By ChatGPT)

| Area             | Rating |
| ---------------- | ------ |
| Logic            | 9.5/10 |
| State Management | 10/10  |
| React Basics     | 9/10   |
| Problem Solving  | 10/10  |
| Code Structure   | 9/10   |

## Overall

Successfully built an OTP Input component that stores each digit independently using array state.

This component introduced a more advanced state-management pattern compared to previous projects because it required tracking multiple related values and updating specific positions inside an array.

## Could Improve

* Automatically focus the next input after typing.
* Move focus to the previous input on Backspace.
* Allow only numeric input.
* Automatically submit when all digits are entered.
* Support pasting an entire OTP.
* Add validation and error states.
* Add a Verify OTP button.

## Key Takeaway

Some UI problems require more than a single state value.

When working with multiple related inputs, using an array inside state can simplify data management and make the UI easier to scale.

## Pattern Learned

* Array State
* Controlled Inputs
* Dynamic Rendering
* Immutable State Updates
* Event Handling

## Bonus Learning

During this component, I learned:

```js
Array.from()

const newArray = [...array]

newArray[index] = value

setArray(newArray)
```

and discovered how to manage multiple input fields using a single state variable containing an array.

## Possible Follow Ups

* Automatically focus the next input.
* Move focus to the previous input on Backspace.
* Allow only numeric input.
* Display the combined OTP value.
* Add OTP verification functionality.
* Automatically verify when all digits are entered.
* Support pasting a complete OTP.
* Add a resend OTP countdown timer.
* Show validation and error messages.
* Disable verification until all digits are entered.