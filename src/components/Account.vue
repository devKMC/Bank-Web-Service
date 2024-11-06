<template>
    <div class="container">
      <div class="header"> 나 헤더</div>
      <div class="main-content">
        <div class="sideBar">나 사이드바</div>
        <div class="info-section">
          <div class="secondHeader">난 부 헤더</div>
          <div class="infomation">
            <div class="infomationManual">
              <div class="infomationManualDetail1">난 내용 1</div>
            </div>
            <div class="infomationManual">
              <div class="infomationManualDetail2">난 내용 2</div>
            </div>
            <div class="infomationManual">
              <div class="infomationManualDetail3">난 내용 3</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppLayout',
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .header {
    background-color: #4a90e2;
    color: white;
    padding: 1rem;
  }
  
  .main-content {
    display: flex; 
    flex-grow: 1; 
  }
  
  .sideBar {
    background-color: #0014c9;
    padding: 1rem;
    width: 200px; 
    color: white; 
  }
  
  .info-section {
    display: flex;
    flex-direction: column;
    flex-grow: 1; 
    padding: 1rem; 
  }
  
  .secondHeader {
    background-color: #a83737;
    padding: 1rem;
    border-bottom: 1px solid #ccc; 
    color: white; 
  }
  
  .infomation {
    display: flex; 
    gap: 20px; 
    margin-top: 10px; 
    flex-grow: 1;
  }
  
  .infomationManual {
    
    display: flex;
    flex-grow: 1; 
    padding: 1rem;
    background-color: #eaeaea; 
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  }
  </style>
  