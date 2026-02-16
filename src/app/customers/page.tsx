"use client";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import BreadcrumbCollapsed from "@/components/Breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";

const CustomersPage = () => {
  const pathname = usePathname();
  const breadcrumbItems = [
    { title: "Суперзірки", to: pathname },
    { title: "Олександр Усик", to: `${pathname}/alexander-usyk` },
  ];
  return (
    <PrivateRoute>
      <div className="w-full">
        <BreadcrumbCollapsed items={breadcrumbItems} />
        <div className="p-4">
          <h1 className="">Customers</h1>
          <h1 className="">Customers</h1>
          <h1 className="">Customers</h1>

          <h1 className="">Customers</h1>
          <h1 className="">Customers</h1>

          <h1 className="">Customers</h1>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default CustomersPage;
