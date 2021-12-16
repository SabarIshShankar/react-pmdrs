export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 40,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none"
      }}
    >
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            fontWeight: "700",
            lineHeight: "30px",
            color: "black",
            letterSpacing: -2
          }}
        ></p>
        <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}>
          <p
            className="full"
            style={{
              flex: "1 1 0%",
              height: 12,
              fontSize: 12,
              lineHeight: "12px",
              textAlign: "center",
              color: "black",
              whiteSpace: "nowrap"
            }}
          ></p>
          <p
            className="full"
            style={{
              flex: "1 1 0%",
              height: 12,
              fontSize: 12,
              lineHeight: "12px",
              textAlign: "center",
              color: "black"
            }}
          ></p>
          <p
            className="full"
            style={{
              flex: "1 1 0%",
              height: 12,
              fontSize: 12,
              lineHeight: "12px",
              textAlign: "center",
              color: "black"
            }}
          ></p>
          <p
            className="full"
            style={{
              flex: "1 1 0%",
              height: 12,
              fontSize: 12,
              lineHeight: "12px",
              textAlign: "center",
              color: "black"
            }}
          ></p>
        </div>
        <p
          style={{
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            lineHeight: "30px",
            textAlign: "right",
            color: "black"
          }}
        ></p>
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center"
        }}
      >
        <p
          style={{
            flex: "1 1 0%",
            height: "100%",
            fontSize: 12,
            lineHeight: "1.5em",
            color: "black"
          }}
        ></p>
        <div style={{ width: 10 }} />
        <p
          style={{
            transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
            transformOrigin: "right",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: "100%",
            textAlign: "right",
            color: "black",
            whiteSpace: "nowrap"
          }}
        ></p>
      </div>
      <div style={{ height: 10 }} />
      <div
        className="full"
        style={{
          fontFamily: "'Antonio', sans-serif",
          width: "100%",
          flex: "1 1 0%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
        <p
          style={{
            flex: "1 1 0%",
            fontSize: 250,
            lineHeight: "1em",
            color: "black",
            margin: 0,
            letterSpacing: -10
          }}
        >
          X
        </p>
        <div style={{ width: 10 }} />
        <p
          style={{
            flex: "1 1 0%",
            fontSize: 250,
            lineHeight: "100%",
            textAlign: "right",
            color: "black",
            margin: 0,
            letterSpacing: -10
          }}
        >
          01-
        </p>
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          pointerEvents: "all",
          pointer: "auto",
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
        <p
          className="full"
          style={{
            whiteSpace: "nowrap",
            flex: "1 1 0%",
            fontSize: 12,
            lineHeight: "1.5em",
            color: "black"
          }}
        ></p>
        <div style={{ width: 10 }} />
        <p
          className="full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            fontSize: 16,
            fontWeight: "700",
            lineHeight: "1em",
            textAlign: "center",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "nowrap"
          }}
        ></p>
        <div style={{ width: 10 }} />
        <p
          className="full"
          style={{
            flex: "1 1 0%",
            fontSize: 12,
            lineHeight: "1em",
            textAlign: "right",
            color: "black"
          }}
        ></p>
      </div>
    </div>
  );
}

export function Overlay() {
  return (
    <div style={{ position: "absolute", bottom: 40, right: 40 }}>
      <p
        style={{
          flex: "1 1 0%",
          fontSize: 12,
          lineHeight: "1em",
          textAlign: "right",
          color: "black"
        }}
      ></p>
    </div>
  );
}
