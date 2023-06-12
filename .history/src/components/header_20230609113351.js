import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => {
  return (
    <header className={styles.header}>
      <h1 style={styles.title}>{title}</h1>
      <h2 style={styles.subtitle}>{subtitle}</h2>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: 'lightblue',
    marginBottom:"20px"
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: '2px 2px 2px #000000',
    textAlign:"left"
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: '2px 2px 2px #000000',
    textAlign:"left"
  },
}

export default Header;