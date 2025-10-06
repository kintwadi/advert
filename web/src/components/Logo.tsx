export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-semibold tracking-tight text-xl ${className}`}>
      <span className="text-primary">MGP</span> Angola
    </div>
  );
}
