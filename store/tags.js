export const state = () => ({
    expertises:null,
    services:null,
    skills:null,
    type_works:["Dự án","Bán thời gian","Toàn thời gian"],
    work_forms:["Online","Văn phòng"],
    cities:null,
    salary_types:["Dự án","Giờ","Tháng",],
    qualifications:["Mới đi làm","Đã có kinh nghiệm","Chuyên gia"],
    account_types:['Freelancer','Nhà tuyển dụng']
})

export const getters = {
    getSkillById:(state) => (id) => {
        return state.skills.find(skill => skill.id === id)
    },
    getExpertisesById:(state) => (id) => {
        return state.expertises.find(expertise => expertise.id === id)
    },
    getServiceById:(state) => (id) => {
        return state.services.find(service => service.id === id)
    },
}

export const actions = {
    async init ({ state,dispatch }) {
        var tags = await this.$axios.$get('api/tags')
        state.expertises = tags.expertises
        state.services = tags.services
        state.skills = tags.skills
        
        state.cities = (await this.$axios.$get('https://vapi.vnappmob.com/api/province/')).results
    },
}