import React, { Component} from "react";

class Upload extends Component{
    constructor(props) {
        super(props);
        this.state = {
          files: ''    
        };
    }

    render(){

        const handleChange = e => {
            const fileReader = new FileReader();
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = e => {
              console.log("e.target.result", e.target.result);
              this.setState({files:e.target.result});
            };
          };
          return (
            <>
        
              <input type="file" onChange={handleChange} />
              <br />
              {"uploaded file content -- " + this.state.files}
            </>
          );
    }
}

export default Upload;