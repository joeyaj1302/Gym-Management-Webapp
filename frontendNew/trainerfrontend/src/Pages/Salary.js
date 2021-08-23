import React from "react";
import { render } from "react-dom";

import { Col, Divider, Row, Table } from "antd";
import "antd/dist/antd.css";

const Payment = () => {
  return (
    <div className="payment">
    <div style={{ padding: 20 }}>
      <Row>
        <Col>
          <Divider>INVOICE</Divider>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col span={8}>
          <h3>Gym</h3>
          <div>#944/945, 4th Cross, 9th Main,</div>
          <div>Central Perk,</div>
          <div>NYC road,</div>
          <div>New York - 560076</div>
        </Col>
        <Col span={8} offset={8}>
          <table>
            <tr>
              <th>Invoice No :</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Invoice Date </th>
              <td>10-01-2018</td>
            </tr>
            <tr>
              <th>Due Date </th>
              <td>10-01-2018</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <div>
          Bill To: <strong>Chandler</strong>
        </div>
        <div>NYC Road,</div>
        <div>New York - 560076</div>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <Table
          dataSource={[
            {
              id: 1,
              name: "Accommodation (Single Occupancy)",
              description: "Accommodation",
              price: 1599,
              quantity: 1
            }
          ]}
          pagination={false}
        >
          <Table.Column title="Plans" dataIndex="name" />
          <Table.Column title="Description" dataIndex="description" />
          <Table.Column title="Quantity" dataIndex="quantity" />
          <Table.Column title="Price" dataIndex="price" />
          <Table.Column title="Line Total" />
        </Table>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <Col span={8} offset={16}>
          <table>
            <tr>
              <th>Gross Total :</th>
              <td>Rs. 1599</td>
            </tr>
            <tr>
              <th>GST @6% :</th>
              <td>Rs. 95.94</td>
            </tr>            
            <tr>
              <th>Nett Total :</th>
              <td>Rs. 1790.88</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48, textAlign: "center" }}>Pay</Row>

      <Row style={{ marginTop: 48, textAlign: "center" }}><strong>Hustle For Those Muscle</strong></Row>
    </div>
    </div>
  )

}

export default Payment;