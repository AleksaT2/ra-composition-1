import Card from './components/Card';

const props = {
  title: 'Card title',
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
  imgSrc: "https://i.pinimg.com/originals/ae/73/ad/ae73ad4c9aa5210598ab9c78b2a5fae1.jpg", 
  buttonText: "Go somewhere"
}

function App() {
  

  return (
    <Card 
    title={props.title} 
    text={props.text}
    imgSrc={props.imgSrc}
    buttonText={props.buttonText} />
  );
}

export default App
