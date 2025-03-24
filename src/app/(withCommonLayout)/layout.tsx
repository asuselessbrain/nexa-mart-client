import NavBar from "@/components/shared/NavBar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="h-52 lg:h-28">
        <NavBar />
      </div>
      {children}
    </div>
  );
};

export default CommonLayout;
