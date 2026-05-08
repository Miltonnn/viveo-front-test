# Viveo Front-End Test

Aplicação desenvolvida como desafio técnico Front-End utilizando **Next.js**, **TypeScript** e **Material UI**, com foco em componentização, responsividade, boas práticas de desenvolvimento e experiência do usuário.

---

## 🚀 Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Material UI (MUI)
- App Router
- ESLint

---

## 📋 Funcionalidades

- Tela de Login
- Validação de formulário
- Dashboard com consumo de API
- Busca dinâmica de usuários
- Componentização reutilizável
- Navegação entre páginas
- Layout responsivo

---

## 🧠 Decisões técnicas

Durante o desenvolvimento, procurei simular um cenário real de projeto, priorizando:

- Estrutura escalável
- Organização de pastas
- Reutilização de componentes
- Legibilidade de código
- Tipagem forte com TypeScript
- Separação de responsabilidades
- Experiência do usuário

---

## 📁 Estrutura do projeto

## 📁 Estrutura do projeto

```bash
src/
├── app/
│   ├── cadastro/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthCard.tsx
│   ├── CustomButton.tsx
│   ├── CustomInput.tsx
│   └── UserCard.tsx
├── services/
│   └── randomUserApi.ts
└── types/
    └── user.ts


## 📁 Organização

- `app/`: rotas da aplicação utilizando App Router do Next.js
- `app/login`: página de login
- `app/cadastro`: página de cadastro de usuário
- `app/dashboard`: página principal após autenticação
- `components/`: componentes reutilizáveis da interface
- `services/`: camada responsável por chamadas externas/API
- `types/`: tipagens globais utilizadas no projeto
```
