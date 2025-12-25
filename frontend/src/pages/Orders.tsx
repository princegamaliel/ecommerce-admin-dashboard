const Orders = () => {
  return (
    <div>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1001</td>
            <td>Completed</td>
            <td>£120</td>
          </tr>
          <tr>
            <td>#1002</td>
            <td>Pending</td>
            <td>£75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
