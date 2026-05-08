"use client";

import { FormEvent, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const userStorage = localStorage.getItem("user");

    if (!userStorage) {
      setError("Nenhuma conta cadastrada.");
      return;
    }

    const user = JSON.parse(userStorage);

    if (user.email !== email || user.password !== password) {
      setError("E-mail ou senha inválidos.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      router.push("/dashboard");
    }, 800);
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
            }}
          >
            Bem-vindo
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            Entre com sua conta para continuar
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <CustomInput
            label="E-mail"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <CustomInput
            label="Senha"
            type="password"
            value={password}
            onChange={setPassword}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Lembrar-me"
            />

            <Link
              component="button"
              underline="hover"
              sx={{
                fontSize: 14,
              }}
            >
              Esqueci minha senha
            </Link>
          </Box>

          {error && (
            <Typography
              sx={{
                color: "error.main",
                fontSize: 14,
                mt: 1,
              }}
            >
              {error}
            </Typography>
          )}

          <CustomButton
            type="submit"
            loading={loading}
          >
            Entrar
          </CustomButton>

          <Box
            sx={{
              mt: 4,
              textAlign: "center",
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "text.secondary",
              }}
            >
              Não possui uma conta?
            </Typography>

            <Link
              component="button"
              underline="hover"
              sx={{
                ml: 1,
              }}
              onClick={() => router.push("/cadastro")}
            >
              Cadastre-se
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}