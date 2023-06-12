import { useCallback } from "react";
import PropTypes from 'prop-types';
const Modal = ({ data, content, setSelectedContent, setShowModal }) => {
    const { name, url, description, date, type } = content;
    return (
      <div className={styles.modal}>
        <div style={styles.modalContent}>
          <div className='modal-header'>
            <h1 style={styles.modalTitle}>{name}</h1>
            <button style={styles.modalCloseButton} onClick={useCallback(() => setShowModal(false), [setShowModal])}>close</button>
          </div>
          <div style={styles.splitContainer}>
            <div style={styles.modalImageContainer}>
              <img style={styles.modalImage} src={url} alt={name}/>
              <p style={styles.modalDescriptionText}>{description}</p>
            </div>
            <div style={styles.modalDescription}>
              <div style={styles.modalRowData}>
                <p style={styles.modalDescriptionText}>Date</p>
                <p style={styles.modalDescriptionText}>{date}</p>
              </div>
              <div style={styles.modalRowData}>
                <p style={styles.modalDescriptionText}>Type</p>
                <p style={styles.modalDescriptionText}>{type}</p>
              </div>
            </div>
          </div>
          <div style={styles.modalImagePicker}>
            {data.map((image_data, index) => {
              return (
                <div style={styles.imageContainer}
                  onClick={() => {
                    setSelectedContent(image_data);
                  }}
                >
                  <img style={styles.image} src={image_data.url} alt={image_data.name}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  Modal.propTypes = {
    data: PropTypes.array.isRequired,
    content: PropTypes.object.isRequired,
    setSelectedContent: PropTypes.func.isRequired,
    setShowModal: PropTypes.func.isRequired
  };
  
  const styles = {
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1
    },
    modalContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      width: '50%',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '20px'
    },
    splitContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: "flex-start",
      gap: '10px',
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#000000',
      textShadow: '2px 2px 2px #ffffff',
      textAlign: 'left'
    },
    modalCloseButton: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#000000',
      textShadow: '2px 2px 2px #ffffff',
      textAlign: 'left',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent'
    },
    modalImageContainer: {
      width: '100%',
      height: '50%',
      marginBottom: '20px'
    },
    modalImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    modalDescription: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    modalRowData: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '100%'
    },
    modalDescriptionText: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: 'gray',
      fontStyle: 'italic',
      textShadow: 
    }
  }