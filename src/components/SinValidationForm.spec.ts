import {mount} from '@vue/test-utils';
import {describe, it, expect, beforeEach, afterEach, vi} from 'vitest';
import SinValidationForm from './SinValidationForm.vue';
import {sinValidator} from '../libs/sin_validator.ts';

vi.mock('../libs/sin_validator.ts'); // Mock the sinValidator function

describe('SinValidationForm', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(SinValidationForm);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should show success indicator when valid SIN is submitted', async () => {
        (sinValidator as vi.Mock).mockReturnValue(true);

        const input = wrapper.find('.sin-input-digit');
        await input.setValue('046454286');

        const button = wrapper.find('button');
        await button.trigger('click');

        const sinInput = wrapper.find('.form-control-input .sin-input')
        const inputIcon = sinInput.find('svg')

        expect(sinValidator).toHaveBeenCalledWith('046 454 286');
        expect(wrapper.vm.isSubmitted).toBe(true);
        expect(wrapper.vm.isValid).toBe(true);
        expect(sinInput.classes()).contains('input-success')
        expect(inputIcon.classes()).contains('fill-green-500')
    });

    it('should show error indicator when invalid SIN is submitted', async () => {
        (sinValidator as vi.Mock).mockReturnValue(false);

        const input = wrapper.find('.sin-input-digit');
        await input.setValue('123456789');

        const button = wrapper.find('button');
        await button.trigger('click');

        const sinInput = wrapper.find('.form-control-input .sin-input')
        const inputIcon = sinInput.find('svg')

        expect(sinValidator).toHaveBeenCalledWith('123 456 789');
        expect(wrapper.vm.isSubmitted).toBe(true);
        expect(wrapper.vm.isValid).toBe(false);
        expect(sinInput.classes()).contains('input-error')
        expect(inputIcon.classes()).contains('fill-red-500')
    });

    it('should format input digits as typing', async () => {
        const input = wrapper.find('.sin-input-digit');
        await input.setValue('123456789');

        expect(wrapper.vm.inputDigits).toBe('123 456 789');
    });

    it('should not allow more than 9 digits input', async () => {
        const input = wrapper.find('.sin-input-digit');
        await input.setValue('1234567890');

        expect(wrapper.vm.inputDigits).toBe('123 456 789');
    });

    it('should not allow non-digit characters', async () => {
        const input = wrapper.find('.sin-input-digit');
        await input.setValue('12340a');

        expect(wrapper.vm.inputDigits).toBe('123 40');
    });
});
