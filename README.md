# Static Product List (React)

## Overview

This project is a simple React app that displays a static list of products.

The goal was to practice rendering a list using map() and working with components in React.

## What the app does

- Shows a list of products with images, name, description, and price
- Uses a ProductList component
- Renders data from an array
- Displays product images for each item
- Hover effect on product cards with a subtle blue shadow
- Handles empty data (edge case)

## Test cases

I included both normal and edge test cases in the code.

Normal cases:

- Display a list of products
- Show different product data

Edge cases:

- Empty list (shows message)
- Product with price 0
- Product with long text

You can switch between them in ProductList.jsx by changing the products variable.

## Project Structure

```
product-list/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/            # Product images
│   ├── App.css            # Styles for the App component
│   ├── App.jsx            # Main App component
│   ├── ProductList.jsx    # Product list component with test data
│   ├── index.css          # Global base styles
│   └── main.jsx           # App entry point
├── .gitignore
├── eslint.config.js
├── index.html             # HTML shell
├── package.json
└── vite.config.js
```

## How to run

1. Clone the repo

```
git clone https://github.com/koki-star/product-list.git
```

2. Go into the folder

```
cd product-list
```

3. Install dependencies

```
npm install
```

4. Start the app

```
npm run dev
```

## Notes

This project does not use state or interactivity. It focuses only on rendering a static list as required by the assignment.

