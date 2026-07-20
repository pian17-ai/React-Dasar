import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  title: string;
}

const AuthLayouts = ({children, title} : CardProps) => {
  return (
    <div className="flex justify-center bg-gray-900 min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-300 text-3xl font-bold mb-2">Login</h1>
        <p className="font-medium text-slate-400">
          Welcome, Please enter your detail
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
