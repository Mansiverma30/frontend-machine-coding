# BMI Calculator

## Problem Statement

Build a BMI (Body Mass Index) Calculator that allows users to:

* Enter their weight in kilograms.
* Enter their height in centimeters.
* Calculate BMI using the standard BMI formula.
* Display the BMI value rounded to 2 decimal places.
* Display the BMI category based on the calculated result.

---

## Concepts Used

* React
* useState
* Form Handling
* Number Conversion
* Conditional Rendering
* Mathematical Calculations
* Input Validation

---

## State Design

### Weight State

```js
const [weight, setWeight] = useState("");
```

Stores the user's weight in kilograms.

### Height State

```js
const [height, setHeight] = useState("");
```

Stores the user's height in centimeters.

### BMI State

```js
const [bmi, setBmi] = useState(null);
```

Stores the calculated BMI value.

---

## BMI Formula

### Convert Height To Meters

```js
const heightInMeters = Number(height) / 100;
```

Example:

```txt
170 cm → 1.7 m
```

### Calculate BMI

BMI Formula:

BMI = Weight / Height²

Implementation:

```js
const bmi =
  Number(weight) /
  Math.pow(heightInMeters, 2);
```

Example:

```txt
Weight = 70 kg
Height = 170 cm

BMI = 70 / (1.7 × 1.7)
BMI = 24.22
```

---

## Input Validation

```js
if (!height || !weight) {
  return;
}
```

Prevents calculation when any input field is empty.

---

## Rounding BMI

```js
setBmi(Number(newBmi.toFixed(2)));
```

Example:

```txt
24.22222222
↓
24.22
```

Provides cleaner output for users.

---

## BMI Categories

### Underweight

```txt
BMI < 18.5
```

### Normal Weight

```txt
18.5 ≤ BMI < 25
```

### Overweight

```txt
25 ≤ BMI < 30
```

### Obese

```txt
BMI ≥ 30
```

---

## Conditional Rendering

Results are displayed only after BMI has been calculated.

```jsx
{bmi !== null && (
  <>
    <p>BMI is: {bmi}</p>
  </>
)}
```

This prevents showing incorrect information on initial page load.

---

## How It Works

```txt
Enter Weight
↓
Enter Height
↓
Click Calculate BMI
↓
Convert Height To Meters
↓
Calculate BMI
↓
Round To 2 Decimals
↓
Display BMI Value
↓
Display BMI Category
```

---

## React Patterns Learned

### Multiple Inputs

```js
weight
height
```

### Form Handling

```js
onChange()
```

### Number Conversion

```js
Number()
```

### Conditional Rendering

```js
bmi !== null
```

### Derived Values

```js
heightInMeters
```

---

## Development Journey

### Version 1

```txt
Weight Input
Height Input
Calculate Button
```

### Version 2

```txt
BMI Calculation
```

### Version 3

```txt
Rounded BMI Value
```

### Version 4

```txt
BMI Categories
```

### Final Version

```txt
Validation
Rounded Output
BMI Categories
Conditional Rendering
```

---

## Overall

This project reinforced concepts related to:

```txt
Form Inputs
Validation
Mathematical Calculations
Conditional Rendering
State Management
```

while introducing real-world data processing and categorization logic.

## Possible Follow up
- Add Reset button.
- Automatically calculate BMI as the user types.
- Display category in different colors.
- Add BMI reference chart.
- Show healthy weight range for the entered height.
- Add support for pounds (lbs) and feet/inches.
- Add metric/imperial unit toggle.
- Show BMI history using localStorage.
- Add progress bar based on BMI range.
- Display health tips based on BMI category.
- Add age and gender inputs for enhanced insights.
- Add a BMI comparison chart.