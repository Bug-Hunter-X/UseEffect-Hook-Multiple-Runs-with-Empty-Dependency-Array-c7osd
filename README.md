# useEffect Hook Multiple Runs with Empty Dependency Array

This repository demonstrates an unexpected behavior in React 19 where useEffect runs multiple times even with an empty dependency array.  The issue occurs when the state updates from within the component leading to re-renders that trigger useEffect even though there are no dependencies to monitor. 

## Bug Description
The useEffect hook is intended to perform side effects after every render, but with an empty dependency array [], it should ideally run only once after the initial render. However, due to changes in React 19's rendering behavior, the effect runs multiple times when the component's state is modified, creating unexpected behavior.

## Solution
The solution focuses on restructuring the component logic to prevent unnecessary re-renders. The use of useMemo can optimize performance and ensure that the effect runs only when necessary.

## How to reproduce:
1. Clone this repository.
2. Run `npm install`
3. Run `npm start`
4. Observe the console logs in your browser's developer console. 
