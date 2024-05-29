<template>

    <div class="dropdown my-4">
            <button data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                <span class="pe-5">All</span>
                <span><img src="@/assets/images/arrow-down.svg" /></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-start">
                <li>
                    <a class="dropdown-item" href="#">warehouses</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#"> users</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#"> orders</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#"> stores</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#"> expire contracts</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#"> returned</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#"> paid contacts</a>
                </li>
                <li>
                    <a class="dropdown-item" href="#"> unpaid contacts</a>
                </li>
            </ul>
    </div>


</template>

 


<style scoped>

button{
color: #D1D5DB;
font-size: 75%; 
font-weight: 400;
background: none;
padding: 8px 16px;
border: 0.5px solid rgba(255, 255, 255, 0.32);
border-radius: 4px;
display: flex;
justify-content: space-between;
text-transform: capitalize;
}

</style>