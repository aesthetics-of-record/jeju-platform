"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { MdOutlineDashboard } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { ModeToggle } from "../ModeToggle";
import { MdModelTraining } from "react-icons/md";
import { BsFileEarmarkZip } from "react-icons/bs";
import { MdOutlineManageHistory } from "react-icons/md";
import Image from "next/image";

interface LeftSidebarProps {
  className?: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ className }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: MdOutlineDashboard,
        label: "Dashboard",
        active: pathname === "/dashboard",
        href: "/dashboard",
      },
      {
        icon: BsFileEarmarkZip,
        label: "LabelFile",
        active: pathname === "/model/label",
        href: "/model/label",
      },
      {
        icon: MdModelTraining,
        label: "ModelManage",
        active: pathname === "/model/manage",
        href: "/model/manage",
      },
      {
        icon: MdOutlineManageHistory,
        label: "History",
        active: pathname === "/model/history",
        href: "/model/history",
      },
    ],
    [pathname]
  );

  return (
    <div className={cn("flex", className)}>
      <div className="flex flex-col gap-y-2 h-screen w-[250px] border-r bg-slate-200 dark:bg-slate-900 ">
        <div className="flex flex-col gap-y-2 py-4 text-medium text-sm">
          <section className="px-4 flex items-center gap-x-4">
            {/* <IoLogoIonitron size={60} className="text-blue-400" /> */}
            <Image src={"/logo.png"} alt="logo" width={60} height={60} />
            <div className="text-lg">
              <p className="font-bold">IMAGO-AI</p>
            </div>
          </section>
          <div className="h-6" />
          <section className="flex items-center gap-x-2 px-4">
            <div className="flex-1 flex items-center gap-x-2">
              <IoColorPaletteOutline size={26} />
              <p className="truncate">Theme</p>
            </div>

            <div className="">
              <ModeToggle />
            </div>
          </section>
          <div className="px-4 my-2">
            <Separator className="bg-slate-300 dark:bg-slate-700" />
          </div>

          <section>
            {routes.map((item: any) => {
              return <SidebarItem key={item.label} {...item} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
