# Accordion

## Problem Statement

Build an Accordion component where:

* Clicking the header expands the content.
* Clicking it again collapses the content.
* Display a visual indicator for open/closed state.

## Concepts Used

* React
* useState
* Event Handling
* Conditional Rendering
* Tailwind CSS

## First Approach

* Used conditional rendering for the entire component.
* Rendered separate JSX for open and closed states.
* Component worked correctly but resulted in duplicated header markup.

```
<div className="m-10 select-none">
  {open ? (
    <>
      <div className="flex gap-1 cursor-pointer" onClick={() => setOpen(false)}>
        <h1>Some heading</h1> <span className="text-center">^</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        tempore vero recusandae? Repellendus quia saepe, voluptatem magni
        perspiciatis soluta distinctio, tempora recusandae odio, impedit eum
        alias esse similique veritatis nesciunt?
      </p>
    </>
  ) : (
    <div className="flex gap-1 cursor-pointer" onClick={() => setOpen(true)}>
      <h1>Some heading</h1>
      <span className="text-center rotate-180 ">^</span>
    </div>
  )}
</div>
```

### Drawback

The accordion header was written twice, making the code harder to maintain and scale.

## Refactor

* Extracted the common header JSX.
* Created a dedicated toggle function.
* Used `&&` conditional rendering for the content.
* Removed duplicated code.

## Final Approach

- Single accordion header.
- Dedicated toggle function.
- Conditional rendering using `&&`.
- Reduced JSX duplication.

## Learnings

* Get the component working first.
* Look for repeated JSX after the solution works.
* A small refactor can significantly improve readability.
* Conditional rendering with `&&` can simplify React components.

## Review & Feedback (By ChatGPT)

| Area             | Rating |
| ---------------- | ------ |
| Logic            | 8/10   |
| React Basics     | 8/10   |
| State Management | 8/10   |
| Code Structure   | 6.5/10 |
| Reusability      | 5/10   |

## Overall

Successfully solved independently with in few minutes. (Not a big deal, I know, but it's okay to celebrate small wins.)

## Could Improve

* Make the component reusable using props.
* Support multiple accordion items.
* Add smooth open/close animations.
* Improve accessibility with keyboard support.

## Key Takeaway

* A working solution comes first.
* Optimization and refactoring come second.

## Pattern Learned

* State Management
* Toggle Pattern
* Conditional Rendering
* JSX Refactoring

## Possible Follow Ups

- Support multiple accordion items.
- Allow only one item open at a time.
- Allow multiple items open simultaneously.
- Add smooth open/close animations.
- Accept title and content through props.
- Build a FAQ accordion from dynamic data.
- Persist open state using localStorage.
- Support nested accordions.

## Previous Experience

I had previously implemented:
- Dynamic accordion data
- Props-based content
- Mapping multiple accordion items
- Single active item using activeIndex

For this machine coding exercise, I intentionally focused on building the simplest working version first.