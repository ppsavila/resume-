export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
            padding: "28px 24px",
            textAlign: "center",
        }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                <span style={{ color: "var(--accent)" }}>{"<"}</span>
                ppsavila
                <span style={{ color: "var(--accent)" }}>{"/>"}</span>
                {" "}·{" "}
                Built with React + Vite ·{" "}
                {year}
            </p>
        </footer>
    );
}
