# Character Counter

## Problem Statement

Build a Character Counter component where:

* Users can type text into an input field.
* The component displays the number of characters entered.
* The count updates in real-time as the user types.

## Concepts Used

* React
* useState
* Event Handling
* Controlled Inputs
* Derived State
* Tailwind CSS

## First Approach

* Stored the character count directly in state.
* Updated the count using `e.target.value.length`.

```jsx
const [count, setCount] = useState(0);

<input
  onChange={(e) => setCount(e.target.value.length)}
/>

<p>{count} characters</p>
```

### Drawback

The component worked correctly, but only the count was stored.

The actual text was not available in state, making future enhancements such as text preview, character limits, or word counting more difficult.

## Refactor

* Stored the actual text instead of the count.
* Derived the character count using `text.length`.
* Followed the React principle of storing the source of truth in state.

## Final Approach

* Text is stored in state.
* Character count is calculated using `text.length`.
* Count updates automatically whenever the text changes.
* Input behaves as a controlled component.

## Learnings

* Store the actual data whenever possible.
* Derived values usually do not need their own state.
* Input fields can be controlled through React state.
* Small components can teach important React concepts.

## Review & Feedback (By ChatGPT)

| Area             | Rating |
| ---------------- | ------ |
| Logic            | 9/10   |
| React Basics     | 9/10   |
| Event Handling   | 9/10   |
| State Management | 8.5/10 |
| Code Structure   | 8.5/10 |

## Overall

Successfully solved independently.

Initially stored the character count directly in state. Later improved the solution by storing the text itself and deriving the count using `text.length`.

## Could Improve

* Add a character limit.
* Show remaining characters.
* Add warning colors near the limit.
* Support word counting.
* Add a reset button.
* Display a live text preview.

## Key Takeaway

* Store the source of truth in state.
* Derive calculated values when possible.
* React state should represent the actual data, not just the result of calculations.

## Pattern Learned

* Controlled Input Pattern
* Derived State Pattern
* Event Handling
* State Management

## Possible Follow Ups

* Character limit (100/100).
* Remaining character counter.
* Word counter.
* Text preview.
* Auto-resizing textarea.
* Validation messages.
