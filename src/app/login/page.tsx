import Logo from "@/assets/svg/Logo";
import LoginForm from "@/components/modules/auth/login/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[url('/loginbg.png')] bg-cover bg-center flex items-center justify-center">
      <div className="border-2 border-gray-200 rounded-xl flex-grow max-w-md w-full p-10 bg-[#F6F6F6]">
        <div className="flex gap-6 items-center mb-6">
          <Logo />
          <div>
            <h2 className="text-3xl font-bold">Sign In</h2>
            <p className="text-[#0F0E0EB3]">
              Enter your email to sign in.
            </p>
          </div>
        </div>
        <LoginForm />
        <p className="text-[#0F0E0EB3] text-center mt-6">Do not have an account? <Link href="/register" className="text-black font-semibold">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
