import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Welcome } from "@/components/welcome";
import { Workspace } from "@/components/workspace";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col">
      <header className="h-14 px-4 border-b flex items-center justify-between">
        <p className="text-xl">Livespace</p>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      <main className="flex-1">
        <SignedOut>
          <Welcome />
        </SignedOut>
        <SignedIn>
          <Workspace />
        </SignedIn>
      </main>
    </div>
  );
}
