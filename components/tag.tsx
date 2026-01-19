type TagProps =
{
    children: React.ReactNode
}

export default function Tag({children}:TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white/80">
      {children}
    </span>
  );
}
