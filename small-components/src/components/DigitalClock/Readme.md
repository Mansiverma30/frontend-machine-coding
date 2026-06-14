# Digital Clock

## Problem Statement

Build a Digital Clock component that:

* Displays the current time.
* Updates automatically every second.
* Shows hours, minutes, and seconds in real time.

## Concepts Used

* React
* useState
* useEffect
* setInterval
* Cleanup Functions
* JavaScript Date Object

## Approach

Initially, I extracted hours, minutes, and seconds separately:

```js
const [hour, setHour] = useState(0);
const [min, setMin] = useState(0);
const [sec, setSec] = useState(0);
```

After experimenting, I realized all three values belong to a single concept:

```txt
Current Time
```

Instead of storing individual pieces of time, I stored the entire Date object.

```js
const [time, setTime] = useState(new Date());
```

## Updating the Clock

Used `useEffect` to create an interval that runs every second.

```js
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

Every second:

1. A new Date object is created.
2. State updates.
3. React re-renders.
4. The displayed time updates.

## Displaying Time

Used Date methods:

```js
time.getHours()
time.getMinutes()
time.getSeconds()
```

to render the current time.

```jsx
<div>
  {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
</div>
```

## How It Works

```txt
Component Mounts
↓
useEffect Runs Once
↓
Interval Starts
↓
Every Second:
  setTime(new Date())
↓
Component Re-renders
↓
Updated Time Appears
```

## Learnings

### JavaScript Date Object

Learned how to:

```js
new Date()
```

and extract:

```js
getHours()
getMinutes()
getSeconds()
```

from it.

### useEffect

Learned that:

```js
useEffect(() => {
  ...
}, []);
```

runs once when the component mounts.

### setInterval

Learned how to execute code repeatedly:

```js
setInterval(callback, 1000);
```

where:

```txt
1000 milliseconds = 1 second
```

### Cleanup Function

Learned that intervals should be cleared when the component unmounts.

```js
return () => {
  clearInterval(timer);
};
```

This prevents memory leaks and unnecessary intervals.

### State Design

A major realization during this component was:

Instead of storing:

```txt
Hour
Minute
Second
```

as separate states,

it is often better to store:

```txt
Current Time
```

as a single state and derive the values from it.

## Debugging Journey

### Attempt 1

Stored:

```txt
Hour
Minute
Second
```

as separate states.

### Attempt 2

Used a Date object but placed it outside the interval.

This caused stale values because the same Date instance was reused.

### Attempt 3

Created a fresh Date object inside the interval.

### Attempt 4

Used a single state:

```js
const [time, setTime] = useState(new Date());
```

which simplified the entire solution.

### Dependency Array Discovery

Experimented with:

```js
[time]
```

and observed the effect running repeatedly.

Eventually realized that:

```js
[]
```

is the correct dependency array because the interval only needs to be created once.

## Review & Feedback (By ChatGPT)

| Area                    | Rating |
| ----------------------- | ------ |
| Logic                   | 10/10  |
| Problem Solving         | 10/10  |
| React Fundamentals      | 9.5/10 |
| useEffect Understanding | 9/10   |
| Code Simplicity         | 10/10  |

## Overall

Successfully built a real-time Digital Clock using React state, useEffect, and JavaScript Date methods.

This component introduced:

```txt
useEffect
setInterval
Cleanup Functions
Dependency Arrays
```

and marked the first step beyond purely useState-based components.

## Could Improve

* Add AM/PM support.
* Display leading zeros (09:05:02).
* Show current date.
* Add 12-hour and 24-hour modes.
* Add a stopwatch.
* Add a countdown timer.
* Add multiple time zones.
* Add dark/light theme support.

## Key Takeaway

A state should represent the actual piece of information being tracked.

Instead of storing:

```txt
Hour
Minute
Second
```

separately,

store:

```txt
Current Time
```

and derive the values when rendering.

## Pattern Learned

* useState
* useEffect
* setInterval
* Cleanup Functions
* Dependency Arrays
* Derived State

## Bonus Learning

During this component, I learned:

```js
new Date()

getHours()
getMinutes()
getSeconds()

setInterval()

clearInterval()

useEffect(() => {}, [])
```

and understood how React can automatically update the UI over time without user interaction.

## Possible Follow Ups

* Display leading zeros (09:05:02).
* Add AM/PM support.
* Display the current date.
* Toggle between 12-hour and 24-hour formats.
* Build a stopwatch.
* Build a countdown timer.
* Display multiple time zones.
* Add dark/light mode.
* Add clock animations.
* Create an analog clock.