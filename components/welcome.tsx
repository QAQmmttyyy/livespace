import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export const Welcome = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="relative w-full h-1/3">
        <Image
          src="undraw_welcoming.svg"
          alt="welcome"
          className="object-contain"
          fill
        />
      </div>
      <p className="mt-8 mb-4">Welcome! Please sign in and enjoy Livespace!</p>
      <SignInButton mode="modal">
        <Button>Sign in</Button>
      </SignInButton>
    </div>
  );
};
