function Upload(e){
    var file;
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      file=e.target.result;
    };
    while(file.lenght<2){

    }
    return file;
}

export default Upload;