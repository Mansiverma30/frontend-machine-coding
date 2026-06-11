# Temperature Converter

## Problem Statement

Build a Temperature Converter component where:

* A user enters a temperature value in Celsius.
* Clicking the Convert button converts the value to Fahrenheit.
* The converted temperature is displayed on the screen.

## Concepts Used

* React
* useState
* Controlled Inputs
* Event Handling
* Conditional Rendering
* Basic Calculations

## Formula Used

For converting Celsius to Fahrenheit:

F = (9*C)/5 + 32

### Example

```txt
25°C
↓
77°F
```

## Approach

Created state to store:

```js
const [temp, setTemp] = useState("");
const [convert, setConvert] = useState(false);
```

### Input Handling

The user enters a Celsius value:

```js
onChange={(e) => {
  setTemp(e.target.value);
  setConvert(false);
}}
```

When the input changes:

* Temperature state updates.
* Previous conversion result is hidden.

### Conversion

When the Convert button is clicked:

```js
onClick={() => setConvert(true)}
```

The Fahrenheit value is calculated and displayed:

```js
(9 * temp) / 5 + 32
```

## How It Works

```txt
User Enters Celsius
↓
Click Convert
↓
Formula Executes
↓
Fahrenheit Displayed
```

## Learnings

### Controlled Inputs

Used:

```js
value={temp}
```

and

```js
onChange(...)
```

to manage input state.

### Conditional Rendering

Used:

```js
{convert && ...}
```

to display the converted value only after clicking the button.

### Basic Calculations in React

Learned how to:

```txt
Take User Input
↓
Perform Calculation
↓
Render Result
```

inside a React component.

### UI Thinking

Reset the conversion state whenever the input changes:

```js
setConvert(false);
```

This prevents showing outdated conversion results.

## Review & Feedback (By ChatGPT)

| Area             | Rating |
| ---------------- | ------ |
| Logic            | 9/10   |
| React Basics     | 9/10   |
| State Management | 9/10   |
| User Experience  | 9/10   |
| Simplicity       | 10/10  |

## Overall

Successfully built a Celsius to Fahrenheit converter using React state and a mathematical formula.

This component introduced calculations based on user input and reinforced controlled inputs, conditional rendering, and state management.

## Could Improve

* Add Fahrenheit → Celsius conversion.
* Add a dropdown to choose conversion type.
* Convert automatically while typing.
* Display decimal precision using `.toFixed()`.
* Add validation for empty inputs.
* Show both Celsius and Fahrenheit values together.
* Add Kelvin conversion.

## Key Takeaway

A React component can do more than show and hide content.

By combining:

```txt
Input State
+
Calculations
+
Conditional Rendering
```

it is possible to create interactive utility components.

## Pattern Learned

* Controlled Inputs
* State Management
* Event Handling
* Conditional Rendering
* Derived Values from User Input

## Bonus Learning

During this component, I learned:

```txt
Celsius to Fahrenheit Conversion

F = (9 × C) / 5 + 32
```

and practiced displaying calculated values based on user-provided input.

## Possible Follow Ups

* Add Fahrenheit → Celsius conversion.
* Add a dropdown to select conversion type.
* Convert temperatures automatically while typing.
* Display both original and converted values.
* Add Kelvin conversion support.
* Add a swap conversion button.
* Validate empty inputs.
* Disable the Convert button when input is empty.
* Store conversion history.
* Format results using .toFixed().