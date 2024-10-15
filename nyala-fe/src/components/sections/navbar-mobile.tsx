"use client";
import { usePathname } from "next/navigation";
import { Icons } from "../fragments/icons";
import Link from "next/link";
import { cn } from "ln/utils/cn";

const NavbarMobile = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center">
      <div className="bg-white flex justify-around h-[58px] items-center border-t border-border fixed w-full px-3 bottom-0 max-w-2xl">
        <Link
          href="/"
          className={cn(
            pathname === "/" ? "text-primary" : "text-icon",
            "flex flex-col items-center gap-[6px]"
          )}>
          <Icons.house strokeWidth={pathname === "/" ? 2 : 1.25} />
          <span
            className={cn(
              pathname === "/" ? "font-semibold" : "font-normal",
              "text-[10px]"
            )}>
            Beranda
          </span>
        </Link>
        <Link
          href="/explore"
          className={cn(
            pathname === "/explore" ? "text-primary" : "text-icon",
            "flex flex-col items-center gap-[6px]"
          )}>
          <Icons.search strokeWidth={pathname === "/explore" ? 2 : 1.25} />
          <span
            className={cn(
              pathname === "/explore" ? "font-semibold" : "font-normal",
              "text-[10px]"
            )}>
            Explore
          </span>
        </Link>
        <Link
          href="/posting/buat"
          className={cn(
            pathname === "/posting/buat" ? "text-primary" : "text-icon",
            "flex flex-col items-center gap-[6px]"
          )}>
          <Icons.createPost
            strokeWidth={pathname === "/posting/buat" ? 2 : 1.25}
          />
          <span
            className={cn(
              pathname === "/posting/buat" ? "font-semibold" : "font-normal",
              "text-[10px]"
            )}>
            Posting
          </span>
        </Link>
        <Link
          href="/list"
          className={cn(
            pathname === "/list" ? "text-primary" : "text-icon",
            "flex flex-col items-center gap-[6px]"
          )}>
          <Icons.map strokeWidth={pathname === "/list" ? 2 : 1.25} />
          <span
            className={cn(
              pathname === "/list" ? "font-semibold" : "font-normal",
              "text-[10px]"
            )}>
            List
          </span>
        </Link>
        <Link
          href="/pengguna"
          className={cn(
            pathname === "/pengguna" ? "text-primary" : "text-icon",
            "flex flex-col items-center gap-[6px]"
          )}>
          <Icons.user strokeWidth={pathname === "/pengguna" ? 2 : 1.25} />
          <span
            className={cn(
              pathname === "/pengguna" ? "font-semibold" : "font-normal",
              "text-[10px]"
            )}>
            Pengguna
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMobile;
