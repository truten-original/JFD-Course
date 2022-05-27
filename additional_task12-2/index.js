class Dictionary {
    #words = {}
    #name
    constructor(name) {
        this.#name = name
    }
    add(word, description) {
        if (!(word in this.allWords)) {
            this.allWords[word] = { word, description }
        }
    }
    addNewWord(wordKey, wordObj) {
        const { word, description, isDifficult } = wordObj
        this.allWords[wordKey] = { word, description, isDifficult }
        console.log(this.allWords)
    }
    remove(word) {
        delete this.allWords[word]
    }
    get(word) {
        console.log(this.allWords[word])
        return this.allWords[word]
    }
    showAllWords() {
        const wordsArr = Object.keys(this.allWords)
        wordsArr.forEach((word) => {
            if (Object.keys(this.allWords[word]).includes('isDifficult')) {
                if (this.allWords[word].isDifficult === true) {
                    console.log(`${word} - ${this.allWords[word].description}, очень сложное слово`)
                } else {
                    console.log(`${word} - ${this.allWords[word].description}, очень легкое слово`)
                }
            } else {
                console.log(`${word} - ${this.allWords[word].description}`)

            }
        })

    }
    get mainName() {
        return this.#name
    }
    set setMainName(mainName) {
        this.#name = mainName
    }
    get allWords() {
        return this.#words
    }
}
const dictionary = new Dictionary("Толковый словарь")


class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }
    add(word, description, isDifficult = true) {
        if (!(word in this.allWords)) {
            this.allWords[word] = { word: word, description: description, isDifficult: isDifficult }
        }
    }
}
const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
    "дилетант",
    "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
    "неологизм",
    "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
    "квант",
    "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант
