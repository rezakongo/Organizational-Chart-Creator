import 'react-orgchart/index.css';
import './OrgChart.css';
import React, { useState } from 'react';
import download from '../../Methods/Download/Download'
import 'reactjs-popup/dist/index.css';
import { DynamicNetworkGraph } from 'react-simple-network-graph';
import { auto } from '@popperjs/core';

function ContextDiagram(){
    
    const handleChange = (event) => {
        setJsonText(event.target.value);
    };

    const uploadJson=(e)=>{
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
        console.log("e.target.result", e.target.result);
        setJsonText(e.target.result);
    };
    }

    const [jsonText,setJsonText]=useState('');
    const [initechOrg, setInitTechOrg]=useState('');

    

    return(
        <div class="container px-0 OrgChart_Body">
            <div class="row">
                <div class="col-12">
                    <div className='OrgChart_Chart_Container'>
                    
<DynamicNetworkGraph
  height={auto}
  edges={initechOrg.edges}
  
  vertices={initechOrg.nodes}
  width="100%"
/>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-10">
                    <textarea value={jsonText} className='OrgChart_Editor' onChange={handleChange}/>
                </div>
                <div class="col gx-2">
                    <div className='OrgChart_Title'>
                        Functions
                    </div>
                    <button className='OrgChart_Button' onClick={()=>{setInitTechOrg(JSON.parse(jsonText));}}>Create From JSON</button>
                    <button className='OrgChart_Button' onClick={()=>{download("ContextDiagram.json",jsonText);}}>Download JSON</button>
                    <div class="row mt-2">
                    <input type="file" onChange={uploadJson} />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ContextDiagram;