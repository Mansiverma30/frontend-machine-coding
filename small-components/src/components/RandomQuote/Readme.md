# Random Quote Generator

## Problem Statement

Build a Random Quote Generator where:

* A user clicks a button.
* A random quote is selected from a predefined list.
* The selected quote is displayed on the screen.

## Concepts Used

* React
* useState
* Event Handling
* Arrays
* Math.random()
* Conditional Rendering

## Approach

Created an array containing multiple quotes:

```js
const quote = [
  "Use cursor-pointer.",
  "Frontend Engineer loading...",
  "Virat century incoming.",
  ...
];
```

Used state to store the randomly selected quote index:

```js
const [quoteGen, setQuoteGen] = useState(null);
```

When the button is clicked:

1. Generate a random index.
2. Store the index in state.
3. Display the corresponding quote.

## Random Number Logic

Used:

```js
Math.floor(
  Math.random() * (end - start + 1)
) + start;
```

### Example

If:

```txt
start = 0
end = 19
```

Possible outputs:

```txt
0
1
2
...
19
```

The generated number is then used as an array index.

## How It Works

```txt
Button Click
↓
Generate Random Index
↓
Store Index In State
↓
Display Quote
```

## Example

User clicks:

```txt
Click for Some Quote
```

Possible output:

```txt
Quote number 8:

Tailwind CSS supremacy.
```

Another click:

```txt
Quote number 15:

My code works. I won't ask why.
```

## Learnings

### Math.random()

Learned how to generate random values using:

```js
Math.random()
```

### Math.floor()

Used:

```js
Math.floor()
```

to convert decimal values into whole numbers.

### Random Array Access

Learned how to:

```txt
Generate Random Index
↓
Access Array Element
```

using:

```js
quote[randomIndex]
```

### Conditional Rendering

Used:

```jsx
quoteGen !== null
```

to prevent displaying a quote before the first button click.

## Review & Feedback (By ChatGPT)

| Area                    | Rating |
| ----------------------- | ------ |
| Logic                   | 9/10   |
| React Basics            | 9/10   |
| JavaScript Fundamentals | 9/10   |
| Simplicity              | 10/10  |
| Creativity              | 10/10  |

## Overall

Successfully built a Random Quote Generator using React state and JavaScript's random number generation functions.

This component introduced randomization logic while reinforcing state management and conditional rendering concepts.

## Could Improve

* Prevent the same quote from appearing consecutively.
* Add quote categories.
* Add animations when changing quotes.
* Add a copy quote button.
* Fetch quotes from an API.
* Display the author of each quote.
* Add a favorite quote feature.
* Add a history of previously generated quotes.

## Key Takeaway

A combination of:

```txt
Array
+
Math.random()
+
useState
```

can be used to create dynamic and unpredictable user experiences.

## Pattern Learned

* State Management
* Event Handling
* Random Number Generation
* Conditional Rendering
* Array Access

## Bonus Learning

During this component, I learned:

```js
Math.random()

Math.floor()

array[index]
```

and discovered how random values can be used to dynamically display content in a React application.

## Possible Follow Ups

* Prevent the same quote from appearing consecutively.
* Display quote authors.
* Add next and previous navigation.
* Add quote categories.
* Copy the displayed quote to clipboard.
* Add favorite quote functionality.
* Show quote generation history.
* Add quote transition animations.
* Fetch quotes from an API.
* Add quote search functionality.