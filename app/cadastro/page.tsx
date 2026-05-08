"use client";

import { FormEvent, useState } from "react";
import {
  Box,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function CadastroPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setError("");

    if (
      !name ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não conferem.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const userData = {
        name,
        lastName,
        email,
        password,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      setLoading(false);

      router.push("/login");
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
            Criar conta
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            Preencha os dados abaixo para continuar
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <CustomInput
            label="Nome"
            value={name}
            onChange={setName}
          />

          <CustomInput
            label="Sobrenome"
            value={lastName}
            onChange={setLastName}
          />

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

          <CustomInput
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

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
            Cadastrar
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
              Já possui uma conta?
            </Typography>

            <Link
              component="button"
              underline="hover"
              sx={{
                ml: 1,
              }}
              onClick={() => router.push("/login")}
            >
              Entrar
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}