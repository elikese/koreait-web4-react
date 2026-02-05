import { useMutation } from "@tanstack/react-query"
import { signinAPI } from "../../../apis/endpoints/auth";
import { useAuthStore } from "../../../stores/authStore";

export const useSigninMutation = () => {
  const { login } = useAuthStore();
  return useMutation({
    mutationFn: signinAPI,
    onSuccess: (data) => {
      const accessToken = data;
      login(accessToken);
      // 전역토스트 - 로그인성공
    },
    onError: (error) => {
      console.log(error.message);
      const errorMsg = error?.response?.data?.message;
      console.log(errorMsg);
      // 토스트로 에러메세지
    }
  });
}