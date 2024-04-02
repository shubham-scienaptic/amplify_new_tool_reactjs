import { Select, Form, Input } from 'antd';
import React from 'react';

const { Option } = Select;

function Dropdown(props) {
    const handleClick = (value) => {
        props.select(value, props.id);
    }
    const click = () => {
        console.log(props)
        props.checkErrorForAllFields(props.id);
    }
    //console.log(props)
    // if (props.data.length <= 0) {
    //     return (
    //         <Select style={{ width: '14em' }} allowClear placeholder={props.placeholder}>
    //             {
    //                 <Option style={{ pointerEvents: "none" }}></Option>
    //             }
    //         </Select>
    //     )
    // }
    if (props.error === false && props.arrayReceive === false) {
        return <Form.Item style={{marginTop: '1.5em'}} validateStatus={'none'} onClick={click}><Input className="title" style={{ width: '16em', borderRadius: '5px' }} placeholder={props.placeholder} /></Form.Item>
    }
    else if (props.error === true && props.arrayReceive === false) {
        return <Form.Item style={{marginTop: '1.5em'}} help={props.help} validateStatus="error" > <Input style={{ width: '16em', borderRadius: '5px' }} className="title" placeholder={props.placeholder} /></Form.Item >
    }
    else {
        return (
            <Select
                mode={props.mode}
                allowClear
                showSearch
                style={{ width: '16em' }}
                placeholder={props.placeholder}
                onChange={handleClick}
                value={props.value ? props.value: undefined}
            >
                {
                    props.data.map((data, i) => (
                        <Option value={data} key={i}>{data}</Option>
                    ))
                }
            </Select>
        )
    }
}

export default Dropdown;
