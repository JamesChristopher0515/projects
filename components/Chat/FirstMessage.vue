<template>
  <!--first-mesaage-->
  <div class="card card-1">
            <img src="@/assets/images/car.png" class="card-img-top">
            <div class="card-body">

                <div class="d-flex justify-content-between">
                    <div class="text-1">nissan car for sell</div>
                    <div class="d-flex gap-2 align-items-start">
                       <img src="@/assets/images/heart.svg" role="button"/>
                       <img src="@/assets/images/messages.svg" role="button"/>
                    </div>
                </div>
                
                <div class="d-flex gap-3 pt-10">
                  <div>
                    <img src="@/assets/images/clock.svg" />
                    <small class="ps-1">3 hours</small>
                  </div>
                  <div>
                    <img src="@/assets/images/location.svg" />
                    <small class="ps-1">Jiddah</small>
                  </div>
                </div>

                <div class="pt-10">
                    <img src="@/assets/images/purple-profile.svg" />
                    <small class="ps-1">ahmed mohammed</small>
                </div>
                <div class="sar pt-10">500,000 SR</div>

            </div>
        </div><!--end-of-card-->
</template>

<script setup>

</script>

<style>
/*-------------card-1------------------ */
.card-1 .card-body{
padding-top: 0;
}
.card-img-top{
flex-shrink: 0;
border-radius: 10px;
padding: 11px;
background: url(../assets/images/car.png) lightgray 50% / cover no-repeat, var(--warm-white);
}
.card-1{
width: 60%;
border-radius: 10px;
border: none;
margin-left: auto;
background: var(--warm-white);
box-shadow: 0px 4px 50px 0px rgba(239, 241, 249, 0.80);
}
.text-1{
color: var(--dark-blue-text);
font-weight: 500;
font-size: calc(14px + 0.390625vw);
width: 50%;
}
.sar{
color: var(--purple);
font-size: calc(16px + 0.390625vw);
font-weight: 600;
}
.pt-10{
padding-top: 10px;
}
</style>