const RSComponent = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "150px",
        height: "100px",
        padding: "10px",
      }}
    >
      <p>Server Component</p>
      {text}
    </div>
  );
};

export default RSComponent;
