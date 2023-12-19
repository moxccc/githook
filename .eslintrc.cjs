/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

// @see https://eslint.bootcss.com/docs/rules/
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  /* 继承已有的规则(全部规则默认是关闭的, 这个配置项开启推荐规则, 推荐规则参照文档) */
  extends: [
    'eslint:recommended', // 比如: 函数不能重名、对象不能出现重复key
    'plugin:vue/vue3-essential', // vue3语法规则
    '@vue/eslint-config-prettier'
  ],
  plugins: ['vue'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop 的改变
    'vue/no-reserved-component-names': 'off', // 不允许在组件定义中使用保留名称
    'vue/attribute-hyphenation': 'off' // 对模板中的自定义组件强制执行属性命名样式
  }
}
