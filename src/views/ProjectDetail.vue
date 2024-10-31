<template>
    <div class="projectdetail">
        <div class="contents">
            <h1>{{ projectData.title }}</h1>
            <div class="projectSummary">
                <div class="imgContainer"><img :src="getImgPath(projectData.imgpath,projectData.thumbnail)" class="projectImg"></div>
                <div class="projectInfo">
                    <div>사용기술 : 
                        <div v-for="(skill,i) in projectData.skills" :key="i" class="skillList">
                            <img :src="getIconPath(skill)" alt="">
                            <span>{{ skill.name }}</span>
                        </div>
                    </div>

                    <div>진행 기간 : {{ projectData.duration }}</div>
                    <div>개발 인원 : {{projectData.developer}}인</div>
                    <a :href="projectData.link" class="linkButton">페이지 바로가기</a>
                </div>
            </div>
            <div class="divider"></div>
            <h1>기능</h1>
            <div class="projectFunction" v-for="(item, index) in projectData.detail" :key="'detail'+index">
                <h2>{{ item.title }}</h2>
                <div class="imgContainer">
                    <div v-for="(srcPath,srcindex) in item.img" :key="'detailImg'+srcindex" class="imgBox">
                        <img :src="getImgPath(projectData.imgpath,srcPath)" alt="">
                    </div>  
                </div>
                
                <div class="functionContent">{{ item.content }}</div>
            </div>
            <div class="divider"></div>
            <div class="todoList">
                <h2>앞으로 할 일</h2>
                <ul>
                    <li v-for="(todo, todoIndex) in projectData.todo" :key="todoIndex">{{ todo }}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    import data from "@/components/project.json";
    import _ from "lodash";
    export default {
        data(){
            return{
                projectData:[],
            }
        },
        mounted() {
            this.projectData = _.filter(data, o => o.id == this.$route.params.id)[0];
            window.scrollTo(0,0);
        },
        setup() {
            function getIconPath(item){
                try {
                    return require(`@/img/${item.icon}`);
                } catch(error) {
                    return "";
                }
            }
            function getImgPath(imgpath,srcPath) {
                try {
                    return require(`@/img/projectImg/${imgpath}/${srcPath}`);
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