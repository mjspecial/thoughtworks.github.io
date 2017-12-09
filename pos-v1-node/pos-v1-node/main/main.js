const datbase= require("./datbase");
const loadAllItems = datbase.loadAllItems;
const loadPromotions = datbase.loadPromotions;
// module.exports = function main(inputs) {
//     var allItems = loadAllItems();
//     // var Promotions = loadPromotions(); 
//     var Promotions = [
//         'ITEM000000',
//         'ITEM000001',
//         'ITEM000005'
//     ];
//     //格式化数组
//     var barcode,
//     count = 1,
//     sum = 0,
//     formatinput = [];

//     for(var i = 0; i < inputs.length; i++) {
//         if(inputs[i].indexOf('-') != -1) {
//             var infor = inputs[i].split('-')[0];
//             var num = parseInt(inputs[i].split('-')[1]);
//             formatinput[sum] = {"barcode":infor,"count":num};
//             sum++;
//             continue;
//         }
        
//         if(inputs[i] == inputs[i+1]) {
//             count++;
//         }
//         else {
//             formatinput[sum] = {"barcode":inputs[i],"count":count};
//             count = 1;
//             sum++;
//         }
//     }

//     //获取所有购买的商品信息
//     var getAllGoods = [];
//     var name,price,unit,count,barcode;
//     for(var i = 0; i< formatinput.length; i++) {
//         for(var j = 0; j < allItems.length; j++) {
//             if(formatinput[i].barcode == allItems[j].barcode) {
//                 name = allItems[j].name;
//                 price = allItems[j].price;
//                 unit = allItems[j].unit;
//                 count = parseInt(formatinput[i].count);
//                 barcode = allItems[j].barcode;
//                 getAllGoods[i] = {"name":name,"price":price,"unit":unit, "barcode":barcode, "count":count};
//             }
//         }
//     }

//     //优惠商品的信息
//     var getfavourgoods = [];
//     var num= 0;
//     var favout_name, favout_unit, favout_price;
//     for(var i = 0; i < getAllGoods.length; i++) {
//         for(var j = 0 ; j < Promotions.length; j++) {
//             if(getAllGoods[i].barcode == Promotions[j]) {
//                 favout_name = getAllGoods[i].name;
//                 favout_unit = getAllGoods[i].unit;
//                 favout_price = getAllGoods[i].price;
//                 getfavourgoods[num] = {"name":favout_name, "unit":favout_unit, "price":favout_price};
//                 num++;
//             }
//         }
//     }

    //小计
    // var result = [];
    // var sum = 0;
    // for(var i = 0; i < getAllGoods.length; i++) {
    //     for(var j = 0; j < getfavourgoods.length; j++) {
    //         if(getAllGoods[i].barcode == getfavourgoods[j].barcode) {
    //             if (getAllGoods[i].count > 2) {
    //                 result[i] = (getAllGoods[i].count - 1) * getAllGoods[i].price;
    //                 break;
    //             }
    //             else {
    //                 result[i] = getAllGoods[i].count * getAllGoods[i].price;
    //                 break;
    //             }
    //         }
    //         else {
    //             result[i] = getAllGoods[i].count * getAllGoods[i].price;
    //         }
    //     }
    //     sum += result[i];
    // }

// var getAllGoods_1 =[{"name":"雪碧","barcode":"ITEM000001","unit":"瓶","price":3,"count":5},
// {"name":"荔枝","barcode":"ITEM000003","unit":"斤","price":15,"count":2},
// {"name":"方便面","barcode":"ITEM000005","unit":"袋","price":4.5,"count":3}];
// var getfavourgoods_1 = [{"name":"雪碧","barcode":"ITEM000001","unit":"瓶","price":3},{"name":"方便面","barcode":"ITEM000005","unit":"袋","price":4.5}]
// var result = [];
// var sum = 0;
// for(var i = 0; i < getAllGoods_1.length; i++) {
//     for(var j = 0; j < getfavourgoods_1.length; j++) {
//         if(getAllGoods_1[i].barcode == getfavourgoods_1[j].barcode) {
//             if (parseInt(getAllGoods_1[i].count) > 2) {
//                 result[i] = (parseInt(getAllGoods_1[i].count) - 1) * parseFloat(getAllGoods_1[i].price);
//                 break;
//             }
//             else {
//                 result[i] = (parseInt(getAllGoods_1[i].count)) * parseFloat(getAllGoods_1[i].price);
//                 break;
//             }
//         }
//         else {
//                 result[i] = (parseInt(getAllGoods_1[i].count)) * parseFloat(getAllGoods_1[i].price);
//         }
//     }
//     sum += result[i];
// }

//     //打印小票
//     var expectText;
//     var special_favour = 0;
//     expectText = '***<没钱赚商店>购物清单***\n';
//     for(var i = 0; i <getAllGoods.length; i++) {
//         expectText += "名称：" + getAllGoods[i].name +", 数量：" + parseInt(getAllGoods[i].count) + getAllGoods[i].unit +", 单价：" + parseFloat(getAllGoods[i].price) + "(元), 小计： "
//                     + result[i] + "(元)\n";
//     }

//     expectText += '----------------------\n' +'挥泪赠送商品：\n';
//     for(var j = 0; j < getfavourgoods.length; j++) {
//         expectText += "名称：" + getfavourgoods[j].name + ", 数量：" + "1" + getfavourgoods[j].unit +"\n";
//         special_favour += getfavourgoods[j].price;
//     }
//     expectText += '----------------------\n' + "总计：" + sum + "(元)\n" + "节省：" + parseFloat(special_favour) + "(元)\n" +'**********************';
//     console.log(expectText);
//     return expectText;

// };

// const datbase = require("./datbase");
// var allItems = loadAllItems;
function getformatinput(inputs) {
    var barcode,
    count = 1,
    sum = 0,
    formatinput = [];

    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].indexOf('-') != -1) {
            var infor = inputs[i].split('-')[0];
            var num = parseInt(inputs[i].split('-')[1]);
            formatinput[sum] = {"barcode":infor,"count":num};
            sum++;
            continue;
        }
        
        if(inputs[i] == inputs[i+1]) {
            count++;
        }
        else {
            formatinput[sum] = {"barcode":inputs[i],"count":count};
            count = 1;
            sum++;
        }
    }  
    return formatinput;   
}

function getinfroGoods(input,allItems) {
    // console.log(allItems);
    var getAllGoods = [];
    var name,price,unit,count,barcode;
    for(var i = 0; i< input.length; i++) {
        for(var j = 0; j < 6; j++) {
            console.log(input[i].barcode);
            console.log(loadAllItems[j].barcode);
            if(input[i].barcode == loadAllItems[j].barcode) {
    
                name = loadAllItems[j].name;
                price = loadAllItems[j].price;
                unit = loadAllItems[j].unit;
                count = parseInt(input[i].count);
                barcode = loadAllItems[j].barcode;
                getAllGoods[i] = {"name":name,"price":price,"unit":unit, "barcode":barcode, "count":count};
            }
        }
    }
    return getAllGoods;
}

module.exports = getformatinput;
module.exports = getinfroGoods;