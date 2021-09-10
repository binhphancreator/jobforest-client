import Vue from 'vue';
import { ValidationProvider,ValidationObserver, extend } from 'vee-validate';
import { required, email,numeric,confirmed,ext,max_value,size,min,max } from 'vee-validate/dist/rules';
import moment from 'moment';

extend('required', {
  ...required,
  message: '{_field_} không được để trống'
})

extend('email',{
  ...email,
  message: 'Vui lòng nhập đúng định dạng email'
})

extend('numeric',{
  ...numeric,
  message: 'Vui lòng nhập đúng định dạng số'
})

extend('confirmed',{
  ...confirmed,
  message: '{_field_} không khớp'
})

extend('ext',{
  ...ext,
  message: (fieldName)=>`${fieldName} không hỗ trợ tải lên định dạng này`
})

extend('password',{
  validate(value){
    return value.length >=6;
  },
  message: 'Mật khẩu tối thiểu phải có 6 ký tự'
})

extend('size',{
  ...size,
  message: (fieldName,placeholders)=>`Dung lượng tối đa cho phép là ${placeholders.size/1000} MB`
})

extend('max_value',{
  ...max_value,
  message: (fieldName,placeholders)=>`Giá trị tối đa cho phép là ${placeholders.value}`
})

extend('max',{
  ...max,
  message: (fieldName,placeholders)=>`${fieldName} chỉ cho phép tối đa ${placeholders.length} ký tự`
})

extend('min',{
  ...min,
  message: (fieldName,placeholders)=>`${fieldName} tối thiểu phải có ${placeholders.length} ký tự`
})

extend('mintime',{
  validate(value,{time}){
    return moment(value).diff(moment(),'day') >= time
  },
  params:['time'],
  message: '{_field_} nên có tối thiểu {time} ngày',
})

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);