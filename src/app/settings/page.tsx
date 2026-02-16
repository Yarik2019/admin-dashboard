"use client";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import BreadcrumbCollapsed from "@/components/Breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";
const SettingsPage = () => {
  const pathname = usePathname();
  const breadcrumbItems = [{ title: "Settings", to: pathname }];
  return (
    <PrivateRoute>
      <div className="">
        <div className="px-4 py-0 lg:py-1">
          <BreadcrumbCollapsed items={breadcrumbItems} />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default SettingsPage;
