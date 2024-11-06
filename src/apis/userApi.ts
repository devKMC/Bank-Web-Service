// userApi.ts
import axios from 'axios';
import { API_URL } from '../utils/apiConfig';  // apiConfig에서 API_URL 가져오기

export const signup = async (username: string, password: string, email: string, phone: string) => {
    try {
        // API_URL에 이미 기본 경로가 설정되어 있으므로, /signup만 추가합니다.
        const response = await axios.post(`${API_URL}/signup`, {
            username,
            password,
            email,
            phone
        });
        return response.data;
    } catch (error) {
        console.error("회원가입 실패:", error);
        throw error;
    }
};
