"use client";

import NavMenu from "@/libs/constants/navMenu";
import { cn } from "@/utils/style";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className={cn("w-full border-b border-slate-200 py-6")}>
      <div className={cn("container flex items-center justify-between")}>
        <div className={cn("flex items-center")}>
          <Link href={"/"}>
            <Image
              src={"/images/Logo.png"}
              className="transition-all ease-in-out hover:opacity-60"
              alt="logo"
              width={240}
              height={0}
              priority
            />
          </Link>
        </div>
        <div className={cn("hidden items-center gap-12", "lg:flex")}>
          {NavMenu.map((menu, index) => (
            <Link
              className="text-xl font-semibold transition-all ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent"
              href={menu.url}
              key={index}
            >
              {menu.menu}
            </Link>
          ))}
        </div>
        <div className={cn("flex items-center gap-4")}>
          {!session ? (
            <>
              <Link
                className=" text-xl font-semibold transition-all ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent"
                href={"/login"}
              >
                로그인
              </Link>
              <Link
                className=" text-xl font-semibold transition-all ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent"
                href={"/signup"}
              >
                회원가입
              </Link>
            </>
          ) : (
            <Profile name={session.user.name} imageUrl={session.user.image} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
