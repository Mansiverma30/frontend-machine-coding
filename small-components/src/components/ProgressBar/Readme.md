# Progress Bar

## Problem Statement

Build a Progress Bar component where:

* Clicking the "+" button increases the progress.
* Clicking the "-" button decreases the progress.
* Clicking the "Reset" button resets the progress to 0%.
* Display the current progress percentage.
* Visually represent the progress using a progress bar.
* Prevent the progress from going below 0% or above 100%.

## Concepts Used

* React
* useState
* Event Handling
* Conditional Rendering
* Inline Styling
* Tailwind CSS

## First Approach

* Created a state variable to store the progress value.
* Added buttons to increase, decrease, and reset the progress.
* Displayed the progress percentage on the screen.
* Added a progress bar but initially forgot to make its width dynamic.

```jsx
const [progress, setProgress] = useState(0);

const increase = () => {
  setProgress((prev) => prev + 25);
};

const decrease = () => {
  setProgress((prev) => prev - 25);
};

const reset = () => {
  setProgress(0);
};
```

### Drawback

The progress bar width was not connected to the state value, so the visual representation didn't update with the progress percentage.

## Refactor

* Connected the progress bar width to the progress state.
* Used template literals to dynamically update the width.
* Added button disabling for edge cases.
* Improved state updates using the updater function pattern.

## Final Approach

* Single source of truth using the `progress` state.
* Dynamic progress bar width using inline styles.
* Disabled increase button at 100%.
* Disabled decrease button at 0%.
* Added reset functionality.

## Learnings

* CSS values often require units such as `%`.
* React inline styles can be controlled dynamically using state.
* Edge cases should be handled at the UI level.
* The updater function pattern is safer for state updates.

## Review & Feedback (By ChatGPT)

| Area             | Rating |
| ---------------- | ------ |
| Logic            | 8.5/10 |
| React Basics     | 8.5/10 |
| State Management | 8.5/10 |
| Edge Cases       | 8/10   |
| Code Structure   | 7/10   |
| Reusability      | 5/10   |

## Overall

Successfully solved independently.

Also managed to continue the machine coding streak despite being on my periods and dealing with pain. Small win, but still a win. 😭💜

## Could Improve

* Allow custom increment/decrement values through props.
* Add smooth transition animations.
* Display progress text inside the bar.
* Make the component reusable.
* Support custom colors and sizes.

## Key Takeaway

* Get the logic working first.
* Handle edge cases early.
* Connect UI directly to state.
* Small improvements can significantly improve user experience.

## Pattern Learned

* State Management
* Counter Pattern
* Dynamic Styling
* Edge Case Handling
* UI Driven by State

## Possible Follow Ups

- Add smooth animations.
- Display percentage inside the bar.
- Change color based on progress.
- Accept custom step values.
- Accept initial value as prop.
- Simulate upload progress.
- Add pause/resume functionality.