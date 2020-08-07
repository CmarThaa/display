<template>
    <div id="display">
        <header>
            <div class="header-wrap">
                <router-link to="/"><div id="logo"><img src="./assets/img/logo.png" alt=""></div></router-link>
                <div id="nav">
                    <div class="menu icon"
                         id="products">
                        <span>项目原型展示</span>
                        <div id="subProducts"></div>
                    </div>
                    <div class="menu">Profile</div>
                </div>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <div id="footBottom"></div>
        </footer>
        <div id="other">

        </div>
    </div>
</template>

<script>
import "@/assets/css/display.scss"
export default {
  name: "display",
  data () {
    return {
        hoverMenuApps: false
    }
  }
}
</script>

<style scoped>

</style>
