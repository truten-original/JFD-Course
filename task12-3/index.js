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
            console.log(`${word} - ${this.words[word].description}`)
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