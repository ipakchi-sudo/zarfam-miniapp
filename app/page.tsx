export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f3eb",
        padding: "24px",
        fontFamily: "sans-serif",
        color: "#222",
      }}
    >
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 24,
          padding: 24,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "#d4af37",
              margin: "0 auto 12px",
            }}
          />
          <h1 style={{ margin: 0, fontSize: 28 }}>زرفام</h1>
          <p style={{ marginTop: 8, color: "#666", lineHeight: 1.8 }}>
            ثبت سفارش عمده و خرده
          </p>
        </div>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>نوع مشتری</h2>
          <div style={{ display: "grid", gap: 12 }}>
            <button
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid #ddd",
                background: "#faf8f1",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              خرید عمده
            </button>
            <button
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid #ddd",
                background: "#faf8f1",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              خرید خرده
            </button>
          </div>
        </section>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>گروه‌های مشتری</h2>
          <div style={{ display: "grid", gap: 10 }}>
            <div style={{ padding: 12, borderRadius: 12, background: "#f8f8f8" }}>
              عمده: لوازم قنادی، پخش‌ها، جعبه‌سازی‌ها
            </div>
            <div style={{ padding: 12, borderRadius: 12, background: "#f8f8f8" }}>
              خرده: قنادی‌ها، کارگاه‌ها، خانگی
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>دسته‌بندی محصولات</h2>
          <div style={{ display: "grid", gap: 10 }}>
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
                  padding: 14,
                  borderRadius: 12,
                  border: "1px solid #e5e5e5",
                  background: "#fffdf8",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>ثبت سفارش اولیه</h2>
          <form style={{ display: "grid", gap: 12 }}>
            <input
              placeholder="نام / نام مجموعه"
              style={inputStyle}
            />
            <input
              placeholder="شماره تماس"
              style={inputStyle}
            />
            <input
              placeholder="شهر"
              style={inputStyle}
            />
            <textarea
              placeholder="آدرس و توضیحات سفارش"
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button
              type="button"
              style={{
                padding: "15px 16px",
                borderRadius: 14,
                border: "none",
                background: "#d4af37",
                color: "#111",
                fontSize: 16,
                fontWeight: 800,
              }}
            >
              ثبت درخواست
            </button>
          </form>
        </section>

        <div
          style={{
            textAlign: "center",
            color: "#777",
            fontSize: 13,
            lineHeight: 1.8,
          }}
        >
          نسخه اولیه مینی‌اپ زرفام
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 14px",
  borderRadius: 12,
  border: "1px solid #ddd",
  fontSize: 15,
  background: "#fff",
  boxSizing: "border-box" as const,
};
