export default function MarketingPanel () {
  return (
  <section className="hidden md:flex flex-col justify-between items-start p-14 bg-primary text-white w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
    {/* Logo and title */}
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-2">
        10XLearn
      </div>
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-[32px] font-medium tracking-[0.4px] mt-5">Why 10XLearn?</h1>
        <p className="text-[20px] font-medium tracking-[0.4px]">Turn uncertainty into insights.</p>
      </div>

      {/* Feature list */}
      <ul className="flex flex-col gap-6 w-full mb-16">
        <li className="flex items-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 text-green-400 mt-0.5"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="m9 12 2 2 4-4"/></svg>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Instant mock test powered by AI</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 text-green-400 mt-0.5"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="m9 12 2 2 4-4"/></svg>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Real-time analysis and reporting from tests results</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 text-green-400 mt-0.5"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="m9 12 2 2 4-4"/></svg>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Localised insights across key African universities</span>
          </div>
        </li>
      </ul>
    </div>

    {/* Footer links */}
    <div className="flex gap-8 text-sm">
      <a href="#" className="hover:underline">Help</a>
      <a href="#" className="hover:underline">Terms</a>
      <a href="#" className="hover:underline">Privacy</a>
    </div>
  </section>
);
}