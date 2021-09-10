<template>
    <div>
        <div class="flex justify-between items-center p-2 rounded-full h-12 border border-gray-200 mb-4">
            <p class="text-sm text-gray-700">Chào giá: {{offers.length}}</p>
            <p class="md:block hidden text-sm text-gray-700">Thấp nhất: {{minCost}}đ | Cao nhất: {{maxCost}}đ</p>
            <p class="text-sm text-gray-700">Trung bình: {{avgDay}} ngày</p>
        </div>
        <ul class="space-y-4">
            <FormInput v-if='ownProject && project.status=="ended"' class="p-2 space-y-4 relative block border border-gray-200 rounded-xl" @submit='onRate'>
                <template>
                    <div class="flex flex-col items-center space-y-2">
                        <h3 class="text-center text-gray-500 font-medium">Viết đánh giá</h3>
                        <StarRating @change='changeStar' :star='review.star'/>
                        <div class="w-full">
                            <p class="text-sm text-gray-500">Tiêu đề</p>
                            <ValidationProvider name='Tiêu đề' rules="required|max:50" v-slot="{ errors }">
                                <input class="p-2 block w-full h-10 text-sm text-gray-700 rounded-xl bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="review.title">
                                <span class="text-xs text-red-400 italic">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                        <div class="w-full">
                            <p class="text-sm text-gray-500">Nội dung</p>
                            <textarea class="p-2 w-full resize-none h-20 text-sm text-gray-700 rounded-xl bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="review.content"></textarea>
                        </div>
                    </div>
                </template>
                <template slot="header"><div></div></template>
                <template slot="submit"><div class="mt-2"><button class="p-2 w-full rounded-md text-sm bg-blue-400 text-gray-50">Đánh giá</button></div></template>
            </FormInput>
            <div class="p-2 flex flex-col items-center border border-gray-200 rounded-xl space-y-2" v-if='ownProject && project.status=="rated"'>
                <StarRating :star='project.review.star'/>
                <p class="text-sm text-gray-600">{{project.review.title}}</p>
                <p v-if='project.review.content' class="text-sm text-gray-600">{{project.review.content}}</p>
            </div>
            <li v-for='offer in offers' :key='offer.id'><LazyCardUserOffer :own='ownProject' :offer='offer' :user='offer.user'/></li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['project'],
    data(){return{
        review:{
            title:null,
            content:null,
            star:5,
            project_id:this.project.id,
            user_id:this.project.accepted_offer ? this.project.accepted_offer.user_id : null,
        }
    }},
    mounted(){
        this.offers.sort((a,b)=>a.cost>b.cost)
    },
    methods:{
        onRate(){
            this.$axios.$post('api/user/project/rate',this.review).then(res=>this.$nuxt.refresh())
        },
        changeStar(value){
            this.review.star = value
        }
    },
    computed:{
        avgDay(){
            if(!this.offers.length) return 0
            var avg = 0
            this.offers.forEach(offer => avg+=offer.completion_time)
            avg/=this.offers.length
            return avg
        },
        minCost(){
            if(!this.offers.length) return 0
            return this.offers[0].cost
        },
        maxCost(){
            if(!this.offers.length) return 0
            return this.offers[this.offers.length-1].cost
        },
        offers(){
            return this.project.offers
        },
        ownProject(){
            return this.$auth.loggedIn && this.project.user_id==this.$auth.user.id
        },
    },
}
</script>