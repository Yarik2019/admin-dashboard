import { toast } from "sonner";

export const showSuccessToast = ({ message, style }) => {
  toast.success(message, {
    style: {
      background: style?.background || "white",
      color: style?.color || "green",
    },
    icon: "✅",
  });
};
export const showErrorToast = ({ message, style }) => {
  toast.error(message, {
    style: {
      background: style?.background || "white",
      color: style?.color || "red",
    },
    icon: "🚩",
  });
};
