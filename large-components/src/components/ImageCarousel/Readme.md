# Image Carousel

## Problem Statement

Build an image carousel that:

* Displays one image at a time.
* Allows users to navigate using Previous and Next buttons.
* Cycles through a list of images.
* Wraps around when reaching the beginning or end.

## Concepts Used

* React
* useState
* Arrays
* Event Handling
* Conditional Logic
* Index Management

## State Design

### Current Image Index

```js id="5uj27v"
const [currentIndex, setCurrentIndex] =
  useState(0);
```

Stores which image is currently visible.

Example:

```txt id="g7dkp3"
0 → First Image
1 → Second Image
2 → Third Image
```

## Image Data

```js id="xdxwbv"
const images = [
  "url1",
  "url2",
  "url3",
];
```

Stores all image URLs.

The current image is displayed using:

```js id="m8qdfw"
images[currentIndex]
```

## Rendering Current Image

```jsx id="txhgvv"
<img
  src={images[currentIndex]}
  alt="carousel"
/>
```

As the index changes, the displayed image changes.

## Previous Button Logic

```js id="th7jlwm"
const prev = () => {
  setCurrentIndex((i) =>
    i > 0
      ? i - 1
      : images.length - 1
  );
};
```

### How It Works

Normal Case:

```txt id="6lfq4n"
2 → 1
1 → 0
```

Boundary Case:

```txt id="4gxk4p"
0
↓
Last Image
```

For 3 images:

```txt id="j22h2x"
0
↓
2
```

## Next Button Logic

```js id="tw2r4r"
const next = () => {
  setCurrentIndex((i) =>
    i >= images.length - 1
      ? 0
      : i + 1
  );
};
```

### How It Works

Normal Case:

```txt id="a2s9rw"
0 → 1
1 → 2
```

Boundary Case:

```txt id="ww4lwe"
Last Image
↓
First Image
```

For 3 images:

```txt id="mhxyv5"
2
↓
0
```

## Wrap Around Logic

The carousel continuously cycles through images.

Example:

```txt id="d1q0mr"
Image 1
↓ Next
Image 2
↓ Next
Image 3
↓ Next
Image 1
```

and

```txt id="xjtylg"
Image 1
↓ Prev
Image 3
```

This behavior is known as:

```txt id="spv04z"
Wrap Around Navigation
```

## Why Use an Index?

Instead of storing:

```js id="d2uw4w"
currentImage
```

we store:

```js id="dzx3t7"
currentIndex
```

because:

```txt id="wvq6qq"
Image already exists in array
↓
Index tells us which image to show
```

This makes navigation easier.


## How It Works

```txt id="kvk7lv"
User Clicks Next
↓
currentIndex Updates
↓
React Re-renders
↓
images[currentIndex]
↓
New Image Appears
```

## React Patterns Learned

### useState

Stores the current image position.

### Event Handling

```js id="3nlqj7"
onClick
```

for navigation buttons.

### Array Access

```js id="o6b56l"
images[currentIndex]
```

retrieves the current image.

### Conditional Logic

Used to handle edge cases when reaching the first or last image.

## Development Journey

### Version 1

```txt id="8adzyj"
Display Current Image
```

### Version 2

```txt id="jvrmd7"
Next Button
```

### Version 3

```txt id="xgswkr"
Previous Button
```

### Version 4

```txt id="ugjlwm"
Wrap Around Logic
```

### Final Version

```txt id="axf2p3"
Image Display
Next Navigation
Previous Navigation
Wrap Around Carousel
```

## Overall

This project reinforced:

```txt id="ynzw6s"
useState
Index Management
Conditional Logic
Array Access
Event Handling
```

and introduced a very common frontend interview pattern:

```txt id="r13jvp"
Current Index
↓
Boundary Check
↓
Update Index
↓
Render New Item
```


## Possible Follow-Ups


- Auto Play Carousel
- Pause / Resume
- Image Counter (1/4)
- Dots Indicator
- Click Dot To Navigate
- Keyboard Navigation
- Infinite Auto Loop
- Swipe Support
- Thumbnail Preview
- Transition Animations