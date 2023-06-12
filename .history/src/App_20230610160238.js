import React from 'react';

import { useState } from "react";
import { data } from "./content/data";
const Modal = React.lazy(() => import())
import Header from "./components/header";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <>
      {showModal&&<Modal setShowModal={setShowModal} setSelectedContent={setSelectedContent} content={selectedContent} data={data}/>}
      <div style={styles.main}>
        <Header title="Photo Gallery" subtitle="A simple photo gallery app built by stackup-username" />
        <div className={styles.container}>
          {data.map((image_data, index) => {
            return (
              <div style={styles.imageContainer}
                onClick={() => {
                  setShowModal(true);
                  setSelectedContent(image_data);
                }}
              >
                <img style={styles.image} src={image_data.url} alt= {image_data.name} />
                <div style={styles.imageDescription}>
                  <p style={styles.imageDescriptionText}>{image_data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;