# Password Toggle

## Problem Statement

Build a Password Toggle component where:

* Users can enter a password.
* Clicking the toggle button reveals the password.
* Clicking it again hides the password.
* The button text should reflect the current state.

## Concepts Used

* React
* useState
* Event Handling
* Conditional Rendering
* Dynamic Attributes
* Tailwind CSS

## First Approach

* Created a password input field.
* Added a button to toggle password visibility.
* Used state to track whether the password should be visible.

```jsx
const [showPassword, setShowPassword] = useState(false);

<input type="password" />
```

### Drawback

The password visibility changed correctly, but the button text remained static and did not indicate the current state.

## Refactor

* Made the input type dynamic using state.
* Updated the button text based on the visibility state.
* Used a single toggle function through the state updater pattern.

## Final Approach

* Single state variable controls password visibility.
* Input type changes dynamically between `"password"` and `"text"`.
* Button text updates between "Show" and "Hide".
* Used a toggle pattern for state management.

## Learnings

* HTML attributes can be controlled dynamically using React state.
* State can drive both behavior and UI text.
* Small components can still introduce important React concepts.
* The Toggle Pattern appears in many UI components.

## Review & Feedback (By ChatGPT)

| Area             | Rating |
| ---------------- | ------ |
| Logic            | 9/10   |
| React Basics     | 9/10   |
| State Management | 8.5/10 |
| Code Structure   | 8.5/10 |
| Reusability      | 5/10   |

## Overall

Successfully solved independently.

Initially focused on making the password visibility work. Later realized the button text should also reflect the current state and updated it accordingly.

## Could Improve

* Replace text with eye / eye-slash icons.
* Add accessibility labels.
* Accept placeholder text through props.
* Add password strength validation.
* Create a reusable input component.
* Support custom styling through props.

## Key Takeaway

* State can be used to control HTML attributes dynamically.
* A small UI component can teach an important React pattern.
* Focus on functionality first and improve the user experience afterward.

## Pattern Learned

* Toggle Pattern
* Dynamic Attribute Pattern
* State Management
* Event Handling
* Conditional UI

## Possible Follow Ups

* Add eye and eye-slash icons.
* Add password strength indicator.
* Show password only while holding the button.
* Add validation rules.
* Create a reusable password input component.
* Support custom labels and placeholders.
