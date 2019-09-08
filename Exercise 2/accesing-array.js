function balikString(word) {
    var reverseWord = ''
    var array1 = word.split('')

    for (i = array1.length - 1; i >= 0; i-- ) {
    reverseWord = reverseWord + array1[i]
    }
    console.log(reverseWord)
}

balikString('hello world!')


