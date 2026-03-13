import { Button } from "@base-ui/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ClerkLogo } from "@/components/icons/clerk-logo";

export const Navbar = () => {
  return (
    <header className="absolute top-1/2 left-1/2 mt-8 flex h-12 w-308 -translate-x-1/2 -translate-y-1/2 transform items-center justify-between rounded-xl border px-4 shadow-sm">
      <div className="flex items-center justify-center gap-6">
        <ClerkLogo />
        <nav className="flex items-start justify-center gap-4 text-[13px] font-semibold">
          <Link href="#" className="flex items-center justify-center gap-1">
            Product <ChevronDown className="size-3" />
          </Link>
          <Link href="#" className="flex items-center justify-center gap-2">
            Docs <ChevronDown className="size-3" />
          </Link>
          <Link href="#" className="flex items-center justify-center gap-1">
            Changelog <ChevronDown className="size-3" />
          </Link>
          <Link href="#" className="flex items-center justify-center gap-1">
            Company <ChevronDown className="size-3" />
          </Link>
          <Link href="#" className="flex items-center justify-center gap-1">
            Pricing
          </Link>
        </nav>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button className="drop-shadow-accent text-[13px] font-semibold">
          Sing in
        </Button>
        <Button className="drop-shadow-accent text-[13px] font-semibold">
          Start Building
        </Button>
      </div>
    </header>
  );
};
