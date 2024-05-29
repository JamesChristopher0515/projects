<template>
    <!------------view-all-dropdown-------->
    <DashboardViewAllDrodown />

    <!-----------cards---group---------->
    <div class="card-grid ">
       
        <div class="card ">
            <img src="@/assets/images/union.svg" class="card-img" alt="...">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="gray pt-2">Warehouses</p>
                    <div>
                        <img class="cards-icon" src="@/assets/images/cards-icons/warehouse.svg" />
                        <img src="@/assets/images/cards-icons/circle-1.svg" />
                    </div>
                </div>
                <div class="quantity pt-2">455</div> 
            </div>
        </div>

        <div class="card ">
            <img src="@/assets/images/union.svg" class="card-img" alt="...">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="gray pt-2">users</p>
                    <div>
                        <img class="cards-icon" src="@/assets/images/cards-icons/users.svg" />
                        <img src="@/assets/images/cards-icons/circle-2.svg" />
                    </div>
                </div>
                <div class="quantity pt-2">12K</div> 
            </div>
        </div>

        <div class="card ">
            <img src="@/assets/images/union.svg" class="card-img" alt="...">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="gray pt-2">orders</p>
                    <div>
                        <img class="cards-icon" src="@/assets/images/cards-icons/orders.svg" />
                        <img src="@/assets/images/cards-icons/circle-3.svg" />
                    </div>
                </div>
                <div class="quantity pt-2">678</div> 
            </div>
        </div>

        <div class="card ">
            <img src="@/assets/images/union.svg" class="card-img" alt="...">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="gray pt-2">stores</p>
                    <div>
                        <img class="cards-icon" src="@/assets/images/cards-icons/stores.svg" />
                        <img src="@/assets/images/cards-icons/circle-4.svg" />
                    </div>
                </div>
                <div class="quantity pt-2">34</div> 
            </div>
        </div>

        <div class="card ">
            <img src="@/assets/images/union.svg" class="card-img" alt="...">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="gray pt-2">Expiring contracts</p>
                    <div>
                        <img class="cards-icon" src="@/assets/images/cards-icons/ex-contracts.svg" />
                        <img src="@/assets/images/cards-icons/circle-5.svg" />
                    </div>
                </div>
                <div class="quantity pt-2">56</div> 
            </div>
        </div>

        <div class="card ">
            <img src="@/assets/images/union.svg" class="card-img" alt="...">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="gray pt-2">Returned </p>
                    <div>
                        <img class="cards-icon" src="@/assets/images/cards-icons/returned.svg" />
                        <img src="@/assets/images/cards-icons/circle-6.svg" />
                    </div>
                </div>
                <div class="quantity pt-2">89</div> 
            </div>
        </div>

        <div class="card ">
            <img src="@/assets/images/union.svg" class="card-img" alt="...">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="gray pt-2">paid contracts</p>
                    <div>
                        <img class="cards-icon" src="@/assets/images/cards-icons/paid.svg" />
                        <img src="@/assets/images/cards-icons/circle-7.svg" />
                    </div>
                </div>
                <div class="quantity pt-2">345</div> 
            </div>
        </div>

        <div class="card ">
            <img src="@/assets/images/union.svg" class="card-img" alt="...">
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="gray pt-2">unpaid contracts</p>
                    <div>
                        <img class="cards-icon" src="@/assets/images/cards-icons/unpaid.svg" />
                        <img src="@/assets/images/cards-icons/circle-8.svg" />
                    </div>
                </div>
                <div class="quantity pt-2">809</div> 
            </div>
        </div>
      </div>
    
</template>

<style scoped>
.card{
    padding: 1rem;
    background: var(--grayish-blue);
}
 
.card-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 10px;

}

.card-img{
position: absolute;
width: 126px;
right: 0;
bottom: 0;
}

.cards-icon { 
  position: relative;
  z-index: 1;
  top: 50%;
  left: 50%;
   
}
.quantity{
color: #FFF;
font-size: 24px;
font-weight: 600;
}
</style>