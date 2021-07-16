<template>
    <div class="vr_wrap_box">
        <div class="preLoad"></div>
        <div class="VR_box">
            <div class="threesixty product1">
                <ol class="threesixty_images"></ol>
            </div>
            <!--机舱盖-->
            <div class="point point0" data-point="0"></div>
            <!--前风窗玻璃雨刮器-->
            <div class="point point1" data-point="1"></div>
            <!--外后视镜-->
            <div class="point point2" data-point="2"></div>
            <!--灯光-->
            <div class="point point3" data-point="3"></div>
            <!--车轮-->
            <div class="point point4" data-point="4"></div>
            <!--顶棚-->
            <div class="point point5" data-point="5"></div>
            <!--燃油加注舱-->
            <div class="point point6" data-point="6"></div>
            <!--行李箱-->
            <div class="point point7" data-point="7"></div>
            <!--图文弹窗-->
            <div class="pointpos" style="position: absolute">
                <div class="profile">
                    <ul></ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  module.exports = {
    name: "overView",
    data() {
      return {}
    },
    created() {

    },
    mounted() {
      this.car(1);
    },
    methods: {
      car(color) {

      }
    }
  }
</script>

<style scoped>

</style>
