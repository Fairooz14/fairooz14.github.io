import { awardsData } from "@/data/awards";

export default function Awards() {
  return (
    <section>
      <h2>Awards & Recognitions</h2>
      <div>
        {awardsData.map((award, index) => (
          <div key={index} style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ minWidth: "3rem", color: "var(--muted)", fontSize: "0.85rem", paddingTop: "2px" }}>
              {award.year}
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>{award.title}</div>
              <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{award.organization}</div>
              {award.description && (
                <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "2px" }}>
                  {award.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}