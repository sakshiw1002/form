import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import {  RaisedButton } from 'material-ui';
import  { PureComponent } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Button,FileUpload} from 'react-md'
import guid from 'uuid/v1';
import { without } from 'lodash/array';

import UploadProgress from './UploadProgress';
import UploadedFileCard from './UploadedFileCard';


const LOADING_PROPS = {
    'aria-busy': true,
    'aria-describedby': 'file-upload-progress',
  };
export class About extends Component {
        state = { files: [], progress: null, file: null };
      
        componentWillUnmount() {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
        }
      
        setFileUpload = (fileUpload) => {
          this.fileUpload = fileUpload;
        };
      
        setFile = (file) => {
          this.setState({ file });
        };
      
        abortUpload = () => {
          if (this.fileUpload) {
            this.fileUpload.abort();
          }
      
          this.setState({ file: null, progress: null });
        };
      
        /**
         * This is triggered once a file has been successfully uploaded.
         *
         * @param {File} uploadedFile - the fully uploaded file. The properties
         *    of this object change depending on the browser, but normally
         *    the name, size, type, and lastModifiedDate are the same.
         * @param {String} uploadedData - This will be whatever the results of
         *    the upload was. So this could be the text in a file, a data-url
         *    for an image, or some other content for other file types.
         */
        handleLoad = (uploadedFile, uploadedData) => {
          const { name, size, type, lastModified } = uploadedFile;
          const file = {
            id: guid(),
            name,
            size,
            type,
            data: uploadedData,
            lastModified: new Date(lastModified),
          };
      
          const files = [...this.state.files, file];
      
          // Show progress bar for one more second
          this.timeout = setTimeout(() => {
            this.timeout = null;
      
            this.setState({ progress: null });
          }, 1000);
          this.setState({ files, progress: 100 });
        };
      
        handleProgress = (file, progress) => {
          // The progress event can sometimes happen once more after the abort
          // has been called. So this just a sanity check
          if (this.state.file) {
            this.setState({ progress });
          }
        };
      
        removeFile = (file) => {
          const files = without(this.state.files, file);
          this.setState({ files });
        };
      
        removeAll = () => {
          this.setState({ files: [] }, () => {
            const example = document.getElementById('file-upload-example');
            const toolbar = document.getElementById('main-toolbar');
            if (example && toolbar) {
              window.scrollTo(0, example.offsetTop - toolbar.offsetHeight);
            }
          });
        };
  continue = e =>{
    e.preventDefault();
    this.props.nextstep();
}



    render() {
        const{values,handlechange}=this.props;
        const { progress, file, files } = this.state;

    const uploadedFileCards = files.map((file => <UploadedFileCard key={file.id} file={file} onRemoveClick={this.removeFile} />));
    let fab;
    if (files.length) {
      fab = (
        <Button
          floating
          fixed
          secondary
          onClick={this.removeAll}
          tooltipPosition="left"
          tooltipLabel="Remove all uploads"
        >
        </Button>
      );}
        return (
            <MuiThemeProvider>
              <React.Fragment>
                    <h1>Basic Info</h1>
                    <label>Name</label>&emsp;
                     <input type="text"
                    placeholder='first name'
                    onChange={handlechange('firstname')}
                    defaultValue={values.firstname}>
                    </input>&emsp;
                    <input type="text"
                    placeholder='last name'
                    onChange={handlechange('lastname')}
                    defaultValue={values.lastname}>
                    </input>
                    <br></br>
                    <input type="file" accept="image/*"
                    floatingLabelText='photo'
                    onChange={handlechange('photo')}
                    defaultValue={values.photo}>
                        </input>
                    Date of Birth<input type="date" name='dob'
                    onChange={handlechange('dob')}
                    defaultChecked={values.dob}></input>
                    <br></br>
                    Phone number<input type="tel" name='phone'
                    placeholder="phone number"
                    onChange={handlechange('phone')}
                    defaultChecked={values.phone}></input><br></br>
                    <label>Email</label>
                    <input type="email"
                    placeholder='email'
                    onChange={handlechange('email')}
                    defaultValue={values.email}>
                    </input>
                    <br></br>
                    <RaisedButton
                    label="Continue"
                    backgroundColor="white"
                    style={styles.button}
                    onClick={this.continue}
                    />    
                    <div>
        <UploadProgress progress={progress} onAbortClick={this.abortUpload} file={file} />
        <FileUpload
          id="multiple-file-upload"
          multiple
          secondary
          name="multipart-file-upload"
          ref={this.setFileUpload}
          label="Select files"
          onLoadStart={this.setFile}
          onProgress={this.handleProgress}
          onLoad={this.handleLoad}
          onLoadEnd={handlechange('photo')}
          defaultValue={values.photo}
        />
        <CSSTransitionGroup
          component="section"
          transitionName="md-cross-fade"
          transitionEnterTimeout={300}
          transitionLeave={false}
          className="md-grid"
          {...(typeof progress === 'number' ? LOADING_PROPS : undefined)}
        >
          {uploadedFileCards}
          {fab}
        </CSSTransitionGroup>
      </div>
                    </React.Fragment>
            </MuiThemeProvider>
        );
    }
}


const styles={
    button:{
        margin :15
    }
}

export default About
