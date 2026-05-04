export const getInitials = (
  name: string | undefined | null,
  fallback: string,
) =>
  name
    ? name
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase()
    : fallback;
