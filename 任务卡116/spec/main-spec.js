"use strict";
let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main.main();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

    // it('should show add students information', () => {
    //     sinon.spy(console,'log');
    //     let input_stuinfro = ["马娟,201514620224,汉,15网络2,数学:100,语文:99,英语:98,编程:97",
    //                             "刘林,201514620222,汉,15网络2,数学:90,语文:89,英语:88,编程:87"];
    //     let result = ["学生马娟的成绩被添加","学生刘林的成绩被添加"];
    //     for(var i=0; i<2; i++) {
    //         main.addStudent(input_stuinfro[i]);
    //         expect(console.log.args.join()).toBe(result[i]);
    //     }
    // });
});
