import { Component } from "react";

import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
// ре-экспорт
import ColorPicker from "./components/ColorPicker";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Container from "./components/Container";
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    showModal: false,
    users:[],
  };


  handleFormSubmit = (data) => {
   //console.log(data);
  //   const user = name;
  //  console.log(user);
  //   return user;
   
  };


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // const data = this.handleFormSubmit();
    const { showModal } = this.state;
   
    // const user = this.handleFormSubmit();
    // console.log(user);

    return (
      <Container>
        <ColorPicker options={colorPickerOptions} />
        <Counter />
        <Dropdown />
        {showModal && (
          <Modal onClose = {this.toggleModal}>
            <h2>My modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus enim harum labore sit rem earum, facilis maiores
              velit obcaecati, quis ad. Possimus molestias qui ipsa rem fugit
              maxime blanditiis illo temporibus maiores. Veritatis eveniet
              praesentium, voluptatum aperiam quos non adipisci commodi nam enim
              ipsum? Obcaecati in ullam modi consequatur cupiditate nulla,
              maxime nobis ducimus ut error repudiandae pariatur doloribus non
              esse iste fugiat! Non, ipsum esse? Magni aut officiis quam eum
              aperiam sunt iure quidem dolore perspiciatis. Tenetur, possimus
              nostrum error praesentium ullam eum eaque beatae, dolore rem neque
              saepe aperiam inventore ducimus ipsam accusantium. Doloribus illo
              assumenda perspiciatis, impedit ipsam labore quos repudiandae!
              Ipsum suscipit minima pariatur deserunt reprehenderit atque
              dignissimos unde sit quasi accusantium at adipisci sed voluptatum,
              optio voluptates temporibus corrupti illo enim, ex qui
              necessitatibus eos, ipsa itaque. Culpa, vitae placeat assumenda
              illum sint nisi consequuntur recusandae quisquam provident maxime
              aspernatur harum est laboriosam quis facere odio unde! Debitis
              autem necessitatibus rem velit, numquam aliquid animi optio fuga
              mollitia vitae nisi voluptatibus quod. Nisi voluptas delectus
              labore eum possimus quam asperiores? Facilis quam soluta, aliquid
              vero labore laboriosam, cumque doloremque eveniet similique, ab
              quo dolorem aperiam rerum minima cum voluptates blanditiis
              temporibus incidunt ullam? Eligendi, nobis?
            </p>
            <button onClick={this.toggleModal} type="button">
              close modal
            </button>
          </Modal>
        )}

        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        <Form onFormSubmit={this.handleFormSubmit} />
{/* 
         <p>Name:{user}</p>
        <p>Surname:{user}</p>
         <p>Level:{user}</p> */}
      </Container>
    );
  }
}

export default App;
