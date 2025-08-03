import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full max-w-7xl mx-auto">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[300px] w-[300px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] opacity-50 blur-[80px]"></div>
      <div className="absolute top-auto right-auto left-0 bottom-0 h-[300px] w-[300px] translate-x-[30%] -translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] opacity-50 blur-[80px]"></div>
      <SignUp />
    </div>
  );
}
