# Copy To Clipboard

## Problem Statement

Build a Copy To Clipboard component where:

* A user can click a button to copy text.
* The button should provide feedback after the copy action.
* Display a success message once the content has been copied.

## Concepts Used

* React
* useState
* Event Handling
* Browser Clipboard API
* Conditional Rendering

## Initial Thought Process

This was my first time working with the Clipboard API.

My first approach was:

```txt
Get the text
↓
Copy it
↓
Change button text
↓
Show success message
```

I also discovered that:

```js
navigator.clipboard.writeText()
```

returns a Promise, which led me to explore async/await and understand how the API works.

## Challenges Faced

### Challenge 1: DOM Element Returning Null

Initially I tried:

```js
const copyContent = document.getElementById("text");
```

outside the click handler.

The value was returning:

```txt
null
```

which was confusing because the element clearly existed in the UI.

After debugging and experimenting with console logs, I learned that the code was executing before the DOM element was available.

### Challenge 2: Understanding What Clipboard Expects

I initially attempted to copy the entire DOM element.

Later I discovered that the Clipboard API expects a string value, so I used:

```js
document.getElementById("text").innerText
```

instead.

This allowed me to copy the actual text content successfully.

## Final Approach

```jsx
const [copy, setCopy] = useState(false);

const copied = () => {
  navigator.clipboard.writeText(
    document.getElementById("text").innerText
  );

  setCopy(true);
};
```

The component:

* Copies the text.
* Changes the button label from `Copy` to `Copied`.
* Displays a success message after the action.

## Learnings

### Clipboard API

Learned how to use:

```js
navigator.clipboard.writeText()
```

to copy content to the user's clipboard.

### Debugging

While debugging, I learned that:

```txt
When code executes matters.
```

An element may exist visually on the screen but still be unavailable at the moment certain JavaScript code runs.

### State Management

Used state to track:

```txt
Has the content been copied?
```

and update the UI accordingly.

## Review & Feedback (By ChatGPT)

| Area              | Rating |
| ----------------- | ------ |
| Logic             | 9/10   |
| Problem Solving   | 10/10  |
| Debugging         | 10/10  |
| React Basics      | 9/10   |
| Browser API Usage | 9/10   |

## Overall

Successfully built a Copy To Clipboard component while learning a completely new browser API.

The most valuable part of this project was not the final code, but the debugging journey. Through experimentation, console logging, and observation, I gained a better understanding of DOM availability, browser APIs, and React rendering behavior.

## Could Improve

* Reset the button back to `Copy` after a few seconds.
* Add a toast notification after copying.
* Copy dynamic content instead of hardcoded text.
* Use React's `useRef` hook in a future version.
* Add a copy icon beside the button.

## Key Takeaway

Building components without immediately searching for the solution helped strengthen problem-solving skills.

Google provided hints, but the majority of the component structure, debugging process, and final corrections were done independently.

## Pattern Learned

* State Management
* Conditional Rendering
* Browser API Usage
* Event Handling
* Debugging Workflow

## Bonus Learning

During this component, I learned:

```txt
navigator.clipboard.writeText()

document.getElementById()

.innerText

Promise-based browser APIs
```

and discovered that understanding *when* code executes is just as important as understanding *what* code executes.

## Possible Follow Ups

* Reset "Copied" state after a few seconds.
* Show a toast notification after copying.
* Copy user-entered text from an input field.
* Copy code snippets like documentation websites.
* Disable the button temporarily after copying.
* Add a copy icon beside the button.
* Support copying multiple pieces of content.
* Refactor using useRef in a future version.