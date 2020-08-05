<template>
    <div id="display">
        <header>
            <div class="header-wrap">
                <router-link to="/"><div id="logo">123</div></router-link>
                <div id="nav">
                    <div class="menu icon"
                         id="products"
                         @mouseout="hoverMenuApps=false"
                         @mouseenter="hoverMenuApps = true">
                        Products
                    </div>
                    <div class="menu">Contact</div>
                </div>
            </div>`
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <div id="footBottom"></div>
        </footer>
        <div id="other">
            <div id="subProducts" v-if="hoverMenuApps"></div>
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
