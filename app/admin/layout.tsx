import HeaderAdmin from "../components/admin/HeaderAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderAdmin />
      {children}
    </div>
  );
}
