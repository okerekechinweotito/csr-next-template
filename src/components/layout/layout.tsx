export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Header
      {children}
      Footer
    </section>
  );
}
