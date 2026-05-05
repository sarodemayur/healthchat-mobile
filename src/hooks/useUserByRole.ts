import { useAuth } from "@/context/AuthContext";
import { useGetNurseByUserIdQuery } from "@/graphql/hook.generated";

export const useUserByRole = () => {
  const { user } = useAuth();
  const isNurse = user?.role === "nurse" || user?.role === "admin-nurse";

  const [{ data: nurse, fetching }] = useGetNurseByUserIdQuery({
    variables: { user_id: user?.id ?? '' },
    pause: !isNurse || !user?.id,
  });

  return {
    nurse: nurse?.nurses[0] || null,
  };
};
