```javascript
import React, { useState, useEffect, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const memoizedCount = useMemo(() => count, [count]);

  useEffect(() => {
    console.log('Effect running!');
  }, [memoizedCount]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```