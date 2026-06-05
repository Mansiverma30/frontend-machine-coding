# Star Rating

## Problem Statement

Build a Star Rating component where:

* Users can select a rating by clicking on a star.
* Selecting a star fills all stars before it.
* Display the selected rating.
* Support ratings from 1 to 5.

## Concepts Used

* React
* useState
* Event Handling
* Conditional Styling
* Array Mapping
* Tailwind CSS

## First Approach

* Created 5 circles using `Array.from()`.
* Stored the selected index in state.
* Highlighted only the clicked circle.

```jsx
const [fill, setFill] = useState(0);

className={`${
  fill === index
    ? "bg-amber-300"
    : "bg-transparent"
}`}
```

### Drawback

Only the clicked circle was highlighted.

Example:

```txt
○ ○ ● ○ ○
```

However, a rating system should fill all previous stars as well.

Expected:

```txt
● ● ● ○ ○
```

## Refactor

* Changed the condition from `fill === index` to `fill >= index`.
* Updated the initial state to `-1`.
* Added rating display using `fill + 1`.

## Final Approach

* Store the selected index in state.
* Fill all circles up to the selected index.
* Display the selected rating.
* Support ratings from 0 to 5.

## Learnings

* A single state value can control multiple UI elements.
* Conditional styling can be used to create visual feedback.
* Sometimes storing an index is simpler than storing the actual value.
* Building the logic first makes UI implementation easier later.

## Review & Feedback (By ChatGPT)

| Area                | Rating |
| ------------------- | ------ |
| Logic               | 8.5/10 |
| React Basics        | 8.5/10 |
| State Management    | 8.5/10 |
| Conditional Styling | 9/10   |
| Code Structure      | 8/10   |
| Reusability         | 5.5/10 |

## Overall

Successfully solved independently.

Started with simple circles instead of stars to focus on the logic first. Once the logic worked, the UI could be improved later.

## Could Improve

* Replace circles with actual star icons.
* Add hover effects.
* Allow deselecting the current rating.
* Accept custom star count through props.
* Support read-only mode.
* Add half-star ratings.
* Create a reusable Star Rating component.

## Key Takeaway

* Focus on making the logic work before improving the UI.
* One state variable can drive an entire interactive component.
* Complex-looking components are often built from simple conditions.

## Pattern Learned

* State Management
* Range Selection Pattern
* Conditional Styling
* Event Handling
* Array Mapping

## Possible Follow Ups

* Add hover preview before selecting a rating.
* Allow deselecting a selected rating.
* Support half-star ratings.
* Accept custom number of stars.
* Support read-only mode.
* Fetch and display rating from an API.
* Create a reusable component using props.
