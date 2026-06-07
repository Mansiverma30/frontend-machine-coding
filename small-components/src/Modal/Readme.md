# Modal

## Problem Statement

Build a Modal component where:

* Clicking a button opens a modal.
* The modal appears above the existing content.
* Clicking the close button hides the modal.
* Only display the modal when required.

## Concepts Used

* React
* useState
* Event Handling
* Conditional Rendering
* Tailwind CSS

## First Approach

* Created a state variable to track whether the modal is open.
* Added a button to open the modal.
* Used conditional rendering to display the modal.
* Added a close button inside the modal.

```jsx
const [open, setOpen] = useState(false);

const toggleModal = () => {
  setOpen((prev) => !prev);
};
```

### Drawback

The initial version focused only on opening and closing the modal.

It did not include features commonly found in production modals such as overlays, animations, or click-outside handling.

## Refactor

* Created a dedicated toggle function.
* Reused the same function for both opening and closing the modal.
* Displayed the modal only when needed using conditional rendering.
* Kept the implementation simple and focused on core functionality.

## Final Approach

* Single state variable controls modal visibility.
* Dedicated toggle function manages open and close actions.
* Modal is conditionally rendered.
* Close button hides the modal.

## Learnings

* Modals are another implementation of the Toggle Pattern.
* Conditional rendering is useful for controlling component visibility.
* A single state variable can drive an entire UI interaction.
* Solving the core functionality first prevents overengineering.

## Review & Feedback (By ChatGPT)

| Area                  | Rating |
| --------------------- | ------ |
| Logic                 | 8.5/10 |
| React Basics          | 8.5/10 |
| State Management      | 8.5/10 |
| Conditional Rendering | 9/10   |
| Code Structure        | 8/10   |
| Reusability           | 5/10   |

## Overall

Successfully solved independently.

Initially thought about adding a dark overlay behind the modal, but intentionally skipped it to focus on the core functionality first and keep the machine coding streak moving.

## Could Improve

* Add dark background overlay.
* Close modal when clicking outside.
* Add open and close animations.
* Support keyboard navigation (Escape key).
* Accept content through props.
* Create a reusable modal component.
* Use React Portal for rendering outside the root element.

## Key Takeaway

* Build the simplest working version first.
* Additional features can always be added later.
* Focus on functionality before polish.

## Pattern Learned

* Toggle Pattern
* Visibility Pattern
* State Management
* Conditional Rendering
* Event Handling

## Possible Follow Ups

* Click outside to close the modal.
* Add a background overlay.
* Add animations.
* Support multiple modal types.
* Build a reusable modal component.
* Render modal using React Portal.
* Support keyboard shortcuts.
