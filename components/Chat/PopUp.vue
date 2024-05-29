<template>
  
<!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chat">
    <!-- <img src="@/assets/images/message-square.svg" role="button" data-bs-toggle="modal" data-bs-target="#chat"/> -->
    chat
  </button>

<!-- Modal -->
<div class="modal fade" id="chat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
        
      <div class="modal-header py-4">
        <div class="contact-name text-white" id="exampleModalLabel">ahmed mohammed</div>
        <div class="d-flex gap-3">
            <img src="@/assets/images/call.svg" role="button"/>
            <img src="@/assets/images/slash.svg" role="button"/>
            <img src="@/assets/images/white-close.svg" type="button" data-bs-dismiss="modal" aria-label="Close" />
        </div>
      </div>

      <div class="modal-body">

        <!--first-mesaage-->
        <ChatFirstMessage />

        <!--second-mesaage-->
        <div class="card card-2">
            <div class="card-body">
               <div class="text-2 pb-2">What does skin care include?</div>
               <div class="d-flex justify-content-end">
                    <div class="time-pm">1:30 pm</div>
                    <img class="ms-1" src="@/assets/images/read-check.svg" />
               </div>
            </div>
        </div><!--end-of-card-->

        <!--third-mesaage-->
        <div class="card card-3">
            <div class="card-body">
               <div class="text-3 pb-2">Lorem ipsum dolor sit amet consectetur.</div>
               <div class="time-pm text-end">1:30 pm</div>
            </div>
        </div><!--end-of-card-->


        <!--input bar-->
        <div class="input-wrapper d-flex  mt-3" >
          <img role="button" class="align-items-center justify-content-center m-2" src="@/assets/images/add-circle.svg" alt="">
          <input type="text" 
            class="input-bar "
            autofocus
            /> 
          <div class="d-flex gap-2 align-items-center justify-content-center m-2" >
              <img role="button" src="@/assets/images/microphone.svg" alt="">
              <img role="button" src="@/assets/images/send.svg" alt="">
          </div>     
        </div>
        <!--input bar end-->

      </div><!--modal-body--> 
    </div>
  </div>
</div>

</template>

<script>
// import FirstMessage from './FirstMessage.vue';
// export default {
//    components: {
//     FirstMessage,
//    }
// }
</script>

<style scoped lang="scss">
@import "@/assets/css/chat/index.css";

</style>