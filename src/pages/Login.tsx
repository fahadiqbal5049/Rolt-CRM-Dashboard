import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-full flex justify-center items-center  relative ">
      <img src="/login-gradient.png" className="absolute top-0 left-0 w-full h-full -z-10" alt="" />
      <div className="w-full gap-4 flex flex-col  max-w-[425px] text-neutral-50">
        <div className="w-full gap-6 flex flex-col  bg-neutral-600  rounded-md  p-6">
          <img src="/logo-white.png" className="h-[57px] self-center" alt="" />
          <form action="" className="flex flex-col gap-4">
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="user" className="text-sm">
                User
              </label>
              <Input type="text" id="user" placeholder="Example" />
            </div>
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Input type="password" id="password" placeholder="*************" />
            </div>
            <Button onClick={() => navigate("/")} className="   mt-4">
              Sign In
            </Button>
            <a href="" className="mt-4 text-sm font-light">
              Forgot your password?
            </a>
          </form>
        </div>
        <div className="w-full gap-4 flex flex-col  bg-neutral-600  rounded-md  p-6">
          <a href="" className=" text-sm font-light">
            Don't have an account?
          </a>
          <Button variant="primary">Sign up now</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
