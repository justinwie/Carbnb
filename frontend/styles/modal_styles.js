const ModalStyles = {
  overlay: {
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.75)',
    zIndex: '125'
  },

  content: {
    position: 'absolute',
    left: '50%',
    top: '55%',
    padding: '20px',
    backgroundColor: 'white',
    transform: 'translate(-50%,-50%)',
    width: '30%',
    zIndex: '150'
  }
};

module.exports = ModalStyles;
