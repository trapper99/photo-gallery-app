import React from 'react';
import styles from './ImageGrid.module.css';
import { useState } from "react";
import { data } from "./content/data";
import Modal from "./modal/modal";
import Header from "./components/header";

function ImageGrid({ data, setShowModal, setSelectedContent }) {
  return (
    <div className={styles.container}>
      {React.useMemo(() => data.map((image_data, index) => {
        return (
          <div key={index} className={styles.imageContainer}
            onClick={() => {
              setShowModal(true);
              setSelectedContent(image_data);
            }}
          >
            <img className={styles.image} src={image_data.url} alt={image_data.name}/>
            <div className={styles.imageDescription}>
              <p className={styles.imageDescriptionText}>{image_data.name}</p>
            </div>
          </div>
        );
      }), [data, setShowModal, setSelectedContent])}
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <>
      {showModal&&<Modal setShowModal={setShowModal} setSelectedContent={setSelectedContent} content={selectedContent} data={data}/>}
      <div style={styles.main}>
        <Header title="Photo Gallery" subtitle="A simple photo gallery app built by stackup-use" />
        <ImageGrid data={data} setShowModal={setShowModal} setSelectedContent={setSelectedContent} styles={styles} />
      </div>
    </>
  );
}
export default App;