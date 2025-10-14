
export default function Bulle({ onExplosion }) {
  return (
    <div
      onClick={onExplosion}
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "skyblue",
        cursor: "pointer",
        display: "inline-block",
        margin: "1rem",
        fontSize: "2rem",
        lineHeight: "80px",
        textAlign: "center",
      }}
    >
      🎈
    </div>
  );
}
