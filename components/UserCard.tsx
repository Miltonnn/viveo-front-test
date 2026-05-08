import { RandomUser } from "@/types/user";
import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";

type UserCardProps = {
  user: RandomUser;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 420,
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Stack
          sx={{
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            sx={{
              width: 96,
              height: 96,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {user.name.first} {user.name.last}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            {user.email}
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            {user.phone}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            {user.location.city}, {user.location.state} -{" "}
            {user.location.country}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
