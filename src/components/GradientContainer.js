export default function GradientContainer({ children, className, ...props }) {
  return (
    <div className="relative p-1 bg-gradient-to-br from-yellow-400 to-blue-600 via-pink-500">
      <div className={className || 'bg-black'} {...props}>
        {children}
      </div>
    </div>
  );
}
