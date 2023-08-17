import React, { useState } from "react";

function VideoUploadForm() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(typeof file);
    setSelectedVideo(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the selected video file here (e.g., upload to a server).
    if (selectedVideo) {
      console.log("Selected video:", selectedVideo);
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default VideoUploadForm;
