import { RandomUser } from '@/types/user'

export async function getRandomUser(): Promise<RandomUser> {
  const response = await fetch('https://randomuser.me/api/')

  if (!response.ok) {
    throw new Error('Erro ao buscar usuário.')
  }

  const data = await response.json()

  return data.results[0]
}