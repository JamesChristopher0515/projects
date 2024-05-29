<template>
    <div class="card">
        <div class="heading p-16">
           Top 10 Warehouses
        </div>
        
        <div class="card-body">
          <div class="d-flex justify-content-between">
              <div class="d-flex gap-3">
                  <img class="card-icon " src="@/assets/images/store-1.png" />
                  <p class="gray pt-2">Name of The store</p>
              </div>
              <div class="d-flex gap-3">
                  <p class="small-text">45.000 SR</p>
                  <img class="arrow mt-2" src="@/assets/images/rise-1.svg" />
              </div>
          </div>
  
          <div class="d-flex justify-content-between mt-3">
              <div class="d-flex gap-3">
                  <img class="card-icon " src="@/assets/images/store-2.png" />
                  <p class="gray pt-2">Name of The store</p>
              </div>
              <div class="d-flex gap-3">
                  <p class="small-text">34.000 SR</p>
                  <img class="arrow mt-2" src="@/assets/images/rise-1.svg" />
              </div>
          </div>
  
          <div class="d-flex justify-content-between mt-3">
              <div class="d-flex gap-3">
                  <img class="card-icon " src="@/assets/images/store-3.png" />
                  <p class="gray pt-2">Name of The store</p>
              </div>
              <div class="d-flex gap-3">
                  <p class="small-text">45.000 SR</p>
                  <img class="arrow mt-2" src="@/assets/images/rise-2.svg" />
              </div>
          </div>

  
      </div><!--body-->
    </div>
</template>
  
   
<style scoped>
   
.card{
    width: 100%;
}
.heading{
    color: var(--white);
    font-weight: 600;
    font-size: calc(18px + 0.390625vw);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.card-body{
    padding: 30px 20px;
}

.card-icon{
    height: 40px;
    width: 40px;
}

.small-text{
    color: var( --second-light-gray); 
    padding-top: 12px;
    font-size: calc(12px + 0.390625vw);
    font-weight: 400;
}

.arrow{
    width: calc(24px + 0.390625vw);
    height: auto;
}
.p-16{
    padding: 16px;
}
</style>