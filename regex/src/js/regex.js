let regex1 = str => { 
    return str.match(/a.b/g)
} 

let regex2 = str => { 
    return str.match(/a..\S\b/g)
} 

let regex3 = str => { 
    return str.match(/ab.\S/g)
} 

let regex4 = str => { 
    return str.match(/ab+a/g)
} 

let regex5 = str => { 
    return str.match(/ab*a/g)
} 

let regex6 = str => { 
    return str.match(/ab?a/g)
} 

let regex7 = str => { 
    return str.match(/ab*a/g) 
} 

let regex8 = str => { 
    return str.match(/(abab+)+/g) 
} 

let regex9 = str => { 
    return str.match(/a\.a/g) 
} 

let regex10 = str => { 
    return str.match(/2\+3/g) 
} 

let regex11 = str => { 
    return str.match(/2\++3/g) 
} 

let regex12 = str => { 
    return str.match(/23|2\++3/g) 
} 

let regex13 = str => { 
    return str.match(/\*q+\+/g) 
} 

let regex14 = str => { 
    let regex = /[a\b]/g
    return str.replace(regex , '!')
} 

let regex15 = str => { 
    return str.match(/ab{2,4}\w\b/g) 
} 

let regex16 = str => { 
    return str.match(/ab{0,3}a/g) 
}

let regex17 = str => { 
    return str.match(/ab{4,}a/g) 
}

let regex18 = str => { 
    return str.match(/a\da/g) 
}

let regex19 = str => { 
    return str.match(/a\d+a/g) 
}

let regex20 = str => { 
    return str.match(/a\d*a/g) 
}

let regex21 = str => { 
    return str.match(/a\Db/g) 
}

let regex22 = str => { 
    return str.match(/a\Wb/g) 
}

let regex23 = str => { 
    let regex = /\s/g
    return str.replace(regex , '!')
} 

let regex24 = str => { 
    return str.match(/a[b,e,x]a/g) 
} 

let regex25 = str => { 
    return str.match(/a[b,.,+,*]a/g) 
} 

let regex26 = str => { 
    return str.match(/a[3-7]a/g) 
} 

let regex27 = str => { 
    return str.match(/a[a-g]a/g) 
} 

let regex28 = str => { 
    return str.match(/a[a-f,j-z]a/g) 
}

let regex29 = str => { 
    return str.match(/a[a-f,A-Z]a/g) 
}

let regex30 = str => { 
    return str.match(/a[^e,x,\s]a/g) 
}

let regex31 = str => { 
    return str.match(/w[а-я,ё]w/g) 
}

let regex32 = str => { 
    return str.match(/a[a-z]+a/g) 
}

let regex33 = str => { 
    return str.match(/a[A-Z]+a/g) 
}

let regex34 = str => { 
    return str.match(/a[a-z,0-9]+a/g) 
}

let regex35 = str => { 
    return str.match(/[а-я,А-Я,ё,Ё]+/g) 
}

let regex36 = str => { 
    let regex = /^aaa/g
    return str.replace(regex , '!')
} 

let regex37 = str => { 
    let regex = /aaa$/g
    return str.replace(regex , '!')
} 

let regex38 = str => { 
    return str.match(/ae+a|ax+a/g) 
}

let regex39 = str => { 
    return str.match(/a(ee|x+)a/g) 
}

let regex40 = str => { 
    let regex = /a\\a/g
    return str.replace(regex , '!')
}

let regex41 = str => { 
    let regex = /a\\\\\\a/g
    return str.replace(regex , '!')
}

let regex42 = str => { 
    let regex = /\/\w+\\/g
    return str.replace(regex , '!')
}

let regex43 = str => { 
    return str.replace(/(\w+)@(\w+)/g, '$2@$1' )
}

let regex44 = str => { 
    return str.replace(/(\d)/g, '$1$1' )
}

let regex45 = str => { 
    regex = /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/g
    return regex.test(str)
}

let regex46 = str => { 
    return str.match(/([a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3})/g) 
}

let regex47 = str => { 
    regex = /([a-zA-z]+\W?[a-z]+\.[a-z]{2,3})/g
    return regex.test(str)
}

