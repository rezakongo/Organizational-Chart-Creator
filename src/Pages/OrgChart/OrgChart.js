import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import './OrgChart.css';
import React, { useState } from 'react';
import download from '../../Methods/Download/Download'
import Upload from '../../Methods/Upload/Upload';

function OrganChart(){
    
    const handleChange = (event) => {
        setJsonText(event.target.value);
    };

    const [jsonText,setJsonText]=useState('');
    const [initechOrg, setInitTechOrg]=useState('');

    
      const MyNodeComponent = ({node}) => {
        return (
          <div className="initechNode" onClick={() => alert(node.activities)}>{ node.role }</div>
        );
    };
    return(
        <div class="container px-0 OrgChart_Body">
            <div class="row">
                <div class="col-12">
                    <div className='OrgChart_Chart_Container'>
                        <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-10">
                    <textarea className='OrgChart_Editor' onChange={handleChange}/>
                </div>
                <div class="col gx-2">
                    <div className='OrgChart_Title'>
                        Functions
                    </div>
                    <button className='OrgChart_Button' onClick={()=>{setInitTechOrg(JSON.parse(jsonText))}}>Create From JSON</button>
                    <button className='OrgChart_Button' onClick={()=>{download("OrgChartJson.json",jsonText);}}>Download JSON</button>
                </div>
            </div>
            <div class="row mt-2">
                <Upload/>
            </div>
            
        </div>
    );
}

export default OrganChart;