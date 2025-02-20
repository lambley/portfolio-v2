import BackButton from "@/components/backButton";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose max-w-none my-16">
      <BackButton backPath="/blog" buttonText="Back to Blog" />
      {children}
    </div>
  );
}
