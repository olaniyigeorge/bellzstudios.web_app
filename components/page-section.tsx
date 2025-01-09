export default function PageSection({ id, children, className }: { children: React.ReactNode; className?: string; id: string, }) {
    return (
      <div
        id={id}
        className={`xs:min-w-100px sm:max-w-400 md:max-w-1200px lg:max-w-1440px w-full gap-3 my-3 md:my-0 text-gray-800  flex flex-col md:flex-row justify-between items-center px-6 px-20 lg:px-40 gap-1 ${className} my-5`}
  
        >
      
          {children}
      </div>
    );
  };
  