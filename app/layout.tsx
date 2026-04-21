export const metadata = {
  title: "Zarfam",
  description: "Zarfam Mini App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
