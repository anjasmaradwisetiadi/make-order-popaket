// import InputDefault from '@/components/input/InputDefault.vue';
// import {
//   shallowMount
// } from '@vue/test-utils';​
// // Mock $watchAsObservable()
// function $watchAsObservable() {
//   return {
//     pipe() {
//       return this;
//     },
//     subscribe: () => {},
//   };
// }​
// const wrapper = shallowMount(InputDefault, {
//   mocks: {
//     $watchAsObservable,
//   },
// });​
// describe('InputDefault.vue', () => {
//   const props = {
//     type: 'password',
//     placeholder: 'Password',
//     myClass: 'pink-300',
//     myStyle: 'color: black;',
//     value: 'Makan',
//   };​
//   it('add type property', async () => {
//     await wrapper.setProps({
//       type: props.type,
//     });
//     expect(wrapper.props().type).toBe(props.type);
//   });​

//   it('add placeholder property', async () => {
//     await wrapper.setProps({
//       placeholder: props.placeholder,
//     });
//     expect(wrapper.props().placeholder).toBe(props.placeholder);
//   });​

//   it('add myClass property', async () => {
//     await wrapper.setProps({
//       myClass: props.myClass,
//     });
//     expect(wrapper.props().myClass).toBe(props.myClass);
//   });​

//   it('add myStyle property', async () => {
//     await wrapper.setProps({
//       myStyle: props.myStyle,
//     });
//     expect(wrapper.props().myStyle).toBe(props.myStyle);
//   });​

//   it('add value property', async () => {
//     await wrapper.setProps({
//       value: props.value,
//     });
//     expect(wrapper.props().value).toBe(props.value);
//   });​

//   it('add all properties', async () => {
//     await wrapper.setProps({
//       ...props
//     });​
//     expect(wrapper.props().type).toBe(props.type);
//     expect(wrapper.props().placeholder).toBe(props.placeholder);
//     expect(wrapper.props().myClass).toBe(props.myClass);
//     expect(wrapper.props().myStyle).toBe(props.myStyle);
//     expect(wrapper.props().value).toBe(props.value);
//   });​

//   it('emmit if data has changed', () => {
//     const input = wrapper.find('input');​
//     input.setValue('makan');​
//     expect(wrapper.vm.data).toBe('makan');
//     expect(wrapper.emitted().input).toBeTruthy();
//   });​

//   it('check data can be set', () => {
//     wrapper.vm.data = 'test';​
//     expect(wrapper.vm.data).toBe('test');
//   });​

//   it('can emit data', async () => {
//     wrapper.vm.data = 'test';​
//     wrapper.vm.$emit('input', wrapper.vm.data);
//     await wrapper.vm.$nextTick();​
//     expect(wrapper.emitted().input).toBeTruthy();
//   });
// });
