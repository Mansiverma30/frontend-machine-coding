# Window Resize Tracker

## Problem Statement

Build a component that:

* Tracks the browser window dimensions.
* Updates width and height whenever the window is resized.
* Automatically reflects the latest dimensions on the screen.
* Properly cleans up event listeners when the component unmounts.


## Concepts Used

* React
* useState
* useEffect
* Browser APIs
* Event Listeners
* Cleanup Functions


## State Design

```js
const [size, setSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});
```

Stores the current window dimensions.

Example:

```txt
Width: 1920
Height: 1080
```

---

## Why Store Dimensions In State?

React only re-renders when state changes.

Whenever the browser window changes size:

```txt
Window Resize
↓
State Updates
↓
Component Re-renders
↓
Latest Size Displayed
```

## Browser APIs Used

### Current Width

```js
window.innerWidth
```

Returns the viewport width.

---

### Current Height

```js
window.innerHeight
```

Returns the viewport height.


## Event Listener

```js
window.addEventListener(
  "resize",
  updateSize
);
```

Listens for browser resize events.

Whenever the user resizes the window:

```txt
Resize Event
↓
updateSize()
↓
setSize(...)
```

runs.

---

## Updating State

```js
const updateSize = () => {
  setSize({
    width: window.innerWidth,
    height: window.innerHeight,
  });
};
```

Updates the dimensions whenever the resize event occurs.


## Cleanup Function

```js
return () => {
  window.removeEventListener(
    "resize",
    updateSize
  );
};
```

Removes the event listener when the component unmounts.


## Why Cleanup Is Important

Without cleanup:

```txt
Component Mounts
↓
Listener Added

Component Unmounts
↓
Listener Still Exists
```

This can cause:

```txt
Memory Leaks
Unnecessary Event Calls
Performance Issues
```

Cleanup ensures:

```txt
Component Unmounts
↓
Listener Removed
```


## useEffect Logic

```js
useEffect(() => {
  const updateSize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  window.addEventListener(
    "resize",
    updateSize
  );

  return () => {
    window.removeEventListener(
      "resize",
      updateSize
    );
  };
}, []);
```

## How It Works

```txt
Component Mounts
↓
Event Listener Added
↓
User Resizes Window
↓
Resize Event Fires
↓
updateSize()
↓
State Updates
↓
Component Re-renders
↓
Latest Width & Height Displayed
```

## React Patterns Learned

### useState

Stores window dimensions.

### useEffect

Sets up side effects.

### Event Listeners

Listens to browser events.

### Cleanup Functions

Removes listeners when the component unmounts.

### Browser APIs

Uses:

```js
window.innerWidth
window.innerHeight
```

## Development Journey

### Version 1

```txt
Display Width & Height
```

### Version 2

```txt
Track Resize Events
```

### Version 3

```txt
Update State On Resize
```

### Final Version

```txt
Live Window Dimensions
Event Listener
Cleanup Function
Responsive Updates
```

## Overall

This project reinforced:

```txt
useState
useEffect
Event Listeners
Cleanup Functions
Browser APIs
```

and introduced one of the most common real-world `useEffect` patterns:

```txt
Setup
↓
Listen
↓
Cleanup
```

## Possible Follow-Ups

- Show current device type (Mobile / Tablet / Desktop)
- Detect orientation changes
- Display viewport breakpoint
- Build a responsive helper tool
- Add resize count tracker
- Create a reusable useWindowSize hook
- Detect when width crosses specific breakpoints
- Build a responsive dashboard preview
