<template>
    <div class="login-container">
        <h2>로그인</h2>
        <form @submit.prevent="handleSubmit">
            <div class="login-form">
            <div class="login-contents">
                    <label for="username">사용자 이름:</label>
                    <input 
                        type="text" 
                        id="username" 
                        v-model="username" 
                        required 
                    />
                </div>
                <div class="login-contents">
                    <label for="password">비밀번호:</label>
                    <input 
                        type="password" 
                        id="password" 
                        v-model="password" 
                        required 
                    />
                </div>
                <button type="submit">로그인</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Login',
    setup() {
        const username = ref<string>('');
        const password = ref<string>('');
        const router = useRouter();

        const handleSubmit = () => {
            // 여기에 로그인 API 호출 로직을 추가
            if (username.value === 'admin' && password.value === 'admin') {
                // 관리자 계정으로 로그인
                router.push('/accounts');
            } else {
                // 사용자 계정으로 로그인 (예시)
                router.push('/user/dashboard');
            }
        };

        return { username, password, handleSubmit };
    }
});
</script>

<style scoped>
.login-container {
    height: 250px;
    width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.login-contents {
    display: flex;
    
}

.login-container h2 {
    text-align: center;
}

.login-container form {
    flex-direction: column;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.login-container label {
    display: flex;
    width: 140px; 
    justify-content: center;
    font-weight: bold; 
    align-items: center;
}

.login-container input {
    /* margin-bottom: 10px; */
    padding: 8px;
    width: 100%; 
    box-sizing: border-box; 
    border-radius: 4px;
}

.login-container button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-container button:hover {
    background-color: #0056b3;
}
</style>
