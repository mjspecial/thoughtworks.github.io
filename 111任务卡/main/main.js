// var practice = function () {
//     var num;
//     var str = "";

//     for(num = 99; num > 1; num --){
//         if(num>2) {
//             str += num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
//                 "Take one down and pass it around, " + (num - 1) + " bottles of beer on the wall.\n"
//         }else  if(num===2){
//              str += num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
//                 "Take one down and pass it around, " + (num - 1) + " bottle of beer on the wall.\n"
//         }
//     }

//     str += "1 bottle of beer on the wall, 1 bottle of beer.\n" +
//            "Take one down and pass it around, no more bottles of beer on the wall.\n"  +
//            "No more bottles of beer on the wall, no more bottles of beer.\n" +
//            "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

//     return str;
// }

// module.exports = practice;

module.exports = function practice(num) {
    function printLyric(i) {
        var str = "";
        if(i > 2) {
            str = num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
                    "Take one down and pass it around, " + (num - 1) + " bottles of beer on the wall.\n" ;
            return str;
            
        }
        else if(i == 2) {
            str = i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
                    "Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.\n" 
            return str;
        }
        else if(i == 1) {
            str = i + " bottle of beer on the wall, "+ i +" bottle of beer.\n" +
                        "Take one down and pass it around, no more bottles of beer on the wall.\n";
            return str;
        }
        else if(i == 0) {
            str = "No more bottles of beer on the wall, no more bottles of beer.\n" +
                        "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
            return str;
        }
    }

    var printstr = "";
    for(var j = num; j >= 0; j--) {
        printstr += printLyric(j);
    }
    return printstr;
    
}