import React from 'react';
import SalesTable from './Table';

const salesData = [
  { id: 1, name: 'Product A', date: '2023-05-01', count: 10, price: 5.99 },
  { id: 2, name: 'Product B', date: '2023-05-05', count: 5, price: 9.99 },
  { id: 3, name: 'Product C', date: '2023-05-10', count: 8, price: 3.99 },
  // Add more sales data here...
];

function App() {
  return (
    <div>
      <h1>Last Month's Sales</h1>
      <SalesTable salesData={salesData} />
    </div>
  );
}

export default App;
