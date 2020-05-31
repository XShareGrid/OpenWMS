<template>
    <div class="app-wrapper">
        <Header class="header_container"></Header>
        <SideBar class="sidebar-container fl"></SideBar>
        <div class="main-container">
            <router-view/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layout/Header';
import SideBar from '@/components/layout/SideBar';
export default {
    components: {
        Header,
        SideBar,
    },
};
</script>

<style scoped>

</style>
