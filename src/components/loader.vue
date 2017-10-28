<template lang="html">
  <div class="Home-loader">
    <div class="Home-loader-points">
      <div class="Point-loader"></div>
      <div class="Point-loader"></div>
      <div class="Point-loader"></div>
      <div class="Point-loader"></div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$colors_Load = array( #005872 ,#4d9aa9 ,#0e7286 ,#002029 )

.Home-loader{
  position: absolute;
  top: 60px;
  left: 0;
  width :100%;
  height :95%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index :1;
  & .points{
      height 30px
  }
}




.Point-loader{
  width: 15px;
  height: 15px;
  background: grey;
  border-radius: 10px;
  margin: 5px;
  float: left;
  @for $i from 1 through 4
    &:nth-child({$i}){
      animation:Bounce ease-in-out infinite alternate both .4s;
      animation-delay: $i*0.2s;
      background: $colors_Load[$i - 1];
    }

}

@keyframes Bounce {
  from{
     transform :translateY(0px);
  }
  to{
     transform :translateY(10px);
  }
}

</style>
