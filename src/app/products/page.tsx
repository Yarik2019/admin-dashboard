"use client";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

import BreadcrumbCollapsed from "@/components/Breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";
const ProductsPage = () => {
  const pathname = usePathname();
  const breadcrumbItems = [
    { title: "Суперзірки ", to: pathname },
    { title: "Олександр", to: `${pathname}/alexander-usyk` },
  ];
  return (
    <PrivateRoute>
      <div>
        <div className="px-4 py-0 lg:py-1">
          <BreadcrumbCollapsed items={breadcrumbItems} />
        </div>
        <h1>Products</h1>
      </div>
    </PrivateRoute>
  );
};

export default ProductsPage;
