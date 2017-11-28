const main = require('../main/main');
const loadAllItems = require("../main/datbase");
const loadPromotions = require("../main/datbase");
const getformatinput = require("../main/main");
const getinfroGoods = require("../main/main");
describe('pos', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = loadAllItems();
        Promotions = loadPromotions();
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });
    
    var input = [{"barcode":"ITEM000001","count":5}, {"barcode":"ITEM000003","count":2}, {"barcode":"ITEM000005","count":3}];
    it("formatted input", function() {
        var expectinput = getformatinput(inputs);
        expect(expectinput).toEqual(input);
    });

    var infro = [{"barcode":"ITEM000001","name":"雪碧","unit":"瓶","count":5,"price":3.00}, 
                {"barcode":"ITEM000003","name":"荔枝","unit":"斤","count":2,"price":15.00},
                {"barcode":"ITEM000005","name":"方便面","unit":"袋","count":3,"price":4.50}]
    it("acquire all infromation of goods", function() {
        var expectinfro = getinfroGoods(input,allItems);
        expect(expectinfro).toEqual(infro);
    });


    // it('should print correct text', function () {

    //     spyOn(console, 'log');

    //     printInventory(inputs);

    //     var expectText =
    //         '***<没钱赚商店>购物清单***\n' +
    //         '名称：雪碧, 数量：5瓶, 单价：3(元), 小计：12(元)\n' +
    //         '名称：荔枝, 数量：2斤, 单价：15(元), 小计：30(元)\n' +
    //         '名称：方便面, 数量：3袋, 单价：4.5(元), 小计：9(元)\n' +
    //         '----------------------\n' +
    //         '挥泪赠送商品：\n' +
    //         '名称：雪碧, 数量：1瓶\n' +
    //         '名称：方便面, 数量：1袋\n' +
    //         '----------------------\n' +
    //         '总计：51(元)\n' +
    //         '节省：7.5(元)\n' +
    //         '**********************';

    //     expect(console.log).toHaveBeenCalledWith(expectText);
    // });
});
