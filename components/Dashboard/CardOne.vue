<template>

    <div class="card">
        <div class="card-body">
            <div class="d-flex gap-3">
                <img src="@/assets/images/megaphone.svg" />
                <p class="pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <img src="@/assets/images/white-close.svg" role="button" />
        </div>
    </div>
  
</template>



<style scoped>
.card{
width: 100%;
padding: 0px;
border-radius: 12px;
background: rgba(41, 50, 83, 0.95) !important;
}
.card-body{
display: inline-flex;
align-items: center;
justify-content: space-between;
}
p{
color: var(--white);
font-weight: 400;
font-size: calc(15px + 0.390625vw);
}
</style>