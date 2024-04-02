import React, { useState, useEffect } from 'react';
import { getBestPracticesData } from '../../controller/response';
import { columnBestPractices } from '../../columns/column';
import Loader from '../../components/Loader/Loader';
import { Button, Col, Drawer, Input, Row, Select, Table, DatePicker, Tag } from 'antd';
import Dropdown from '../../components/Dropdown';
import moment from 'moment';
import { FilterOutlined, DownloadOutlined, SearchOutlined } from '@ant-design/icons';
import { getMarketDataPDPContent } from '../../controller/market';
import { getCountryDataPDPContent } from '../../controller/country';
import { getPartnerTypeDataPDPContent } from '../../controller/partnerType';
import { getCategoryDataPDPContent } from '../../controller/category';
import { getSubCategoryDataPDPContent } from '../../controller/subcategory';
import { getPartnersDataPDPContent } from '../../controller/partner';

const { Option } = Select;
const { RangePicker } = DatePicker;

function CommercialPDPContent() {
    const [flag, setflag] = useState(false);
    const [loader, setLoader] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(20)
    const [count, setCount] = useState(0);
    const [marketsData, setMarketsData] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [partnerTypeData, setPartnerTypeData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [subcategoryData, setSubcategoryData] = useState([]);
    const [partnerData, setPartnerData] = useState([]);
    const [countryArrayReceive, setCountryArrayReceive] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [partnerTypeArrayReceive, setPartnerTypeArrayReceive] = useState(false);
    const [partnerTypeError, setPartnerTypeError] = useState(false);
    const [categoryArrayReceive, setCategoryArrayReceive] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const [subcategoryArrayReceive, setSubcategoryArrayReceive] = useState(false);
    const [subcategoryError, setSubcategoryeError] = useState(false);
    const [partnerArrayReceive, setPartnerArrayReceive] = useState(false);
    const [partnerError, setPartnerError] = useState(false);

    const [market, setMarket] = useState(null)
    const [country, setCountry] = useState(null)
    const [partnerType, setPartnerType] = useState(null)
    const [category, setCategory] = useState(null)
    const [subcategory, setSubcategory] = useState(null)
    const [partner, setPartner] = useState(null)
    const [sku, setSku] = useState(null)
    const [scrapeDate, setScrapeDate] = useState(null)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const fetchData = async () => {
        console.log(startDate, endDate)
        setLoader(true);
        let dataPacket = [];
        let categoryType = 'Commercial'
        const response = await getBestPracticesData(categoryType, market, country, partnerType, partner, category, subcategory, sku, startDate, endDate, current, pageSize);
        //console.log(response.totatCount);
        response.data.map((data, i) => {
            dataPacket.push({
                "key": i,
                "partnerName": data.partnerName !== null ? data.partnerName : "",
                "partnerType": data.partnerType !== null ? data.partnerType : "",
                "category": data.category !== null ? data.category : "",
                "subCategory": data.subCategory !== null ? data.subCategory : "",
                "market": data.market !== null ? data.market : "",
                "country": data.country !== null ? data.country : "",
                "mpnModel": data.mpnModel !== null ? data.mpnModel : "",
                "scrapeDate": data.scrapeDate !== null ? data.scrapeDate : "",
                "screenshotUrl": data.screenshotUrl !== null ? data.screenshotUrl : ""
            })
        })
        setDataSource(dataPacket);
        setCount(response.totatCount);
        setTimeout(() => {
            setLoader(false);
            setflag(false)
        }, 1000);
    }
    const fetchMarket = async () => {
        //console.log('market call')
        let dataPacket = [];
        let category = 'Commercial';
        const response = await getMarketDataPDPContent(category);
        dataPacket = [...response.data];
        setMarketsData(dataPacket);
    }
    const fetchCountry = async (value) => {
        //console.log('country call');
        let dataPacket = [];
        let category = 'Commercial';
        const response = await getCountryDataPDPContent(category, value);
        //console.log(response.data)
        dataPacket = [...response.data];
        setCountryData(dataPacket);
        setCountryArrayReceive(true);
    }
    const fetchPartnerType = async (value) => {
        //console.log('country call');
        let dataPacket = [];
        let category = 'Commercial';
        const response = await getPartnerTypeDataPDPContent(category, market, value);
        //console.log(response.data)
        dataPacket = [...response.data];
        setPartnerTypeData(dataPacket);
        setPartnerTypeArrayReceive(true);
    }
    const fetchCategory = async (value) => {
        //console.log('country call');
        let dataPacket = [];
        let category = 'Commercial';
        const response = await getCategoryDataPDPContent(category, market, country, value);
        //console.log(response.data)
        dataPacket = [...response.data];
        setCategoryData(dataPacket);
        setCategoryArrayReceive(true);
    }
    const fetchSubcategory = async (value) => {
        //console.log('country call');
        let dataPacket = [];
        let category = 'Commercial';
        const response = await getSubCategoryDataPDPContent(category, market, country, partnerType, value);
        //console.log(response.data)
        dataPacket = [...response.data];
        setSubcategoryData(dataPacket);
        setSubcategoryArrayReceive(true);
    }
    const fetchPartner = async (value) => {
        let dataPacket = [];
        let category = 'Commercial';
        const response = await getPartnersDataPDPContent(category, market, country, value);
        //console.log(response.data)
        dataPacket = [...response.data];
        setPartnerData(dataPacket);
        setPartnerArrayReceive(true);
    }

    const handleSize = (current, size) => {
        setCurrent(current);
        setPageSize(size)
    }
    useEffect(() => {
        fetchMarket();
        if (market !== null || country !== null || partnerType !== null || startDate !== "" || endDate !== "") {
            fetchData();
        }
    }, [flag, current, pageSize]);

    const select = (value, id) => {
        if (id === 'market') {
            setMarket(value);
            setCountry(null);
            setPartnerType(null);
            setCountryData([])
            fetchCountry(value);
        }
        if (id === 'country') {
            setCountry(value);
            fetchPartnerType(value)
        }
        if (id === 'partnerType') {
            setPartnerType(value);
            fetchPartner(value);
            fetchCategory(value);
        }
        if (id === 'category') {
            setCategory(value);
            fetchSubcategory(value)
        }
        if (id === 'subcategory') {
            setSubcategory(value);
        }
        if (id === 'partner') {
            setPartner(value);
        }
    }

    const text = (e) => {
        if (e.target.id == 'sku') {
            setSku(e.target.value)
        }
    }
    const checkErrorForAllFields = (id) => {
        // console.log(id)
        if ((id == 'country' && market == '') || (id == 'country' && market == null)) {
            setCountryError(true);
        }
        if ((id == 'partnerType' && country == '') || (id == 'partnerType' && country == undefined)) {
            setPartnerTypeError(true);
        }
        if ((id == 'partner' && market == '' && country == '' && partnerType == '') || (id == 'partner' && market == undefined && country == undefined && partnerType == undefined)) {
            setPartnerError(true);
        }
        if ((id == 'category' && market == '' && country == '' && partnerType == '') || (id == 'category' && market == undefined && country == undefined && partnerType == undefined)) {
            setCategoryError(true);
        }
        if ((id == 'subcategory' && category == '') || (id == 'subcategory' && category == undefined)) {
            setSubcategoryeError(true);
        }
    }
    const handleClear = () => {
        setflag(true);
        setDataSource([]);
        setCount(0)
        setMarket(null);
        setCountry(null);
        setPartnerType(null);
        setPartner(null);
        setCategory(null);
        setSubcategory(null);
        setSku(null);
        setStartDate("");
        setEndDate("");
        setCountryError(false);
        setCountryArrayReceive(false);
        setPartnerError(false);
        setPartnerArrayReceive(false);
        setPartnerError(false);
        setCategoryError(false);
        setCategoryArrayReceive(false);
        setSubcategoryeError(false);
        setSubcategoryArrayReceive(false);
    }

    const selectDate = (value, dateString) => {
        console.log(value, dateString);
        setStartDate(dateString[0]);
        setEndDate(dateString[1])
    }

    return (
        <div>
            <div style={{ border: '0.5px solid #f0f0f0', padding: '1em', borderRadius: '5px', background: '#f0f0f0' }}>
                <Row gutter={18}>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label >Market<span style={{ color: 'red', fontSize: '1.2em', fontWeight: 'bolder' }}>*</span></label>
                        <Dropdown id='market' placeholder='Market' data={marketsData} select={select} value={market} />
                    </Col>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label>Country<span style={{ color: 'red', fontSize: '1.2em', fontWeight: 'bolder' }}>*</span></label>
                        <Dropdown id="country" placeholder="Country" data={countryData} select={select} value={country} arrayReceive={countryArrayReceive} help={"Please Select Market first"} error={countryError} checkErrorForAllFields={checkErrorForAllFields} />
                    </Col>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label>Partner Type<span style={{ color: 'red', fontSize: '1.2em', fontWeight: 'bolder' }}>*</span></label>
                        <Dropdown id="partnerType" placeholder="Partner Type" data={partnerTypeData} select={select} value={partnerType} arrayReceive={partnerTypeArrayReceive} help={"Please Select Country first"} error={partnerTypeError} checkErrorForAllFields={checkErrorForAllFields} />
                    </Col>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label>Partner</label>
                        <Dropdown mode='multiple' id="partner" placeholder="Partner" data={partnerData} select={select} value={partner} arrayReceive={partnerArrayReceive} help={"Please Select All Manadatory Field first"} error={partnerError} checkErrorForAllFields={checkErrorForAllFields} />
                    </Col>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label>Category</label>
                        <Dropdown id="category" placeholder="Category" data={categoryData} select={select} value={category} arrayReceive={categoryArrayReceive} help={"Please Select All Manadatory Field first"} error={categoryError} checkErrorForAllFields={checkErrorForAllFields} />
                    </Col>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label>Sub Category</label>
                        <Dropdown id="subcategory" placeholder="Sub Category" data={subcategoryData} select={select} value={subcategory} arrayReceive={subcategoryArrayReceive} help={"Please Select Category first"} error={subcategoryError} checkErrorForAllFields={checkErrorForAllFields} />
                    </Col>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label>SKU</label>
                        <Input allowClear style={{ width: '16em' }} id='sku' placeholder='SKU' onChange={text} value={sku} />
                    </Col>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label>Scrape Date<span style={{ color: 'red', fontSize: '1.2em', fontWeight: 'bolder' }}>*</span></label>
                        <RangePicker
                            format={'YYYY-MM-DD'}
                            value={
                                startDate !== '' && endDate !== ''
                                    ? [moment(startDate, 'YYYY-MM-DD'), moment(endDate, 'YYYY-MM-DD')]
                                    : ''
                            }
                            style={{ width: '16em' }}
                            onChange={selectDate}
                        />
                    </Col>
                    <Col xs={24} sm={24} xl={8} xxl={6} md={12} lg={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Tag color='processing' style={{ padding: '0.2em 1em' }}><span style={{ fontSize: '1.2em', color: '#0095d9', fontWeight: '500' }}>PDP Content Data found : </span><span style={{ fontSize: '1.2em', color: '#0095d9', fontWeight: '500' }}>{count}</span></Tag>

                    </Col>
                    <Col flex={'auto'}></Col>
                    <Col xs={8} sm={6} xl={3} xxl={2} md={3} lg={3}>
                        <Button type='primary' block ghost onClick={handleClear}>Clear</Button>
                    </Col>
                    <Col xs={8} sm={6} xl={3} xxl={2} md={3} lg={3}>
                        <Button disabled={market === null || country === null || partnerType === null || startDate === "" || endDate === ""}
                            type='primary'
                            block
                            icon={<SearchOutlined />}
                            onClick={fetchData}>Search</Button>
                    </Col>
                    <Col xs={8} sm={6} xl={3} xxl={2} md={3} lg={3}>
                        <Button type="primary" block icon={<DownloadOutlined />}>
                            Download
                        </Button>
                    </Col>
                </Row>
            </div>
            <Table bordered
                loading={{ indicator: <div><Loader /></div>, spinning: loader }}
                style={{ marginTop: '0.5em' }}
                columns={columnBestPractices}
                dataSource={dataSource}
                pagination={{
                    total: count,
                    showSizeChanger: true,
                    hideOnSinglePage: true,
                    defaultPageSize: pageSize,
                    onChange: handleSize
                }}
                scroll={{ x: 'max-content', y: 408 }}
            />
        </div>
    )
}

export default CommercialPDPContent;