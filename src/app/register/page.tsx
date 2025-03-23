import Logo from "@/assets/svg/Logo";
import Register from "@/components/modules/auth/register/Register";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-[url('/loginbg.png')] bg-cover bg-center flex items-center justify-center">
      <div className="border-2 border-gray-200 rounded-xl flex-grow max-w-md w-full p-10 bg-[#F6F6F6]">
        <div className="flex gap-6 items-center mb-6">
          <Logo />
          <div>
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <p className="text-[#0F0E0EB3]">
              Enter your phone number to sign in.
            </p>
          </div>
        </div>
        <Register />
        <p className="text-[#0F0E0EB3] text-center mt-6">Already have an account? <span className="text-black font-semibold">Sign In</span></p>
      </div>
    </div>
  );
};

export default RegistrationPage;
