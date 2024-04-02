export const columnStockStatus = [
    {
        title: "Screenshot",
        dataIndex: 'screenshotUrl',
        key: 'screenshotUrl',
        align: 'center',
        render: (text) => {
            if (text != " " && text != "" && text != null)
                return <div>
                    {/* <label style={{ cursor: "pointer", color: "#0095d9" }} onClick={() => { this.callImage(text) }}>Click Here</label>
                    {/* <a href={`data:image/png;base64,${text}`} download={"best_practices"}><DownloadOutlined className="icon" /></a> */}
                    {/* <a onClick={()=>{this.callUrlImage(text)}} ><DownloadOutlined className="icon" /></a> */}

                    <a style={{ cursor: "pointer", color: "#0095d9" }} href={text} target="_blank">Click here</a>
                    {/* <label style={{ cursor: "pointer", color: "#0095d9" }} onClick={() => { this.callImage(text) }}>Click Here</label>
                    <DownloadOutlined className="icon" onClick={() => { this.callUrlImage(text) }} /> */}
                </div>

            else
                return <label>Screenshot not available</label>
        }
    },    
    {
        title: 'Market',
        dataIndex: 'market'
    },    
    {
        title: 'Country',
        dataIndex: 'country'
    },
    {
        title: 'Partner Type',
        dataIndex: 'partnerType'
    },
    {
        title: 'Partner',
        dataIndex: 'partnerName'
    },
    {
        title: 'Category',
        dataIndex: 'category'
    },
    {
        title: 'Sub Category',
        dataIndex: 'subCategory'
    },
    {
        title:'SKU',
        dataIndex: 'mpnModel'
    },
    {
        title: 'Scrape Date',
        dataIndex: 'scrapeDate'
    }
]

export const columnDigitalSelf = [
    {
        title: "Screenshot",
        dataIndex: 'screenshotUrl',
        key: 'screenshotUrl',
        render: (text) => {
            if (text != " " && text != "" && text != null)
                return <div>
                    {/* <label style={{ cursor: "pointer", color: "#0095d9" }} onClick={() => { this.callImage(text) }}>Click Here</label>
                    {/* <a href={`data:image/png;base64,${text}`} download={"best_practices"}><DownloadOutlined className="icon" /></a> */}
                    {/* <a onClick={()=>{this.callUrlImage(text)}} ><DownloadOutlined className="icon" /></a> */}

                    <a style={{ cursor: "pointer", color: "#0095d9" }} href={text} target="_blank">Click here</a>
                    {/* <label style={{ cursor: "pointer", color: "#0095d9" }} onClick={() => { this.callImage(text) }}>Click Here</label>
                    <DownloadOutlined className="icon" onClick={() => { this.callUrlImage(text) }} /> */}
                </div>

            else
                return <label>Screenshot not available</label>
        }
    },    
    {
        title: 'Market',
        dataIndex: 'market'
    },    
    {
        title: 'Country',
        dataIndex: 'country'
    },
    {
        title: 'Partner Type',
        dataIndex: 'partnerType'
    },
    {
        title: 'Partner',
        dataIndex: 'partnerName'
    },
    {
        title: 'Category',
        dataIndex: 'category'
    },
    {
        title: 'Sub Category',
        dataIndex: 'subCategory'
    },
    {
        title:'Keyword ID',
        dataIndex: 'mpnModel'
    },
    {
        title: 'Scrape Date',
        dataIndex: 'scrapeDate'
    }
]

export const columnBestPractices = [
    {
        title: "Screenshot",
        dataIndex: 'screenshotUrl',
        key: 'screenshotUrl',
        render: (text) => {
            if (text != " " && text != "" && text != null)
                return <div>
                    {/* <label style={{ cursor: "pointer", color: "#0095d9" }} onClick={() => { this.callImage(text) }}>Click Here</label>
                    {/* <a href={`data:image/png;base64,${text}`} download={"best_practices"}><DownloadOutlined className="icon" /></a> */}
                    {/* <a onClick={()=>{this.callUrlImage(text)}} ><DownloadOutlined className="icon" /></a> */}

                    <a style={{ cursor: "pointer", color: "#0095d9" }} href={text} target="_blank">Click here</a>
                    {/* <label style={{ cursor: "pointer", color: "#0095d9" }} onClick={() => { this.callImage(text) }}>Click Here</label>
                    <DownloadOutlined className="icon" onClick={() => { this.callUrlImage(text) }} /> */}
                </div>

            else
                return <label>Screenshot not available</label>
        }
    },    
    {
        title: 'Market',
        dataIndex: 'market'
    },    
    {
        title: 'Country',
        dataIndex: 'country'
    },
    {
        title: 'Partner Type',
        dataIndex: 'partnerType'
    },
    {
        title: 'Partner',
        dataIndex: 'partnerName'
    },
    {
        title: 'Category',
        dataIndex: 'category'
    },
    {
        title: 'Sub Category',
        dataIndex: 'subCategory'
    },
    {
        title:'SKU',
        dataIndex: 'mpnModel'
    },
    {
        title: 'Scrape Date',
        dataIndex: 'scrapeDate'
    }
]