"use client";
import React from "react";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import BreadcrumbCollapsed from "@/components/Breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";
import ColorPicker from "@/components/StylesPicker/ColorPicker";
import BgColorPicker from "@/components/StylesPicker/BgColorPicker";
import BoxShadowPicker from "@/components/StylesPicker/BoxShadowPicker";

export default function SettingsColorPage() {
  const pathname = usePathname();
  const breadcrumbItems = [
    { title: "Settings", to: pathname },
    { title: "Colors", to: `${pathname}/colors` },
  ];
  return (
    <PrivateRoute>
      <div className="">
        <div className="px-4 py-0 lg:py-1">
          <BreadcrumbCollapsed items={breadcrumbItems} />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center gap-6 flex-wrap p-4 w-full max-w-auto ">
            <ColorPicker />
            <BgColorPicker />
            <BoxShadowPicker />
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
