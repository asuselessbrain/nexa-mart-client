import NavBar from "@/components/shared/NavBar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-28">
        <NavBar />
      </div>
      {children}
    </div>
  );
};

export default CommonLayout;
