const Color = ({ color, setSelectedColor, selectedColor }) => {
  return (
    <>
      <div
        className={`circle ${color} ${
          selectedColor === color ? "borderColor" : ""
        }`}
        onClick={() => setSelectedColor(color)}
      ></div>
    </>
  );
};

export default Color;
