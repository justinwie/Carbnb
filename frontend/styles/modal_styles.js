const ModalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: '100'
  },

  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: '50%',
    padding: '20px',
    backgroundColor: 'white',
    transform: 'translate(-50%,-50%)',
    width: '350px',
    zIndex: '150'
  }
};

module.exports = ModalStyles;
