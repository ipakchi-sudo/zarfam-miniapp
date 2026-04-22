export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f8f4ea 0%, #f2ead7 45%, #efe6d2 100%)",
        padding: "24px 16px 40px",
        fontFamily: "sans-serif",
        color: "#1f1a12",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(180,150,90,0.22)",
            borderRadius: 28,
            padding: 24,
            boxShadow: "0 12px 40px rgba(86, 67, 24, 0.08)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#fff8e7",
              border: "1px solid #e5d2a0",
              color: "#8a6a1f",
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            مینی‌اپ رسمی زرفام
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 34,
              lineHeight: 1.2,
              fontWeight: 900,
            }}
          >
            سفارش ظروف و محصولات زرفام
          </h1>

          <p
            style={{
              marginTop: 14,
              marginBottom: 0,
              fontSize: 16,
              lineHeight: 1.9,
              color: "#4b4436",
            }}
          >
            ثبت سفارش سریع برای مشتریان عمده و خرده، با مسیر جداگانه برای
            لوازم قنادی، پخش‌ها، جعبه‌سازی‌ها، قنادی‌ها، کارگاه‌ها و مصرف خانگی.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 22,
            }}
          >
            <a
              href="https://tally.so/r/NpBjQO"
              style={primaryButton}
            >
              ثبت سفارش
            </a>

            <a
              href="https://t.me/zarfamsalebot"
              style={secondaryButton}
            >
              ورود به ربات تلگرام
            </a>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 16,
            marginTop: 20,
          }}
        >
          <div style={cardStyle}>
            <h2 style={sectionTitle}>مسیر عمده</h2>
            <p style={sectionText}>
              مناسب برای ثبت سفارش‌های همکاری و تیراژ بالاتر.
            </p>

            <div style={chipWrap}>
              <span style={chipStyle}>لوازم قنادی</span>
              <span style={chipStyle}>پخش‌ها</span>
              <span style={chipStyle}>جعبه‌سازی‌ها</span>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitle}>مسیر خرده</h2>
            <p style={sectionText}>
              مناسب برای سفارش سریع، کارگاهی و مصرف روزمره.
            </p>

            <div style={chipWrap}>
              <span style={chipStyle}>قنادی‌ها</span>
              <span style={chipStyle}>کارگاه‌ها</span>
              <span style={chipStyle}>خانگی</span>
            </div>
          </div>
        </section>

        <section style={{ ...cardStyle, marginTop: 20 }}>
          <h2 style={sectionTitle}>دسته‌بندی محصولات</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
              marginTop: 14,
            }}
          >
            {[
              "صفحه و دسری",
              "سینی و بشقاب",
              "بسته‌بندی",
              "متالایز",
              "سایر محصولات",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#fffdf8",
                  border: "1px solid #eadfbe",
                  borderRadius: 18,
                  padding: "16px 14px",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section style={{ ...cardStyle, marginTop: 20 }}>
          <h2 style={sectionTitle}>ثبت سفارش سریع</h2>
          <p style={sectionText}>
            برای شروع، روی دکمه زیر بزن و فرم سفارش را تکمیل کن.
          </p>

          <a
            href="https://tally.so/r/NpBjQO"
            style={{ ...primaryButton, marginTop: 10, display: "inline-flex" }}
          >
            شروع ثبت سفارش
          </a>
        </section>

        <footer
          style={{
            marginTop: 22,
            textAlign: "center",
            color: "#6b604b",
            fontSize: 13,
            lineHeight: 1.9,
          }}
        >
          زرفام · سفارش عمده و خرده · نسخه اولیه مینی‌اپ
        </footer>
      </div>
    </main>
  );
}

const primaryButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: 16,
  background: "linear-gradient(135deg, #d7b14a 0%, #b98c26 100%)",
  color: "#1f1604",
  fontWeight: 800,
  fontSize: 15,
  boxShadow: "0 10px 24px rgba(169, 122, 17, 0.22)",
};

const secondaryButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: 16,
  background: "#fff",
  color: "#4d4126",
  border: "1px solid #dbc790",
  fontWeight: 800,
  fontSize: 15,
};

const cardStyle = {
  background: "rgba(255,255,255,0.8)",
  border: "1px solid rgba(180,150,90,0.20)",
  borderRadius: 24,
  padding: 20,
  boxShadow: "0 10px 30px rgba(86, 67, 24, 0.06)",
};

const sectionTitle = {
  margin: 0,
  fontSize: 22,
  fontWeight: 900,
};

const sectionText = {
  marginTop: 10,
  marginBottom: 0,
  color: "#544a39",
  lineHeight: 1.9,
  fontSize: 15,
};

const chipWrap = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: 10,
  marginTop: 16,
};

const chipStyle = {
  background: "#fff7df",
  border: "1px solid #e7d29f",
  borderRadius: 999,
  padding: "10px 14px",
  fontSize: 14,
  fontWeight: 700,
  color: "#6a531c",
};
