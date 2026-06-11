# Toast

## Problem Statement

Build a Toast component where:

* Clicking a button displays a toast message.
* The toast automatically disappears after a few seconds.
* Only display the toast when required.

## Concepts Used

* React
* useState
* Event Handling
* Conditional Rendering
* setTimeout
* Tailwind CSS

## First Approach

* Created a state variable to track whether the toast should be visible.
* Added a button to trigger the toast.
* Used conditional rendering to display the toast message.

```jsx
const [show, setShow] = useState(false);

<button onClick={() => setShow(true)}>
  Show Message
</button>

{
  show && (
    <p>
      Toast Message
    </p>
  );
}
```

### Drawback

The toast appeared successfully but never disappeared automatically.

## Refactor

* Created a dedicated handler function.
* Used `setTimeout()` to automatically hide the toast after 2 seconds.
* Kept the component simple and focused on the core functionality.

## Final Approach

* Button click shows the toast.
* Toast visibility is controlled using state.
* Toast automatically disappears after 2 seconds.
* Used conditional rendering to show and hide the toast.

## Learnings

* `setTimeout()` can be used to schedule future state updates.
* State changes can be triggered both by user actions and timers.
* Conditional rendering is useful for temporary UI elements.
* Breaking logic into functions improves readability.

## Review & Feedback (By ChatGPT)

| Area             | Rating |
| ---------------- | ------ |
| Logic            | 8.5/10 |
| React Basics     | 8.5/10 |
| State Management | 8.5/10 |
| Timers           | 8.5/10 |
| Code Structure   | 8/10   |
| Reusability      | 5/10   |

## Overall

Successfully solved independently.

Started by focusing only on displaying the toast message. After that, implemented automatic hiding using `setTimeout()`.

## Could Improve

* Add a manual close button.
* Support different toast types (Success, Error, Warning).
* Accept custom messages through props.
* Support multiple toast notifications.
* Add entry and exit animations.
* Create a reusable Toast component.

## Key Takeaway

* Solve the simplest version first.
* Timers can be used to automate UI behavior.
* Temporary UI components are often controlled using state and conditional rendering.

## Pattern Learned

* State Management
* Conditional Rendering
* Auto Dismiss Pattern
* Timer Pattern
* Event Handling

## Possible Follow Ups

* Add a close button.
* Allow custom display duration.
* Support multiple simultaneous toasts.
* Add animations.
* Add toast queue management.
* Create a reusable toast system using props.
