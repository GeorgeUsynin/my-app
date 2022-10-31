import React from 'react';

const Tabs = ({ children }) => {

    const[active_tab, setActiveTab] = React.useState(0)

    const tab_titles = children.map((child, idx) => {
        return <div key={idx} onClick={()=>setActiveTab(idx)} style={{background: `${active_tab === idx ? 'red' : ''}`}}>{child.props.title}</div>
    })

    const tabs_content = children.map((child, idx)=>{
        return <div key={idx}>{child.props.content}</div>
    })

    return (
        <div>
            <div style={{display: 'flex', columnGap: '10px', borderBottom: 'solid 2px red'}}>{tab_titles}</div>
            <div>{tabs_content[active_tab]}</div>
        </div>
    );
};

export const Tab = ({ title, content }) => {};

export default Tabs;
