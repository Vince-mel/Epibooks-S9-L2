import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <Alert variant="secondary">
      <Alert.Heading className='text-center'>Hey, nice to see you!! Welcome to EpiBooks!!</Alert.Heading>
      <hr />
      <p className='text-center'>
      Epibooks is your online bookstore offering a wide range of books across various genres. From international bestsellers to timeless classics, we've got you covered. Discover your next great read at Epibooks!
      </p>
      
      
    </Alert>
  );
}

export default Welcome;