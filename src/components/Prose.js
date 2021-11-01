export default function Prose({ children }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="prose lg:prose-lg mx-auto py-4 w-full">{children}</div>
    </div>
  );
}
