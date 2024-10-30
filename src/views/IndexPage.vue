<template>
    <div id="main" class="main">
        <div class="contents">
            <div class="title">
                <h1>장재근</h1>
                <h2>프론트엔드 개발자</h2>
                <span>안녕하세요. 4년차 프론트엔드 개발자 장재근 입니다.</span>
                <span>jjg0111@naver.com</span>
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <SkillsPage />
    <div class="divider"></div>
    <ProjectPage />
    <div class="divider"></div>
    <CareerPage />
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