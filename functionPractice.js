// 1
function newNumber(value){
    value *= 4;
    value += 13;
    return value;
}
console.log(newNumber(5))

// 2
function removeVowels(word){
    return word.replace(/[aeiou]/gi, '');
}
console.log(removeVowels("coolion"))

// 3
function removeLongLorem(sentence) {
    sentence = sentence.split(' ').filter((word) => word.length <= 4);
    return sentence.join(' ');
}

let lorem20 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo ea vero corporis laboriosam neque porro quis totam nam similique!"
console.log(removeLongLorem(lorem20))