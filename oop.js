    class person {
    constructor (name,age,gender,interests){
    this.name = name
    this.age = age
    this.gender = gender
    this.interests = interests

    }
    talk() {
    console.log(`Hello, I'm ${this.name}, I am a ${this.age} year old ${this.gender}. 
    My interests are ${this.interests}`)
    }
    }

    let a = new person('Jason', 23, 'f', 'chess, sweets, crying');
    let b = new person('Peter', 48, 'm', 'cooking, coding, reading');
    let c = new person('Dimpho', 23, 'f', 'web dev, music, people');
    let d = new person('Tamera', 28, 'f', 'tv, fashion, books');
    let e = new person('Jose', 25, 'm', 'football, rugby');
    let f = new person('Tamera', 32, 'f', 'writing, singing, music, coding, fashion');

a.talk()
b.talk()
c.talk()
d.talk()
e.talk()
f.talk()


