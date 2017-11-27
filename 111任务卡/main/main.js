
// module.exports = function practice() {
//     var str = "";

//     for(var i = 99; i >= 1; i--) {
//         if(i > 2) {
//             str += i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
//                 "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n";
//         }
//         else  if(i == 2) {
//              str += i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
//                 "Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.\n";
//         }
//         else {
//             str += "1 bottle of beer on the wall, 1 bottle of beer.\n" +
//                     "Take one down and pass it around, no more bottles of beer on the wall.\n"  +
//                     "No more bottles of beer on the wall, no more bottles of beer.\n" +
//                     "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
//         }
//     }

//     return str;
// };


var printCommonLyrics = function(num) {
    var str = "";
    for(var i = num; i > 2; i--) {
        str += i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
                "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n";
    }
    return str
}

var printSpecialLyrics_2 = function(num) {
    var str = "";
    str = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
        "Take one down and pass it around, 1 bottle of beer on the wall.\n";
    return str;
}

module.exports.practice = function practice(num) {
    var number = 99;
    var CommonLyrics = printCommonLyrics(number);
    
    // for(var i = 2; i >= 0; i--) {
    //     if(i == 2) {
    //         var SpecialLyrics_2 = printSpecialLyrics_2(i);
    //         return SpecialLyrics_2;
    //     }
    // }
    var num = 2;
    if(num == 2) {
        var SpecialLyrics_2 = printSpecialLyrics_2(num);
        return SpecialLyrics_2;
    }
    return CommonLyrics;
} 