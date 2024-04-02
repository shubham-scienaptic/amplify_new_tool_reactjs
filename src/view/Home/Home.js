import { Layout, Table, Collapse, Tag, Flex, message, Card, Avatar, Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

const { Content, Footer } = Layout;
const { Panel } = Collapse;
const { Meta } = Card;

const cardStyle = {
    width: 620,
};
const imgStyle = {
    display: 'block',
    width: 273,
};

function Home() {
    let navigate = useNavigate();
    const routeChange1 = () => {
        console.log('Commercial')
        let path = `commercial`;
        navigate(path);
    }
    const routeChange2 = () => {
        let path = `retail`;
        navigate(path);
    }
    return (
        <Layout>
            <Content
                style={{
                    padding: '24px 62px'
                }}
            >
                <h1 style={{ color: "#0095d9" }}>Hi, Shubham Vishwakarma</h1>
                <Flex justify='center' align='center' style={{ margin: '8em' }}>
                    <Card
                        hoverable
                        style={{
                            padding: '2em',
                            width: 500,
                            margin: '1em'
                        }}
                    >

                        <h3 style={{ color: '#0095d9', textAlign: 'center', fontSize: '2em' }}>COMMERCIAL</h3>
                        <p>Commercial is the sale of goods and/or services through advertisement on television or any broadcasting channel.</p>
                        <span style={{ float: 'inline-end', color: '#0095d9', fontWeight: 'bold' }} onClick={routeChange1}>Click <ArrowRightOutlined /></span>
                    </Card>
                    <Card
                        hoverable
                        style={{
                            padding: '2em',
                            width: 500,
                            margin: '1em'
                        }}
                    >

                        <h2 style={{ color: '#0095d9', textAlign: 'center', fontSize: '2em' }}>RETAIL</h2>
                        <p>Retail is the sale of goods and/or services directly to end consumers for their consumption</p>
                        <span style={{ float: 'inline-end', color: '#0095d9', fontWeight: 'bold' }} onClick={routeChange2}>Click <ArrowRightOutlined /></span>
                    </Card>
                </Flex>
                {/* <Table columns={column}/> */}
            </Content>
        </Layout>
    )
}

export default Home;
