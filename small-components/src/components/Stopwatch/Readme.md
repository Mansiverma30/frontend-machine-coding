# Stopwatch

## Problem Statement

Build a Stopwatch component that:

* Starts counting when the user clicks Start.
* Stops counting when the user clicks Pause.
* Resets back to zero when the user clicks Reset.
* Updates automatically every second.

## Concepts Used

* React
* useState
* useEffect
* setInterval
* clearInterval
* Conditional Rendering
* Functional State Updates

## Approach

Created two pieces of state:

```js
const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
```

### time

Stores the elapsed time in seconds.

### isRunning

Tracks whether the stopwatch is currently running.

```txt
true  → Running
false → Paused
```

## Timer Logic

Used useEffect to start an interval when the stopwatch is running.

```js
useEffect(() => {
  if (isRunning) {
    const timer = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }
}, [isRunning]);
```

## Why Functional Updates?

Initially:

```js
setTime(time + 1);
```

This required:

```js
[time, isRunning]
```

in the dependency array.

A better approach is:

```js
setTime((t) => t + 1);
```

because React provides the latest state value automatically.

This removes the need to depend on:

```js
time
```

inside the effect.

## Start / Pause Logic

Used a single button that changes behavior depending on the current state.

```js
onClick={() => setIsRunning((prev) => !prev)}
```

When:

```txt
isRunning = false
```

the button shows:

```txt
Start
```

When:

```txt
isRunning = true
```

the button shows:

```txt
Pause
```

## Reset Logic

Reset performs two actions:

```js
setIsRunning(false);
setTime(0);
```

This:

```txt
Stops the Stopwatch
+
Resets Time
```

at the same time.

## How It Works

```txt
Click Start
↓
isRunning = true
↓
Interval Starts
↓
Every Second:
  setTime(t => t + 1)
↓
Component Re-renders
↓
Updated Time Appears

Click Pause
↓
isRunning = false
↓
Interval Removed

Click Reset
↓
Time = 0
↓
Stopwatch Resets
```

## UX Improvement

Added singular/plural handling:

```jsx
time <= 1
  ? `${time} second`
  : `${time} seconds`
```

Examples:

```txt
0 seconds
1 second
2 seconds
3 seconds
```

This makes the display more natural.

## Learnings

### useEffect

Learned how to:

```js
useEffect(() => {
  ...
}, [isRunning]);
```

and run logic only when required.

### setInterval

Used:

```js
setInterval()
```

to repeatedly update state every second.

### Cleanup Functions

Used:

```js
clearInterval()
```

to remove the interval when the stopwatch is paused or the component unmounts.

### Functional State Updates

Learned:

```js
setTime((t) => t + 1);
```

instead of:

```js
setTime(time + 1);
```

This avoids stale state issues and unnecessary dependencies.

### Dependency Arrays

Learned that effects should only depend on values actually used inside them.

## Debugging Journey

### Attempt 1

Started the interval immediately when the component mounted.

Problem:

```txt
Stopwatch started automatically.
```

### Attempt 2

Added:

```js
isRunning
```

state to control when the stopwatch should run.

### Attempt 3

Used:

```js
setTime(time + 1);
```

which required:

```js
[time, isRunning]
```

in the dependency array.

### Final Version

Used:

```js
setTime((t) => t + 1);
```

and simplified dependencies to:

```js
[isRunning]
```

## Review & Feedback (By ChatGPT)

| Area                    | Rating |
| ----------------------- | ------ |
| Logic                   | 10/10  |
| State Design            | 10/10  |
| useEffect Understanding | 10/10  |
| Dependency Management   | 9.5/10 |
| Code Simplicity         | 10/10  |

## Overall

Successfully built a Stopwatch using:

```txt
useState
+
useEffect
+
setInterval
```

This component strengthened understanding of:

```txt
Effect Dependencies
Functional State Updates
Cleanup Functions
Timer-Based State Changes
```

and served as a practical follow-up to the Digital Clock component.

## Could Improve

* Display minutes and seconds.
* Display hours, minutes, and seconds.
* Add lap functionality.
* Add milliseconds.
* Add keyboard shortcuts.
* Add sound when starting or stopping.
* Add theme customization.
* Persist stopwatch state using localStorage.

## Key Takeaway

A state should store the minimum information required.

For a stopwatch:

```txt
Elapsed Seconds
+
Running Status
```

are enough to derive the entire UI.

## Pattern Learned

* useState
* useEffect
* setInterval
* clearInterval
* Functional State Updates
* Dependency Arrays
* Conditional Effects

## Bonus Learning

During this component, I learned:

```js
setTime((prev) => prev + 1);
```

and understood why functional updates can simplify effect dependencies and make timer-based logic cleaner.

## Possible Follow Ups

* Display minutes and seconds.
* Display hours, minutes, and seconds.
* Add leading zeros.
* Add lap functionality.
* Add milliseconds.
* Add keyboard shortcuts.
* Disable reset when time is zero.
* Save best recorded time.
* Persist stopwatch state using localStorage.
* Add dark/light mode.