let regex48 = str => { 
    regex = /(http\:\/\/[a-zA-z]+\W?[a-z]+\.[a-z]{2,3})/g
    return regex.test(str)
}

let regex49 = str => { 
    regex = /((http|https)\:\/\/[a-zA-z]+\W?[a-z]+\.[a-z]{2,3})/g
    return regex.test(str)
}

let regex50 = str => { 
    regex = /(^http|https)+:\/\/\w+\.\w{2,3}/g
    return regex.test(str)
}

let regex51 = str => { 
    regex = /\w+\.(txt|html|php)/g
    return regex.test(str)
}

let regex52 = str => { 
    regex = /\w+\.(jpg|jpeg)/g
    return regex.test(str)
}

let regex53 = str => { 
    regex = /^\d{12}$/g
    return regex.test(str)
}

let regex54 = str => { 
    let arr = [];
    let sum = 0;
    arr = str.match(/\d+/g)
    for(let i = 0; i < arr.length; i++) {
        sum = sum + parseInt(arr[i])
    }
    return sum;
}

let regex55 = str => { 
    return str.replace(/(http\:\/\/[a-zA-z]+\W?[a-z]+\.[a-z]{2,3})/g, '<a href="$1">$1</a>' )
}

let regex56 = str => { 
    return str.replace(/\s+/g, " ")
}

let regex57 = str => { 
    return str.replace(/\/\*|\*\//g, " ")
}

let regex58 = str => { 
    return str.replace(/\<\!\-\-\s|\s\-\-\>/g, " ")
}

let regex59 = str => { 
    return str.replace(/aaa(?=b)/g, "!")
}

let regex60 = str => { 
    return str.replace(/aaa(?!b)/g, "!")
}

let regex61 = str => { 
    return str.replace(/\d+/g, function(num) {
        return num*num
    })
}

let regex62 = str => { 
    return str.replace(/\d+(?=')/g, function(num) {
        return num*2
    })
}

let regex63 = str => { 
    return str.replace(/(т)(е)(к)(с)(т)(?=}})/g, '$5$4$3$2$1' )
}

let regex64 = str => {
    return str.replace(/(\d+)\s\+\s(\d+)\s=/g,
        function(num, num1, num2){
            var result = parseInt(num1) + parseInt(num2);
            return num + " " + result
        })
}

let regex65 = str => { 
    return str.match(/19\d\d|20\d\d|2100/g) 
}

let regex66 = str => { 
    regex = /([01]\d|2[0-3])+(\:|\.)+[0-5]\d/g
    return regex.test(str) 
}

let regex67 = str => { 
    regex = /(1[0-2]|[0-9])\.[0-5]\d\s[ap]m/g
    return regex.test(str) 
}

let regex68 = str => { 
    return str.replace(/\W*\w*(\w)\1\w*\W*/g, "")
}

let regex69 = str => { 
    return str.replace(/\b(\w+)\s+\1/g, '$1' )
}

let regex70 = str => { 
    return str.replace(/\b(\w+)\b(\s\1)+/g, '$1' )
}

module.exports.reg = {
    regex1,
    regex2,
    regex3,
    regex4,
    regex5,
    regex6,
    regex7,
    regex8,
    regex9,
    regex10,
    regex11,
    regex12,
    regex13,
    regex14,
    regex15,
    regex16,
    regex17,
    regex18,
    regex19,
    regex20,
    regex21,
    regex22,
    regex23,
    regex24 ,
    regex25,
    regex26,
    regex27,
    regex28,
    regex29,
    regex30,
    regex31,
    regex32,
    regex33,
    regex34,
    regex35,
    regex36,
    regex37,
    regex38,
    regex39,
    regex40,
    regex41,
    regex42,
    regex43,
    regex44,
    regex45,
    regex46,
    regex47,
    regex48,
    regex49,
    regex50,
    regex51,
    regex52,
    regex53,
    regex54,
    regex55,
    regex56,
    regex57,
    regex58,
    regex59,
    regex60,
    regex61,
    regex62,
    regex63,
    regex64,
    regex65,
    regex66,
    regex67,
    regex68,
    regex69,
    regex70
  };