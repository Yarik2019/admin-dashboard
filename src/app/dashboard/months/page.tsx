"use client";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

import BreadcrumbCollapsed from "@/components/Breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { useState } from "react";

const Months = () => {
  const pathname = usePathname();
  const breadcrumbItems = [
    { title: "Dashboard", to: pathname },
    { title: "Months", to: `${pathname}/months` },
  ];
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });
  return (
    <PrivateRoute>
      <div className="">
        <div className="px-4 py-0 lg:py-1">
          <BreadcrumbCollapsed items={breadcrumbItems} />
        </div>
        <div className="flex justify-center py-4  md:py-6">
          <Calendar
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            className="rounded-lg border shadow-sm"
          />
        </div>
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
      </div>
    </PrivateRoute>
  );
};
export default Months;
