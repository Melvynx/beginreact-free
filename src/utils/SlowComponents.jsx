"use client";

export const SlowComponent = ({ width = 200, blackColorOnly = false }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gridTemplateRows: `repeat(${width}, 1fr)`,
        gap: "0px",
        width: `${width * 2}px`,
      }}
    >
      {Array.from({ length: width * width })
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: blackColorOnly
                ? `rgba(100, 100, 100, ${Math.random().toFixed(2)})`
                : `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
                    Math.random() * 255
                  )}, ${Math.floor(Math.random() * 255)})`,
              width: "2px",
              height: "2px",
              display: "inline-block",
            }}
          />
        ))}
    </div>
  );
};
