# Countdown Timer

## Problem Statement

Build a Countdown Timer component that:

* Starts from a predefined time value.
* Counts down every second.
* Allows the user to start and pause the timer.
* Automatically stops when the timer reaches zero.
* Prevents negative values.

---

## Concepts Used

* React
* useState
* useEffect
* setInterval
* clearInterval
* Functional State Updates
* Conditional Rendering

---

## State Design

### Time State

```js
const [time, setTime] = useState(60);
```

Stores the remaining time in seconds.

Example:

```txt
60
59
58
...
0
```

---

### Running State

```js
const [isRunning, setIsRunning] = useState(false);
```

Controls whether the countdown is active.

```txt
true  → Timer Running
false → Timer Paused
```

---

## Timer Logic

Used useEffect to create an interval only when the timer is running.

```js
useEffect(() => {
  if (isRunning) {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : t));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }
}, [isRunning]);
```

---

## Functional State Update

Used:

```js
setTime((t) => ...)
```

instead of:

```js
setTime(time - 1);
```

### Why?

Functional updates always receive the latest state value.

This avoids stale state issues and removes the need to include:

```js
time
```

inside the dependency array.

---

## Preventing Negative Values

Logic:

```js
t > 0 ? t - 1 : t
```

### Example

```txt
3
2
1
0
0
0
```

instead of:

```txt
3
2
1
0
-1
-2
-3
```

---

## Start / Pause Logic

Used a single button:

```js
onClick={() => setIsRunning((prev) => !prev)}
```

Button text changes dynamically:

```txt
Start
```

when paused and:

```txt
Pause
```

when running.

---

## Auto Stop At Zero

Added logic to stop the timer when it reaches zero.

Goal:

```txt
3
2
1
0
↓
Stop Countdown
↓
Button Changes To Start
```

This prevents the timer from continuing unnecessarily after reaching zero.

---

## Display Logic

Used conditional rendering for singular/plural text.

```jsx
time <= 1
  ? `${time} second`
  : `${time} seconds`
```

### Example

```txt
0 seconds
1 second
2 seconds
3 seconds
```

---

## How It Works

```txt
Click Start
↓
isRunning = true
↓
Interval Created
↓
Every Second:
  setTime(t => t - 1)
↓
Component Re-renders
↓
Updated Time Appears

When Time Reaches 0
↓
Countdown Stops

Click Pause
↓
Interval Removed
```

---

## React Patterns Learned

### useEffect

Used to create and clean up intervals.

### setInterval

Runs logic repeatedly every second.

### clearInterval

Prevents memory leaks and duplicate intervals.

### Functional Updates

```js
setTime((t) => ...)
```

### Toggle State

```js
setIsRunning((prev) => !prev)
```

---

## Development Journey

### Version 1

```txt
Display Time
Start Button
```

### Version 2

```txt
Countdown Logic
```

### Version 3

```txt
Pause Functionality
```

### Version 4

```txt
Prevent Negative Values
```

### Final Version

```txt
Countdown
Start/Pause
Auto Stop
Second/Seconds Display
```

---

## Review & Feedback (By ChatGPT)

| Area                    | Rating |
| ----------------------- | ------ |
| Logic                   | 10/10  |
| State Design            | 10/10  |
| useEffect Understanding | 10/10  |
| Functional Updates      | 10/10  |
| Cleanup Handling        | 10/10  |

---

## Overall

Successfully built a Countdown Timer using:

```txt
useState
+
useEffect
+
setInterval
```

This component reinforced understanding of:

```txt
Timer-Based State
Functional State Updates
Effect Dependencies
Interval Cleanup
Conditional UI Updates
```

and served as a natural progression from the Digital Clock and Stopwatch components.

---

## Key Takeaway

A Countdown Timer is very similar to a Stopwatch.

The main difference is:

```txt
Stopwatch
0 → 1 → 2 → 3

Countdown
3 → 2 → 1 → 0
```

Both rely on the same React timer patterns but apply them in opposite directions.

## Possible Follow-ups
- Reset button.
- Custom input for countdown duration.
- MM:SS format (01:30).
- HH:MM:SS format.
- Disable Start when time is 0.
- Play a sound when countdown finishes.
- Progress bar showing remaining time.
- Circular countdown animation.
- Preset buttons (30s, 1m, 5m).
- Persist timer state using localStorage.
- Pomodoro Timer mode.