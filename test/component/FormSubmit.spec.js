import { shallowMount } from '@vue/test-utils';
import FormSubmit from '../../components/FormSubmit.vue';
import TriggerInput from '../../components/TriggerInput.vue';

describe('TriggerInput.vue', () => {
  it('render testing component FormSubmit', () => {
    const wrapper = shallowMount(TriggerInput);
    // expect(wrapper.toBeTruthy()).toBe(true)
    expect(wrapper.vm).toBeTruthy();
  });

  // it("reveals a notification when submitted", async () => {
  //   const wrapper = mount(TriggerInput)

  //   await wrapper.find("[data-username]").setValue("alice")
  //   await wrapper.find("form").trigger("submit.prevent")

  //   expect(wrapper.find(".message").text())
  //     .toBe("Thank you for your submission, alice.")
  // })

  it('watch seharusnya ter-trigger', () => {
    const wrapper = shallowMount(TriggerInput);
    expect(wrapper.find('h1')).toBe('Irfan Maulana');

    // nilai firstName dan lastName akan kita ubah
    wrapper.vm.firstName = 'Syamil';
    wrapper.vm.lastName = 'Al-Khawarizmi';

    expect(wrapper.find('h1')).toBe('Syamil Al-Khawarizmi');
  });
});

describe('FormSubmit.vue', () => {
  // test
  it('render testing component FormSubmit', () => {
    const wrapper = shallowMount(FormSubmit);
    // expect(wrapper.toBeTruthy()).toBe(true)
    expect(wrapper.vm).toBeTruthy();
  });

  it('try testing method submitTipePaket()', () => {
    const valueTipePaket = 'data';
    const wrapper = shallowMount(FormSubmit);

    wrapper.vm.submitTipePaket(valueTipePaket);
    expect(wrapper.vm.tipePaket).toBe(valueTipePaket);
  });

  it('try condition testing condition validWeight', () => {
    const wrapper = shallowMount(FormSubmit);
    const dataSatuan = 'kg';
    const valueBerat = 10;
    wrapper.vm.conditionValidWeight = false;
    wrapper.vm.berat = valueBerat;

    if (dataSatuan === 'kg' && !wrapper.vm.conditionValidWeight) {
      wrapper.vm.conditionValidWeight = false;
      expect(wrapper.vm.conditionValidWeight).toBe(false);
    }
  });

  // test option select
  it('try condition watcher', async () => {
    const wrapper = shallowMount(FormSubmit);

    wrapper.vm.changePerWeight = 'kg';
    const options = wrapper.find('select').findAll('option');

    // testing untuk menentukan nilai option checked
    await options.at(1).setSelected();

    expect(wrapper.find('option:checked').element.value).toBe('gram');

    const dataSatuan = wrapper.vm.changePerWeight;

    if (dataSatuan === 'kg' && !wrapper.vm.conditionValidWeight) {
      wrapper.vm.conditionValidWeight = false;
      expect(wrapper.vm.conditionValidWeight).toBe(false);
    } else if (dataSatuan === 'kg' && wrapper.vm.conditionValidWeight) {
      wrapper.vm.berat = wrapper.vm.berat / 1000;
      expect(wrapper.vm.berat).toBe(10);

      wrapper.vm.conditionValidWeight = false;
      expect(wrapper.vm.conditionValidWeight).toBe(false);
    }
  });

  // it('try click', async () => {
  //   const buttonElement = wrapper.find('.btn');
  //   buttonWrapper.trigger('click');

  //   expect(wrapper.find('.message')).toBe('submit');
  // })
});
