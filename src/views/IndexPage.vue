<template>
    <div id="main" class="main">메인페이지</div>
    <SkillsPage />
    <CourierPage />
    <ProjectPage />
</template>

<script>
import CourierPage from './CourierPage.vue';
import ProjectPage from './ProjectPage.vue';
import SkillsPage from './SkillsPage.vue';

    export default {
        components: {
            CourierPage,
            SkillsPage,
            ProjectPage
        }
        
    }
</script>

<style lang="scss" scoped>
 
</style>