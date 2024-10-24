<template>
    <div id="main" class="main">
        <div class="contents">
            <h1>장재근</h1>
            <h2>프론트엔드 개발자</h2>
            <span>안녕하세요. 4년차 프론트엔드 개발자 장재근 입니다.</span>
        </div>
        
    </div>
    <SkillsPage />
    <CareerPage />
    <ProjectPage />
</template>

<script>
import CareerPage from './CareerPage.vue';
import ProjectPage from './ProjectPage.vue';
import SkillsPage from './SkillsPage.vue';

    export default {
        components: {
            CareerPage,
            SkillsPage,
            ProjectPage
        }
        
    }
</script>

<style lang="scss" scoped>
 
</style>