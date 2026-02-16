"use client";
import { useAuth } from "@/components/context/AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);
  if (!user) return null;

  return <>{children}</>;
};

export default PrivateRoute;
