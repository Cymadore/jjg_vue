<template>
    <div id="project" class="project">
        <div class="contents">
            <h1>나의 프로젝트</h1>
            <div class="project" v-for="(item,index) in projectData" :key="index">
                <img :src="getImgPath(item)" class="projectThumbnail">
                <!-- <img src="@/img/projectImg/playtable/pt_main.webp" class="projectThumbnail"> -->
                <div class="projectSummary">
                    <div>{{item.title}}</div>
                    <div>사용기술 : <div v-for="(skill,i) in item.skills" :key="i" class="skillList">
                        <img :src="getIconPath(skill)" alt="">
                        <span>{{ skill.name }}</span>
                    </div></div>
                    <div>진행 기간 : 2024.05~진행중</div>
                    <div>개발 인원 : 1인</div>
                    <a href="https://playtable-one.vercel.app/">페이지 바로가기</a>
                </div>
                <h3>프로젝트 상세 보기</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import data from "@/components/project.json";
    const projectData = data;
    export default {
        data() {
            return {
                projectData
            }
        },
        setup() {
            function getIconPath(item){
                try {
                    return require(`@/img/${item.icon}`);
                } catch(error) {
                    return "";
                }
            }
            function getImgPath(item) {
                try {
                    return require(`@/img/projectImg/${item.imgpath}/${item.thumbnail}`);
                } catch(error) {
                    return "";
                }
            }
            return {getImgPath,getIconPath};
        }
    }
</script>

<style lang="scss" scoped>
</style>