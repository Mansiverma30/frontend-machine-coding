# Debounced Search

## Problem Statement

Build a search component that:

* Allows users to type into a search input.
* Delays the search operation by 500ms.
* Filters a list based on the user's query.
* Prevents unnecessary updates while the user is actively typing.

---

## Concepts Used

* React
* useState
* useEffect
* setTimeout
* clearTimeout
* Array.filter()
* Conditional Rendering
* Debouncing

---

## State Design

### Input State

```js
const [text, setText] = useState("");
```

Stores the current value typed by the user.

Example:

```txt
r
re
rea
react
```

---

### Debounced State

```js
const [debouncedText, setDebouncedText] = useState("");
```

Stores the value only after the user stops typing for 500ms.

Example:

```txt
User Types:
r
re
rea
react

Wait 500ms

debouncedText = "react"
```

---

## Debounce Logic

```js
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedText(text);
  }, 500);

  return () => clearTimeout(timer);
}, [text]);
```

---

## How It Works

### User Types

```txt
r
```

Timer starts.

### User Types Again Before 500ms

```txt
re
```

Previous timer is cancelled.

A new timer starts.

### User Stops Typing

```txt
react
```

500ms passes.

```js
setDebouncedText("react");
```

executes.

---

## Why clearTimeout Is Important

Without cleanup:

```txt
r
re
rea
react
```

would create:

```txt
Timer 1
Timer 2
Timer 3
Timer 4
```

and all of them would execute.

Using:

```js
clearTimeout(timer);
```

ensures only the latest timer survives.

---

## Filtering Logic

```js
list.filter((item) =>
  item
    .toLowerCase()
    .includes(
      debouncedText.toLowerCase()
    )
)
```

---

## Case-Insensitive Search

Using:

```js
toLowerCase()
```

allows:

```txt
react
React
REACT
ReAcT
```

to produce the same results.

---

## Rendering Results

```js
list
  .filter(...)
  .map(...)
```

Example:

```txt
Input:
rea

Results:
React
React Router
```

---

## How It Works

```txt
User Types
↓
text Updates
↓
useEffect Runs
↓
setTimeout Starts
↓
User Continues Typing?
     ↓
     Yes
     ↓
clearTimeout
↓
Start New Timer
↓
User Stops Typing
↓
500ms Pass
↓
debouncedText Updates
↓
Search Results Render
```

---

## React Patterns Learned

### useEffect

Runs whenever the input changes.

### setTimeout

Creates the delay.

### clearTimeout

Cancels previous timers.

### Derived State

```js
debouncedText
```

is derived from:

```js
text
```

after a delay.

### Array.filter()

Used for search functionality.

---

## Interview Questions Covered

### What is Debouncing?

A technique that delays execution until a user stops triggering an event for a specified duration.

### Why Use Debouncing?

* Reduce API calls
* Improve performance
* Avoid unnecessary re-renders
* Improve user experience

### How Was Debouncing Implemented?

```txt
useEffect
+
setTimeout
+
clearTimeout
```

---

## Development Journey

### Version 1

```txt
Input Field
```

### Version 2

```txt
Debounced State
```

### Version 3

```txt
500ms Delay
```

### Version 4

```txt
Search Filtering
```

### Final Version

```txt
Debounced Search
Case-Insensitive Filtering
Delayed Updates
Filtered Results
```

---

## Overall

This project reinforced:

```txt
useEffect
setTimeout
Cleanup Functions
Filtering
Search Optimization
```

and introduced one of the most commonly asked frontend interview concepts: Debouncing.

## Possible Follow ups
- Show "Searching..." while waiting.
- Add loading spinner.
- Fetch data from a real API.
- Create reusable useDebounce hook.
- Add debounce duration selector.
- Highlight matching text.
- Show "No Results Found".
- Add keyboard navigation.
- Add search history.
- Add recent searches.
- Implement throttling and compare with debouncing.
- Build autocomplete suggestions.