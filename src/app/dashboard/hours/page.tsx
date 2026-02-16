"use client";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

import BreadcrumbCollapsed from "@/components/Breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";

const Hours = () => {
  const pathname = usePathname();
  const breadcrumbItems = [
    { title: "Dashboard", to: pathname },
    { title: "Hours", to: `${pathname}/hours` },
  ];
  return (
    <PrivateRoute>
      <div className="">
        <div className="px-4 py-0 lg:py-1">
          <BreadcrumbCollapsed items={breadcrumbItems} />
        </div>
        <h1>Hours</h1>
      </div>
    </PrivateRoute>
  );
};

export default Hours;
