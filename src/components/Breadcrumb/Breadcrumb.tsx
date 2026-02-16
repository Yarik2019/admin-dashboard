"use client";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
interface BreadcrumbCollapsedProps {
  items: { title: string; to: string }[];
}
const BreadcrumbCollapsed = ({ items }: BreadcrumbCollapsedProps) => {
  const breadcrumbItems = [{ title: "Home", to: "/" }, ...items];
  return (
    <Breadcrumb className="w-full">
      <BreadcrumbList className="w-full flex">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          return (
            <span key={index} className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  {isLast ? (
                    <BreadcrumbPage>{item.title}</BreadcrumbPage>
                  ) : (
                    <Link href={item.to}>{item.title}</Link>
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator className="mx-2" />
              )}
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbCollapsed;

//  <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
//             </BreadcrumbItem>
