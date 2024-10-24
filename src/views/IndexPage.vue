<template>
    <div id="main" class="main">
        <div class="contents">
            장재근
            프론트 엔드 개발자
            안녕하세요. 4년차 프론트엔드 개발자 장재근입니다.
        </div>
        
    </div>
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