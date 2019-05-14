import React, { Component } from 'react'
import './Upload.css'
import Dropzone from '../dropzone/Dropzone'
import Progress from '../progress/Progress'
import jwt_decode from 'jwt-decode'
import { getToken, setToken, logout} from '../services/auth'

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
          files: [],
          uploading: false,
          user : "",
          uploadProgress: {},
          successfullUploaded: false
        };
    
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.renderActions = this.renderActions.bind(this);
      }
      onFilesAdded(files) {
        this.setState(prevState => ({
          files: prevState.files.concat(files)
        }));
      }

      renderProgress(file) {
        const uploadProgress = this.state.uploadProgress[file.name];
        if (this.state.uploading || this.state.successfullUploaded) {
          return (
            <div className="ProgressWrapper">
              <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
              <img
                className="CheckIcon"
                alt="done"
                src="baseline-check_circle_outline-24px.svg"
                style={{
                  opacity:
                    uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                }}
              />
            </div>
          );
        }
      }

      renderActions() {
        if (this.state.successfullUploaded) {
          return (
            <button
              onClick={() =>
                this.setState({ files: [], successfullUploaded: false })
              }
            >
              Clear
            </button>
          );
        } else {
          return (
            <button
              disabled={this.state.files.length < 0 || this.state.uploading}
              onClick={this.uploadFiles}
            >
              Upload
            </button>
          );
        }
      }
    
      async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file => {
          promises.push(this.sendRequest(file));
        });
        try {
          await Promise.all(promises);
      
          this.setState({ successfullUploaded: true, uploading: false });
        } catch (e) {
          // Not Production ready! Do some error handling here instead...
          this.setState({ successfullUploaded: true, uploading: false });
        }
      }
      
sendRequest(file) {
    return new Promise((resolve, reject) => {
     const req = new XMLHttpRequest();
   
     req.upload.addEventListener("progress", event => {
      if (event.lengthComputable) {
       const copy = { ...this.state.uploadProgress };
       copy[file.name] = {
        state: "pending",
        percentage: (event.loaded / event.total) * 100
       };
       this.setState({ uploadProgress: copy });
      }
     });
      
     req.upload.addEventListener("load", event => {
      const copy = { ...this.state.uploadProgress };
      copy[file.name] = { state: "done", percentage: 100 };
      this.setState({ uploadProgress: copy });
      resolve(req.response);
     });
      
     req.upload.addEventListener("error", event => {
      const copy = { ...this.state.uploadProgress };
      copy[file.name] = { state: "error", percentage: 0 };
      this.setState({ uploadProgress: copy });
      reject(req.response);
     });
   
     const formData = new FormData();
     formData.append("file", file, file.name);
     formData.append("user_id", this.state.user._id)
   
     req.open("POST", "http://localhost:5000/upload?user="+ this.state.user._id);
     req.send(formData);
    });
   }

   componentDidMount(){
     console.log(getToken())
    if(getToken()){
      //remember the token consists of 3 parts
      //1. HEADER:ALGORITHM & TOKEN TYPE
      //2. PAYLOAD:DATA
      //3. SIGNATURE
      let decoded = jwt_decode(getToken()) //decode token
      console.log(decoded)
      let data = {...this.state}
      data.user = decoded
      // data.isAuthenticated = true
      this.setState(data)
    }
   }

      render() {
        return (
          <div className="Card">
          <div className="Upload">
            <span className="Title">Upload Files</span>
            <div className="Content">
              <div>
                <Dropzone
                  onFilesAdded={this.onFilesAdded}
                  disabled={this.state.uploading || this.state.successfullUploaded}
                />
              </div>
              <div className="Files">
              {this.state.files.map(file => {
                return (
                    <div key={file.name} className="Row">
                    <span className="Filename">{file.name}</span>
                   
                    {this.renderProgress(file)}
                    </div>
                );
                })}
                {/* <input type="text" value={this.state.user._id} hidden/> */}
              </div>
            </div>
            <div className="Actions">
            {this.renderActions()}
            </div>
          </div>
          </div>
        );
      }
}
export default Upload