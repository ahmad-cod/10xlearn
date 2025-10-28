import MarketingPanel from "@/components/marketing-panel";

export default function AuthLayout({
  children
}: Readonly <{
  children: React.ReactNode
}>
) {
  return (
    <div className="flex min-h-svh w-full">
      <MarketingPanel />
      {children}
    </div>
  );
}