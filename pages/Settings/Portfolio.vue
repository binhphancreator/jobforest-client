<template>
    <div class="mx-auto">    
        <NavSetting/>
        <div class="p-4 px-2 md:container mx-auto">
            <div class="mb-8">
                <h3 class="px-2 text-xl text-gray-600 mb-4">Hồ sơ năng lực của tôi</h3>
                <ul class="block flex flex-wrap">
                    <li class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 min-h-40 p-2 mb-4" v-for='portfolio in $auth.user.portfolios' :key='portfolio.id'><CardPortfolio class="w-full h-full" :portfolio='portfolio' :me='true'/></li>
                    <li class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 h-full p-2"><div @click='visibleForm=!visibleForm' class="border border-dashed border-gray-400 flex items-center justify-center h-full cursor-pointer hover:border-blue-400 p-2"><p class="text-sm text-gray-500">Thêm mới</p></div></li>
                </ul>
            </div>
            <FormInput v-if='visibleForm' class="block m-2 shadow-md rounded-xl mb-8" title='Hồ sơ năng lực' textBtn='Thêm hồ sơ' @submit='onAddPortfolio' :subCondition='portfolio.file!=null'>
                <template>
                    <div class="sm:p-4 p-2">
                        <p class="text-sm text-gray-500 mb-2">Hồ sơ năng lực là các dự án cũ hoặc các công việc bạn đã từng làm trước đâu (bao gồm cả các khách hàng bên ngoài jobforest). Khách hàng trước khi giao việc thường xem qua các hồ sơ năng lực của freelancer rồi mới quyết định thuê. Vì vậy hãy đăng càng nhiều hồ sơ năng lực chất lượng, bạn càng có thêm nhiều cơ hội được nhận việc.</p>
                        <p v-if='!$auth.user.portfolios.length' class="text-sm text-gray-500">Hiện tại bạn chưa có hồ sơ năng lực nào. Hãy dùng form dưới đây để bắt đầu đăng hồ sơ đầu tiên ngay bây giờ nhé.</p>
                    </div>

                    <InputGroup rules='required' text="Tiêu đề" @clear="portfolio.title=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="portfolio.title">
                        </template>
                    </InputGroup>

                    <ValidationProvider ref="attachedFile" name="File đính kèm" rules='required|ext:jpg,png,doc,docx,pdf,zip,rar|size:5000' v-slot="{ errors }">
                        <div class="sm:flex justify-between items-center sm:p-4 p-2 border-b border-gray-100">
                            <p class="text-sm h-full sm:py-4 flex-1 text-gray-700 mb-2 sm:mb-0">File đính kèm</p>
                            <div class="flex-2">
                                <label class="flex items-center cursor-pointer h-12 rounded-full border border-dashed border-gray-400 p-2 relative cursor-pointer" for="avatar">
                                    <p v-if="!portfolio.file && !errors[0]" class="ml-2 text-sm text-gray-700"><span class="text-blue-400">Click để tải lên </span>hoặc thả file vào đây</p>
                                    <p v-if="portfolio.file && !errors[0]" class="ml-2 text-sm text-gray-700">{{portfolio.file.name}}</p>
                                    <p v-if="errors[0]" class="ml-2 text-sm text-red-400">{{errors[0]}}</p>
                                    <input accept=".png,.jpg,.doc,.docx,.pdf,.zip,.rar" class="absolute opacity-0 top-0 bottom-0 left-0 right-0 cursor-pointer" multiple type="file" name="avatar" id="avatar" @change="handleFileChange" >
                                </label>
                            </div>
                        </div>
                    </ValidationProvider>

                    <InputGroup rules='' text="Địa chỉ web" @clear="portfolio.url=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="portfolio.url">
                        </template>
                    </InputGroup>

                    <InputGroup rules='required' text="Mô tả chi tiết" :visibleClearBtn='false' @clear="portfolio.description=''">
                        <template slot="input">
                            <textarea :placeholder="'Hãy viết thật chi tiết về sản phẩm hoặc dự án này để người xem có thể hiệu được những công việc thực sự bạn đã làm.'" class="resize-none h-60 p-2 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="portfolio.description"> </textarea>
                        </template>
                    </InputGroup>
                </template>
            </FormInput>
        </div>
    </div>
</template>

<script>
export default {
    data(){return{
        portfolio:{
            title:null,
            file:null,
            url:null,
            description:null,
        },
        visibleForm:false,
    }},
    methods:{
        onAddPortfolio(){
            var formData = new FormData()
            for(const key in this.portfolio) formData.append(key,this.portfolio[key])

            this.$axios.$post('/api/user/portfolio/create',formData).then(res=>{this.$auth.setUser(res);this.visibleForm=false;this.reset()})
        },
        async handleFileChange(e) {
            if(e.target.files[0]==null) return
            const { valid } = await this.$refs.attachedFile.validate(e)
            if(valid) this.portfolio.file = e.target.files[0]
        },
        reset(){
            this.portfolio={title:null,file:null,url:null,description:null,}
        }
    },
    middleware:['auth'],
    layout:'flex',
}
</script>