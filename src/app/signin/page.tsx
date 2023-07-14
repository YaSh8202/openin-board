import OAuthButtons from "@/components/SignIn/OAuthButtons";
import SignInForm from "@/components/SignIn/SignInForm";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <main className="h-screen w-screen flex items-stretch ">
      <div className="bg-black place-content-center hidden md:grid w-1/3 md:max-w-xl ">
        <h1 className="font-bold text-white text-5xl lg:text-7xl">Board.</h1>
      </div>
      <div className="flex-1 bg-[#F5F5F5] grid place-content-center">
        <div className="flex flex-col gap-6 ">
          <div className="">
            <h2 className="font-bold text-4xl">Sign In</h2>
            <p>Sign in to your account</p>
          </div>
          <OAuthButtons />
          <SignInForm />
          <div className="flex items-center mx-auto self-stretch">
            <p className="text-secondary">Don&apos;t have an account?&nbsp;</p>
            <Link href="#" className="text-link">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
