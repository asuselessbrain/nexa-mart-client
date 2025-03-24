'use client'
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/userContext";

const HomePage = () => {
  const user = useUser()
  console.log(user);
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
};

export default HomePage;