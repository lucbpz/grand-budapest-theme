import { Component, useState } from "React";

class Wow extends Component {

  constructor(props) {
    super(props);
  }

  const myFunc = (a, b) => `${a} with Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Praesent vestibulum diam quis diam eleifend vulputate vel et est. Ut rhoncus diam nunc, et vehicula nisl porta luctus.
  Praesent est magna, ornare in pretium eget, vehicula quis dui. Aenean laoreet justo nec lacus tempor auctor.
  Praesent vel dolor sit amet neque mattis accumsan eu sit amet massa. Nunc sagittis sapien neque, eget egestas massa vehicula eget.
  Nullam vitae risus ligula. Fusce vestibulum nisl non erat luctus egestas. Morbi porta euismod ultrices. Nullam sit amet justo ac ex egestas blandit.
  Proin nibh dolor, pulvinar non fringilla in, dictum vel libero. Mauris vulputate tortor nec suscipit dictum.
  Pellentesque ut dictum odio, sed lacinia elit.
  Cras consectetur felis vitae ornare ultricies.
  ${b}`;

  state = {
    text: 'example'
  };

  render() {
    return (
      <div className="wow">
        {myFunc('hi', 'bye')}
        <input type="number" value={() => onchange('hola')} />
      </div>
    );
  }
}

export default Wow;
