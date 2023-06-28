import React from 'react';

function SalesTable({ salesData }) {
  const totalAmount = salesData.reduce((total, sale) => total + sale.count * sale.price, 0);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Count</th>
          <th>Price</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map(sale => (
          <tr key={sale.id}>
            <td>{sale.id}</td>
            <td>{sale.name}</td>
            <td>{sale.date}</td>
            <td>{sale.count}</td>
            <td>{sale.price}</td>
            <td>{sale.count * sale.price}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{totalAmount}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SalesTable;
