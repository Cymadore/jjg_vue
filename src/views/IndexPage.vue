<template>
    <div id="main" class="main">
        <div class="contents">
            <div class="title">
                <h1>장재근</h1>
                <span>안녕하세요. 꾸준히 공부하고 성장하는 프론트엔드 개발자 장재근 입니다.</span>
                <div class="contact">
                    <a href="mailto:jjg0111@naver.com">이메일 : jjg0111@naver.com</a>
                    <a href="https://github.com/Cymadore/">깃허브: Cymadore</a>
                </div>
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