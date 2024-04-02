import { Tabs } from 'antd';
import React from 'react'
import CommercialPDPContent from '../BestPractices/CommercialPDPContent';
import CommercialDigitalSelf from '../DigitalSelf/CommercialDigitalSelf';
import CommercialStockStatus from '../StockStatus/CommercialStockStatus';

const items = [
    {
      key: '1',
      label: 'Availability',
      children: <CommercialStockStatus/>,
    },
    {
      key: '2',
      label: 'Share of Site',
      children: <CommercialDigitalSelf/>,
    },
    {
      key: '3',
      label: 'PDP Content',
      children: <CommercialPDPContent/>,
    },
  ];

function Commercial() {
    
    

    return (
        <div style={{ margin: '2em' }}>
            <Tabs defaultActiveKey="1" items={items}></Tabs>
        </div>
    )
}

export default Commercial;
