import { configure, defineRule } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import AllRules from '@vee-validate/rules';
import en from '@vee-validate/i18n/dist/locale/en.json';
import tr from '@vee-validate/i18n/dist/locale/tr.json';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    en,
    tr,
  }),
  validateOnInput: true,
});




// import * as VeeValidate from 'vee-validate';

// import { localize } from '@vee-validate/i18n';
// import AllRules from '@vee-validate/rules';
// import en from '@vee-validate/i18n/dist/locale/en.json';
// import tr from '@vee-validate/i18n/dist/locale/tr.json';

// Object.keys(AllRules).forEach((rule) => {
//   VeeValidate.defineRule(rule, AllRules[rule]);
// });

// VeeValidate.configure({
//   generateMessage: localize({
//     en,
//     tr,
//   }),
//   validateOnInput: true,
// });