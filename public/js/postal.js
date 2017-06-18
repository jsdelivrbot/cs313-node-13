/* postal.js - Adam Shumway, CS313 */

/*
Letters (Stamped)
Letters (Metered)
Large Envelopes (Flats)
Parcels
*/

/* var result,
    weight = Number(request.body.weight);
        switch(Number(request.body.weight)){
        case 1:
            result = calcPostageLettersStamped(weight);
            break;
        case 2:
            result = calcPostageLettersMetered(weight);
            break;
        case 3:
            result = calcPostageLargeEnvelopes(weight);
            break;
        case 4:
            result = calPostageParcel(weight);
            break;
    }
*/

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
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option.";
}

/*
Letters (Metered)1 
Weight Not Over (oz.)

1 - $0.46
2 - 0.67
3 - 0.88
3.53 - 1.09
 

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