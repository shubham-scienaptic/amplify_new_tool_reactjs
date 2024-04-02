import { Tabs } from 'antd';
import React from 'react';
import RetailStockStatus from '../StockStatus/RetailStockStatus';
import RetailDigitalSelf from '../DigitalSelf/RetailDigitalSelf';
import RetailPDPContent from '../BestPractices/RetailPDPContent';

const items = [
    {
      key: '1',
      label: 'Availability',
      children: <RetailStockStatus/>,
    },
    {
      key: '2',
      label: 'Share of Site',
      children: <RetailDigitalSelf/>,
    },
    {
      key: '3',
      label: 'PDP Content',
      children: <RetailPDPContent/>,
    },
  ];

function Retails() {
    return (
        <div style={{ margin: '2em' }}>
            <Tabs defaultActiveKey="1" items={items}></Tabs>
        </div>
    )
}

export default Retails;
