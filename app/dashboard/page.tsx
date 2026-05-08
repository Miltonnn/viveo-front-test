"use client";

import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import UserCard from "@/components/UserCard";
import { getRandomUser } from "@/services/randomUserApi";
import { RandomUser } from "@/types/user";

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<RandomUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUser() {
    try {
      setLoading(true);
      setError("");

      const response = await getRandomUser();

      setUser(response);
    } catch {
      setError("Erro ao carregar usuário.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        px: 2,
        background: "#f5f7fb",
      }}
    >
      <Typography component="h1" variant="h4" sx={{ fontWeight: 700 }}>
        Dashboard
      </Typography>

      {loading && <CircularProgress />}

      {error && <Typography color="error">{error}</Typography>}

      {!loading && user && <UserCard user={user} />}

      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={loadUser}
          sx={{
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Buscar outro usuário
        </Button>

        <Button
          variant="outlined"
          onClick={() => router.push("/login")}
          sx={{
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Sair
        </Button>
      </Box>
    </Box>
  );
}
