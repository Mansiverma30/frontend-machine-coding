# Search Filter

## Problem Statement

Build a Search Filter component where:

* A user can type inside an input field.
* The list updates in real-time based on the search query.
* Only matching items should be displayed.

## Concepts Used

* React
* useState
* Controlled Inputs
* Array.filter()
* Array.map()
* String.includes()

## Approach

Created a list of frontend-related technologies:

```js
const list = [
  "React",
  "Tailwind Css",
  "Javascript",
  "Html",
  "Css",
  "Typescript",
];
```

Used state to store the user's search input:

```js
const [text, setText] = useState("");
```

As the user types, the state updates:

```js
onChange={(e) => setText(e.target.value)}
```

The list is filtered before rendering:

```js
list.filter((item) =>
  item.toLowerCase().includes(text.toLowerCase())
);
```

Finally, the filtered items are displayed using:

```js
.map(...)
```

## How It Works

```txt
User Types
↓
State Updates
↓
List Gets Filtered
↓
Matching Results Display
```

## Example

Input:

```txt
re
```

Output:

```txt
React
```

Input:

```txt
css
```

Output:

```txt
Tailwind Css
Css
```

## Learnings

### Array.filter()

Learned how to use:

```js
array.filter()
```

to create a new array containing only the items that match a condition.

### Array.map()

Used:

```js
array.map()
```

to render the filtered results.

### Case-Insensitive Search

Initially used:

```js
item.includes(text)
```

which was case-sensitive.

Improved it using:

```js
item.toLowerCase().includes(text.toLowerCase())
```

so searches work regardless of capitalization.

### Controlled Inputs

Reinforced the concept of controlled inputs using:

```js
value={text}
```

and

```js
onChange(...)
```

## Review & Feedback (By ChatGPT)

| Area           | Rating |
| -------------- | ------ |
| Logic          | 9/10   |
| React Basics   | 9/10   |
| Input Handling | 9/10   |
| Array Methods  | 9/10   |
| Simplicity     | 10/10  |

## Overall

Successfully built a real-time search filter using React state and array methods.

This component introduced `Array.filter()` and demonstrated how multiple array methods can be chained together to create dynamic UI behavior.

## Could Improve

* Show a "No Results Found" message.
* Highlight matching text.
* Add a search icon.
* Sort results alphabetically.
* Fetch search results from an API.
* Add search suggestions/autocomplete.

## Key Takeaway

Filtering data before rendering is a common frontend pattern.

A simple combination of:

```txt
useState
+
filter()
+
map()
```

can create powerful interactive search experiences.

## Pattern Learned

* Controlled Inputs
* State Management
* Array Filtering
* Dynamic Rendering
* Method Chaining

## Bonus Learning

During this component, I learned:

```js
array.filter()

string.includes()

string.toLowerCase()
```

and discovered how real-time search functionality can be built with only a few lines of code.

## Possible Follow Ups

* Show a "No Results Found" message.
* Display the number of matching results.
* Add a search icon inside the input.
* Highlight matching text in results.
* Add category-based filtering.
* Implement search suggestions/autocomplete.
* Fetch data from an API instead of a static array.
* Add debouncing using useEffect.
* Combine search with sorting options.
* Support searching across multiple fields.