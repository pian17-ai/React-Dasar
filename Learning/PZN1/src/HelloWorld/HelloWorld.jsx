import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Piann from spread syntax",
  };

  return (
    <div>
      <HeaderHelloWorld />
      <Kubo {...props} />
    </div>
  );
}

function HeaderHelloWorld() {
  const text = "Hello World";
  const style = {
    color: "white",
    backgroundColor: "gray",
  };
  return (
    <div>
      <h1 style={style}>{text.toUpperCase()}</h1>
      <p className="title">Woi Selamat Belajar React</p>
    </div>
  );
}

function Kubo({ text = "Default text" }) {
  const my = "Nagisa Kubo";
  return (
    <div>
      <h1
        style={{
          color: "purple",
          backgroundColor: "magenta",
        }}
      >
        {my.toUpperCase()}
      </h1>
      <h2 className="content">{text.toUpperCase()}</h2>
      <p>Nagisa Kubo is very very beautiful and cute girl</p>
    </div>
  );
}
