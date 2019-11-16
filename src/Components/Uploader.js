import React, { Component } from "react";

// Components
import Dropzone from "./Dropzone";

class Uploader extends Component {
  render() {
    return (
      <div>
        <Dropzone onFilesAdded={console.log} />
      </div>
    );
  }
}

export default Uploader;
