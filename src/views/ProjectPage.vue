<template>
    <div id="project" class="project">
        <div class="contents">
            <h1>나의 프로젝트</h1>
            <router-link :to="{path:`/project/${item.id}`}"  v-for="(item,index) in projectData" :key="index">
                <div class="projectCard" :class="index%2==0?'mr-2':''">
                    <div class="thumbnailContainer"><img :src="getImgPath(item)" class="projectThumbnail"></div>
                    <div class="projectSummary">
                        <div>{{item.title}}</div>
                        <div>사용기술 : <div v-for="(skill,i) in item.skills" :key="i" class="skillList">
                            <img :src="getIconPath(skill)" alt="">
                            <span>{{ skill.name }}</span>
                        </div></div>
                        <div>진행 기간 : {{ item.duration }}</div>
                        <div>개발 인원 : {{item.developer}}인</div>
                        <!-- <a :href="item.link">페이지 바로가기</a>
                        <div>상세보기</div> -->
                    </div>
                </div>
            </router-link>
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