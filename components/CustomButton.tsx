import { Button } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function CustomButton({
  children,
  loading = false,
  onClick,
  type = "button",
}: CustomButtonProps) {
  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      type={type}
      onClick={onClick}
      disabled={loading}
      sx={{
        mt: 2,
        py: 1.4,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 700,
      }}
    >
      {loading ? "Carregando..." : children}
    </Button>
  );
}
