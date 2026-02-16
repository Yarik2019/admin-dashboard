"use client";
import Header from "../Header/Header";
// import AppSidebar from "../Sidebar/AppSidebar";
// import Main from "../Main/Main";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Main from "../Main/Main";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import "@/app/style.css";
const SharedLayout: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Сторінки без Header/Sidebar
  const hideLayoutPage = ["/login", "/signup"];
  const hideLayout = hideLayoutPage.some((path) => pathname.startsWith(path));

  return (
    <>
      {!hideLayout ? (
        <div className="w-full flex flex-col">
          <Header />
          <SidebarProvider
            className=" @container/main "
            open={open}
            onOpenChange={setOpen}
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
          >
            {/* <AppSidebar open={open} /> */}
            <AppSidebar open={open} />
            <SidebarTrigger onClick={() => setOpen(!open)} />
            <Main className="@container/main w-full">{children}</Main>
          </SidebarProvider>
        </div>
      ) : (
        <Main className="@container/main w-full">{children}</Main>
      )}
    </>
  );
};

export default SharedLayout;
