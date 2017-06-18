/* postal.js - Adam Shumway, CS313 */

/*
Letters (Stamped)1
Weight Not Over (oz.)

1 - $0.49
2 - 0.70
3 - 0.91
3.54 - 1.12
*/
exports.calcPostageLettersStamped = function(weight) {
    switch(weight){
        case 1:
            return "$0.49";
        case 2:
            return "$0.70";
        case 3:
            return "$0.91";
    }
    if(weight > 3 && weight < 4)
        return "$1.12";
    else
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option!";
}

/*
Letters (Metered)1 
Weight Not Over (oz.)

1 - $0.46
2 - 0.67
3 - 0.88
3.53 - 1.09
*/
 exports.calcPostageLettersMetered = function(weight) {
    switch(weight){
        case 1:
            return "$0.46";
        case 2:
            return "$0.67";
        case 3:
            return "$0.88";
    }
    if(weight > 3 && weight < 3.6)
        return "$1.09";
    else
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option!";
}
/*
Large Envelopes (Flats)2
Weight Not Over (oz.)

1 - $0.98
2 - 1.19
3 - 1.40
4 - 1.61
5 - 1.82
6 - 2.03
7 - 2.24
8 - 2.45
9 - 2.66
10 - 2.87
11 - 3.08
12 - 3.29
13 - 3.50
*/
 exports.calcPostageLargeEnvelopes = function(weight) {
    switch(weight){
        case 1:
            return "$0.98";
        case 2:
            return "$1.19";
        case 3:
            return "$1.40";
        case 4:
            return "$1.61";
        case 5:
            return "$1.82";
        case 6:
            return "$2.03";
        case 7:
            return "$2.24";
        case 8:
            return "$2.45";
        case 9:
            return "$2.66";
        case 10:
            return "$2.87";
        case 11:
            return "$3.08";
        case 12:
            return "$3.29";
        case 13:
            return "$3.50";
    }
    if(weight > 13)
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option!";
}
/*
Parcels
Weight Not Over (oz.)

1 - $2.67
2 - 2.67
3 - 2.67
4 - 2.67
5 - 2.85
6 - 3.03
7 - 3.21
8 - 3.39
9 - 3.57
10 - 3.75
11 - 3.93
12 - 4.11
13 - 4.29
*/
exports.calPostageParcel = function(weight) {
    switch(weight){
        case 1:
            return "$2.67";
        case 2:
            return "$2.67";
        case 3:
            return "$2.67";
        case 4:
            return "$2.67";
        case 5:
            return "$2.85";
        case 6:
            return "$3.03";
        case 7:
            return "$3.21";
        case 8:
            return "$3.39";
        case 9:
            return "$3.57";
        case 10:
            return "$3.75";
        case 11:
            return "$3.93";
        case 12:
            return "$4.11";
        case 13:
            return "$4.29";
    }
    if(weight > 13)
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option!";
}