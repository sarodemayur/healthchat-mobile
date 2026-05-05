import { useAuth } from "@/context/AuthContext";
import { GET_NURSE_BY_USER_ID } from "@/graphql/hook";
import { useQuery } from "urql";

export const useUserByRole = () => {
  const { user } = useAuth();
  const isNurse = user?.role === "nurse" || user?.role === "admin-nurse";

  const [{ data: nurse, fetching }] = useQuery({
    query: GET_NURSE_BY_USER_ID,
    variables: { user_id: user?.id },
    pause: !isNurse || !user?.id,
  });

  return {
    nurse: nurse?.nurses[0] || null,
  };
};
