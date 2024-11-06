<template>
    <div class="signup-container">
        <h2>회원가입</h2>
        <form @submit.prevent="handleSignup">
            <div class="signup-form">
                <div class="signup-contents">
                    <label for="new-username">사용자 이름:</label>
                    <input type="text" id="new-username" v-model="UserName" required />
                </div>
                <div class="signup-contents">
                    <label for="new-password">비밀번호:</label>
                    <input type="password" id="new-password" v-model="UserPassword" required />
                </div>
                <div class="signup-contents">
                    <label for="new-email">이메일:</label>
                    <input type="email" id="new-email" v-model="UserEmail" required />
                </div>
                <div class="signup-contents">
                    <label for="new-phone">전화번호:</label>
                    <input type="tel" id="new-phone" v-model="UserPhone" required />
                </div>
                <button type="submit">회원가입</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { signup } from '../apis/userApi';

export default defineComponent({
    name: 'Signup',
    setup() {
        const UserName = ref<string>('');
        const UserPassword = ref<string>('');
        const UserEmail = ref<string>('');
        const UserPhone = ref<string>('');

        const handleSignup = async () => {
            try {
                await signup(UserName.value, UserPassword.value, UserEmail.value, UserPhone.value); // API 호출 시 추가 정보 포함
                alert("회원가입이 완료되었습니다!");
            } catch (error) {
                alert("회원가입에 실패했습니다.");
            }
        };

        return { UserName, UserPassword, UserEmail, UserPhone, handleSignup };
    }
});
</script>

<style scoped>
.signup-container {
    height: auto;
    width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.signup-contents {
    display: flex;
}

.signup-container h2 {
    text-align: center;
}

.signup-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.signup-container label {
    display: flex;
    width: 140px;
    justify-content: center;
    font-weight: bold;
    align-items: center;
}

.signup-container input {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
}

.signup-container button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.signup-container button:hover {
    background-color: #218838;
}
</style>
