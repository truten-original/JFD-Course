class Dictionary {
    words = {}
    constructor(name) {
        this.name = name
    }
    add(word, description) {
        if (!(word in this.words)) {
            this.words[word] = { word: word, description: description }
        }
    }
    remove(word) {
        delete this.words[word]
    }
    get(word) {
        return console.log(this.words[word])
    }
    showAllWords() {
        const wordsArr = Object.keys(this.words)
        wordsArr.forEach((word) => {
            if (Object.keys(this.words[word]).includes('isDifficult')) {
                if (this.words[word].isDifficult === true) {
                    console.log(`${word} - ${this.words[word].description}, очень сложное слово`)
                } else {
                    console.log(`${word} - ${this.words[word].description}, очень легкое слово`)
                }
            } else {
                console.log(`${word} - ${this.words[word].description}`)

            }
        })
    }
}
const dictionary = new Dictionary("Толковый словарь")
dictionary.add("JavaScript", "популярный язык программирования")
dictionary.add(
    "Веб-разработчик",
    "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
)
dictionary.get('JavaScript')
dictionary.remove("JavaScript")
dictionary.showAllWords()

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }
    add(word, description, isDifficult = false) {
        if (!(word in this.words)) {
            this.words[word] = { word: word, description: description, isDifficult: isDifficult }
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
hardWordsDictionary.showAllWords()
hardWordsDictionary.get("дилетант")