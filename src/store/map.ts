// 导入pinia的defineStore函数，用于定义一个store
import { defineStore } from "pinia";

// 定义一个名为useMapStore的store，使用defineStore函数
export const useMapStore = defineStore("map", () => {

    // 定义一个map的数组
    const map = [1, 2, 3];

    // 返回一个包含map的对象，以便在组件中使用
    return {
        map,
    };
});