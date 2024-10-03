<template>
  <div>
    <div class="card">
        <div class="container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Expedita dolore veniam consectetur voluptas perferendis quaerat 
            nulla vero repellendus architecto ducimus, qui quae mollitia 
            laudantium facere ullam culpa. Tenetur, accusamus ab.
        </div>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
    .card {
        width: 300px;
        margin: 0 auto;
        transition: 500ms;
        background: repeating-linear-gradient(
            -45deg,
            #e8544d, 
            #e8544d 10px,
            #fff 10px,
            #fff 20px,
            #75adf8 20px,
            #75adf8 30px,
            #fff 30px,
            #fff 40px
        ) -20px -20px/200% 200%;
        padding: 5px;

        &:hover {
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
            background-position: 0 0;
        }
    }
    .container {
        padding: 10px;
        background: #fff;
    }
</style>