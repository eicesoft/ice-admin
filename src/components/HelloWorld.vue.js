/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { reactive, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});
const rules = ref({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
});
const onSubmit = () => {
    console.log('submit!');
};
const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ width: ("100"), rules: ((__VLS_ctx.rules)), model: ((__VLS_ctx.form)), labelWidth: ("auto"), }));
    const __VLS_2 = __VLS_1({ width: ("100"), rules: ((__VLS_ctx.rules)), model: ((__VLS_ctx.form)), labelWidth: ("auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ size: ("small"), border: (true), data: ((__VLS_ctx.tableData)), ...{ style: ({}) }, }));
    const __VLS_8 = __VLS_7({ size: ("small"), border: (true), data: ((__VLS_ctx.tableData)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ prop: ("date"), label: ("Date"), width: ("180"), }));
    const __VLS_14 = __VLS_13({ prop: ("date"), label: ("Date"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ prop: ("name"), label: ("Name"), width: ("180"), }));
    const __VLS_20 = __VLS_19({ prop: ("name"), label: ("Name"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ prop: ("address"), label: ("Address"), }));
    const __VLS_26 = __VLS_25({ prop: ("address"), label: ("Address"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ prop: ("action"), label: ("Action"), }));
    const __VLS_32 = __VLS_31({ prop: ("action"), label: ("Action"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_35.slots);
        const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ prop: ("name"), }));
        const __VLS_38 = __VLS_37({ prop: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ modelValue: ((__VLS_ctx.form.name)), }));
        const __VLS_44 = __VLS_43({ modelValue: ((__VLS_ctx.form.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        __VLS_nonNullable(__VLS_41.slots).default;
        var __VLS_41;
    }
    var __VLS_35;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_56 = __VLS_55({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    let __VLS_60;
    const __VLS_61 = {
        onClick: (__VLS_ctx.onSubmit)
    };
    let __VLS_57;
    let __VLS_58;
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({}));
    const __VLS_64 = __VLS_63({}, ...__VLS_functionalComponentArgsRest(__VLS_63));
    __VLS_nonNullable(__VLS_67.slots).default;
    var __VLS_67;
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            form: form,
            rules: rules,
            onSubmit: onSubmit,
            tableData: tableData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
