import Image from "../Assets/Pictures/confirmed.png";

class Locations extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + Image + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}
      />
    );
  }
}
