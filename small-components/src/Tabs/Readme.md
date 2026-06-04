# Tabs

## Problem Statement

Build a Tabs component where:

* Multiple tabs are displayed.
* Clicking a tab displays its corresponding content.
* Only one tab can be active at a time.
* The active tab should be visually highlighted.

## Concepts Used

* React
* useState
* Event Handling
* Conditional Rendering
* Conditional Styling
* Array Mapping
* Tailwind CSS

## First Approach

* Created an array containing tab data.
* Stored the active tab using state.
* Rendered tabs dynamically using `map()`.
* Displayed content only for the selected tab.

```jsx
const [activeTab, setActiveTab] = useState(1);

const tabContent = [
  {
    id: 1,
    title: "About",
    content: "I'm Virat's fan",
  },
  {
    id: 2,
    title: "Skills",
    content: "I've many",
  },
  {
    id: 3,
    title: "Profession",
    content: "Unemployed!!",
  },
];
```

### Design Choice

The content is displayed directly below the active tab instead of in a separate content container.

This keeps the relationship between the selected tab and its content visually connected.

## Refactor

* Used dynamic rendering through `map()`.
* Added conditional styling for active and inactive tabs.
* Managed active state using the Active Index Pattern.
* Simplified content rendering using conditional rendering.

## Final Approach

* Single active tab state.
* Dynamic tab generation from data.
* Conditional styling for active tab indication.
* Content displayed only for the selected tab.

## Learnings

* Tabs are an implementation of the Active Index Pattern.
* Mapping data makes components easier to scale.
* State can be used to determine both UI appearance and displayed content.
* Conditional styling improves user experience.

## Review & Feedback (By ChatGPT)

| Area             | Rating |
| ---------------- | ------ |
| Logic            | 8.5/10 |
| React Basics     | 8.5/10 |
| State Management | 8.5/10 |
| Code Structure   | 8/10   |
| Reusability      | 6.5/10 |

## Overall

Successfully solved independently.

Initially, I wasn't even sure what a Tabs component was. After understanding the concept, the implementation felt surprisingly simple. 😭

## Could Improve

* Render tab content in a dedicated content section.
* Accept tab data through props.
* Add keyboard navigation support.
* Add smooth transitions while switching tabs.
* Support icons inside tabs.
* Create a reusable Tabs component.

## Key Takeaway

* Understand the pattern before writing code.
* Active Index Pattern can solve many UI problems.
* Dynamic rendering using arrays is often better than hardcoding UI.

## Pattern Learned

* Active Index Pattern
* State Management
* Array Mapping
* Conditional Rendering
* Conditional Styling

## Possible Follow Ups

* Accept tab data through props.
* Add keyboard navigation.
* Support dynamic tabs fetched from an API.
* Add tab close functionality.
* Add animated tab transitions.
* Build vertical tabs instead of horizontal tabs.
