import react, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone'
import "bootstrap/dist/css/bootstrap.min.css"
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import { Link } from 'react-router-dom';

const FilesComp = () => {

    // Payload data and url to upload files
    const getUploadParams = ({ meta }) => { return { url: 'http://localhost:3000/Site/Files' } }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file, file.lastModifiedDate) }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (<div> <br />
        <h1>Upload Files</h1>
        <Link to='https://purplehomeassignment.firebaseapp.com/'> Link</Link>
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            // onSubmit={handleSubmit}
            accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx,.csv,.tsv,.ppt,.pptx,.pages,.odt,.rtf"
        />

    </div>)
}

export default FilesComp