const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      margin: 10,
    },
  },

  brand: {
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1.5rem',
  },

  grow: {
    flexGrow: 1,
  },

  space: {
    margin: '0 1.5rem',
  },

  Button: {
    backgroundColor: '#f0c000',
  },
  paper: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '1',
    backgroundColor: '#f50057',
  },
  form: {
    width: '100%',
    marginTop: '1px',
  },
  submit: {
    margin: '3px 0 2px',
  },
  googleButton: {
    margin: '10px 0',
  },
  wrapper: {
    maxWidth: '690px',
    margin: '0 auto',
  },
  blue: {
    color: '#008000',
  },
  headOne: {
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    color: '#08a3d9',
    textTransform: 'uppercase',
  },
  balloonGallery: {
    '& div': {
      background: '#000380',
      height: '100px',
      width: '100px',
      textAlign: 'center',
      color: '#000380',
      fontSize: '40px',
      fontFamily: 'san-serif, arial',
      borderRadius: '50%',
      marginTop: '20px',
      display: 'inline-block',
      margin: '2.5px 5px 2.5px 0px',
    },
    '& div:nth-child(10n)': {
      background: '#800000',
      color: '#800000',
    },
    '& div:nth-child(3n)': {
      background: '#ffce00',
      color: '#ffce00',
    },
    '& div:nth-child(4n)': {
      clear: 'right',
    },
  },
  Noballoons: {
    display: 'none',
    color: '#ff3300',
    fontSize: '100px',
  },
});

export default useStyles;
