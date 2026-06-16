# Todo List

## Problem Statement

Build a Todo List application that allows users to:

* Add a new task.
* Delete an existing task.
* Mark a task as completed.
* Toggle completed tasks back to incomplete.

## Concepts Used

* React
* useState
* Array State
* Object State
* map()
* filter()
* Conditional Styling
* Event Handling

---

## State Design

### Todos State

```js
const [todos, setTodos] = useState([]);
```

Stores all tasks.

Each task is represented as an object:

```js
{
  text: "Learn React",
  completed: false
}
```

### Input State

```js
const [text, setText] = useState("");
```

Stores the current input value.

---

## Why Two States?

Input text and todo items are different pieces of information.

```txt
Current Input
≠
Todo List
```

Therefore they should have separate state variables.

---

## Add Todo Logic

```js
const addTodo = () => {
  if (!text.trim()) return;

  setTodos([
    ...todos,
    {
      text,
      completed: false,
    },
  ]);

  setText("");
};
```

### How It Works

```txt
User Types Task
↓
Click Add
↓
New Todo Object Created
↓
Added To Array
↓
Input Cleared
```

---

## Input Validation

```js
if (!text.trim()) return;
```

Prevents adding:

```txt
""
" "
"     "
```

as valid tasks.

---

## Rendering Todos

```js
todos.map((t, i) => ...)
```

Used map() to render every todo item dynamically.

Example:

```js
[
  {
    text: "Learn React",
    completed: false,
  },
];
```

renders:

```txt
Learn React
```

---

## Delete Todo Logic

```js
const deleteTodo = (i) => {
  const newTodo = todos.filter((todo, index) => {
    return index !== i;
  });

  setTodos(newTodo);
};
```

### How It Works

```txt
Clicked Index
↓
Filter Through Todos
↓
Keep Everything Except Clicked Item
↓
Update State
```

### Example

Before:

```txt
Learn React
Learn useEffect
Build Todo
```

Delete Index 1:

```txt
Learn React
Build Todo
```

---

## Complete Todo Logic

```js
const completeTodo = (i) => {
  setTodos(
    todos.map((todo, index) =>
      index === i
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};
```

### Why map()?

Delete removes items:

```txt
filter()
```

Complete modifies items:

```txt
map()
```

### How It Works

```txt
Loop Through Todos
↓
Found Clicked Todo?
↓
Toggle completed Value
↓
Return Updated Object
```

---

## Conditional Styling

```js
className={`${t.completed ? "line-through" : ""}`}
```

### Example

Incomplete:

```txt
Learn React
```

Completed:

```txt
~~Learn React~~
```

Provides immediate visual feedback.

---

## Important Learning

### Arrays of Strings

Initially:

```js
[
  "Learn React",
  "Learn useEffect"
]
```

This worked for:

```txt
Display
Delete
```

but not:

```txt
Complete
```

because there was no place to store:

```txt
completed: true/false
```

---

### Arrays of Objects

Updated structure:

```js
[
  {
    text: "Learn React",
    completed: false
  }
]
```

This allowed each task to store multiple properties.

---

## React Patterns Learned

### Adding To Array

```js
setTodos([...todos, newTodo]);
```

### Removing From Array

```js
filter()
```

### Updating One Item

```js
map()
```

### Updating Objects

```js
{
  ...todo,
  completed: !todo.completed
}
```

### Conditional Rendering / Styling

```js
condition ? value1 : value2
```

---

## Development Journey

### Version 1

```txt
Input
Add Button
Render Todos
```

### Version 2

```txt
Delete Functionality
```

### Version 3

```txt
Converted Strings To Objects
```

### Version 4

```txt
Complete Toggle
```

### Final Version

```txt
Add
Delete
Toggle Complete
Input Validation
```

---

## Review & Feedback (By ChatGPT)

| Area               | Rating |
| ------------------ | ------ |
| State Design       | 10/10  |
| Array Manipulation | 10/10  |
| React Patterns     | 10/10  |
| Code Readability   | 10/10  |
| Problem Solving    | 10/10  |

---

## Overall

This was the first large component that combined:

```txt
Input Handling
Array State
Object State
Add Operations
Delete Operations
Update Operations
Conditional Styling
```

and required thinking about data structure design rather than only UI interactions.

---

## Key Takeaway

Choose state based on the information the application needs to store.

For a Todo List:

```txt
Task Text
+
Completion Status
```

must both exist in state.

The correct data structure became:

```js
{
  text: "",
  completed: false
}
```

which made all features possible.

## Possible Follow-Ups

- Add Enter key support to create tasks.
- Display total task count.
- Display completed task count.
- Display remaining task count.
- Add an empty state message when no tasks exist.
- Edit an existing todo.
- Clear all completed tasks.
- Clear all tasks.
- Add confirmation before deleting a task.
- Filter todos by:
  - All
  - Active
  - Completed
- Search todos.
- Persist todos using localStorage.
- Add due dates.
- Add categories/tags.
- Support drag-and-drop reordering.
- Add dark/light mode.