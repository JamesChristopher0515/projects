<template>
  <div class="dropdown">
    <button data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
      <div class="text-center">
        <img src="@/assets/images/me.png" class="rounded-circle avatar" alt="...">
      </div>
      <span class="p-1">osama askar</span>
      <span><img src="@/assets/images/arrow-down-profile.svg" /></span>
    </button>
    <ul class="dropdown-menu ">
      <li>
        <a href="#" class="dropdown-item">
          <img class="icon-fill" src="@/assets/images/company.svg" />
          Personal Profile
        </a>
      </li>
      <li >
        <a href="#" class="dropdown-item"> 
          <img class="icon-fill" src="@/assets/images/company.svg" />
          Company Profile
        </a>
      </li>
      <li>
        <a href="#" class="dropdown-item buttom-border pb-3">
          <img class="icon-fill" src="@/assets/images/application.svg" />
          Reset the Application  
        </a>
      </li>
      <li class="dropdown-item">
        <button class="btn py-2 mt-3 text-white logout">
          logout
        </button>
      </li>
    </ul>
  </div>
</template>

<style>
@import "@/assets/css/dropMenu/index.css"; 
</style>