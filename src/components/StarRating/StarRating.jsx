import { FaStar } from "react-icons/fa";

function StarRating({
  count,
  value,
  innacTiveColor = "#ddd",
  size = 15,
  activeColor = "#e4e5e9",
  onChange,
}) {
  const stars = Array.from({ length: count }, () => <FaStar />);

  const hendleChange = (value) => {
    onChange(value + 1);
  };

  return (
    <div>
      {stars.map((s, index) => {
        let style = innacTiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={"star"}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
            onClick={() => hendleChange(index)}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
