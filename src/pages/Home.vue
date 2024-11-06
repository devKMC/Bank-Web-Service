<template>
  <div class="wrapper">
    <div class="home-container">
      <header class="header">
        <!-- 목록 버튼 (왼쪽 상단) -->
        <div class="menu-icon">
          <img src="C:/Users/user/Desktop/office/bankSystem/Bank-Web-Service/public/free-icon-bullet-list-1827914.png" alt="목록 버튼" />
        </div>

        <!-- 로고 (가운데) -->
        <div class="logo">
          <img src="C:/Users/user/Desktop/office/bankSystem/Bank-Web-Service/public/Bank System.png" alt="은행 시스템 로고" />
        </div>

        <nav class="nav">
          <router-link to="/login">로그인</router-link>
          <router-link to="/signup">회원가입</router-link>
        </nav>
      </header>

      <main class="main-content">
        <section class="intro">
          <p>안전하고 빠른 금융 서비스를 제공합니다.</p>
        </section>

        <section class="services">
          <h3>서비스 선택</h3>
          <div class="service-list">
            <div class="service-item">
              <router-link to="/accounts">계좌 조회</router-link>
            </div>
            <div class="service-item">
              <router-link to="/transactions">거래 내역</router-link>
            </div>
            <div class="service-item">
              <router-link to="/loans">대출 신청</router-link>
            </div>
            <div class="service-item">
              <router-link to="/support">고객 지원</router-link>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <p>© 2024 은행 시스템. 모든 권리 보유.</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// 필요한 스크립트 로직을 추가하세요.
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #f7f9fc; /* 한국장학재단 스타일의 밝은 배경 */
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 15px; /* 부드러운 라운드 처리 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background-color: #1e3a8a; /* 깊고 안정적인 파란색 */
  color: white;
  padding: 30px 20px;
  text-align: center;
  position: relative;
}

.logo img {
  max-width: 150px;
  display: block;
  margin: 0 auto;
}

.menu-icon {
  position: absolute;
  top: 20px;
  left: 20px;
}

.menu-icon img {
  width: 30px;
  cursor: pointer;
}

.nav {
  margin-top: 15px;
}

.nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
}

.intro {
  margin-bottom: 30px;
  text-align: center;
}

.intro p {
  font-size: 18px;
  color: #555;
}

.services {
  width: 100%;
  padding: 20px 0;
  text-align: center;
}

.services h3 {
  font-size: 22px;
  color: #1e3a8a;
  margin-bottom: 30px;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.service-item {
  width: 100%;
  max-width: 270px;
  background-color: #3b82f6; /* 한국장학재단 스타일의 파란색 */
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.service-item:hover {
  background-color: #2563eb; /* 호버 시 색상 변화 */
  transform: translateY(-5px);
}

.service-item a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.footer {
  margin-top: 40px;
  font-size: 14px;
  color: #999;
  padding: 10px 0;
  text-align: center;
}
</style>
