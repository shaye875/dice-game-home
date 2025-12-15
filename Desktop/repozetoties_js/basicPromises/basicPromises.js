import fs from 'fs'
//3.1
function getHello() {
    const p1 = new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Hello");
        }, 500)
    })
    p1.then((result) => {
        console.log(result);
    })
}
// getHello()
//3.2
function addAsync(a, b) {
    const p1 = new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b)
        }, 1000)
    })
    return p1
}
let p1 = addAsync(5, 7)
p1.then((res) => {
    console.log(res);
})
//3.10
function downloadFile(url) {


    const p1 = new Promise((res, rej) => {
        if (url[0] === "h" && url[1] === "t" && url[2] === "t" && url[3] === "p") {
            res("Downloaded from URL")
        } else {
            rej("Invalid URL")
        }
    })
    return p1
}
let p = downloadFile("htt")
p.then((res) => {
    console.log(res);
}).catch((rej) => {
    console.log(rej);
})
//4.1
function getUserName() {
    let p1 = new Promise((res, rej) => {
        res("Dana")
    })
    return p1
}
getUserName().then((res) => {
    console.log(res);
})
//4.9
function downloadFile(url) {
    return new Promise((rs, rej) => {
        if (url) {
            setTimeout(() => {
                rs("Download finished")
            }, 1000)
        }
    })

}

downloadFile("http").then(console.log("starting")).then((res) => {
    console.log(res);
})
//4.10
function doubleAsync(value) {
    return new Promise((res, rej) => {
        res(value * 2)
    })
}
doubleAsync(10).then((res) => {
    console.log(res);
})
//5.1
function getUser() {
    return new Promise((res, rej) => {
        res({
            id: 1,
            name: "Dana"
        })
    })
}
function getScore(userId) {
    return new Promise((res, eej) => {
        res(90
        )
    })
}
getUser().then((user) => {
    getScore(user.id).then((score) => {
        console.log(user.name, score);

    })
})
//5.9
function getNumbers() {
    return new Promise((res, rej) => {
        res([1, 2, 3])
    })
}
function sumArray(arr) {
    let sum = 0
    for (let n of arr) {
        sum += n
    }
    return new Promise((res, rej) => {
        res(sum)
    })
}
function double(n) {
    return new Promise((res, rej) => {
        res(n * 2)
    })
}
getNumbers().then((arr) => {
    sumArray(arr).then((sum) => {
        double(sum).then((result) => {
            console.log(result);
        })
    })
})
//5.10
function getUser() {
    return new Promise((res, rej) => {
        res({
            id: 1,
            name: "Dana"
        })
    })
}
function getSettings(user) {
    return new Promise((res, rej) => {
        res({
            id: user.id,
            name: user.name,
            language: "hi",
            theme: "dark"
        })
    })
}
getUser().then((user) => { return getSettings(user) }).then((lang) => {
    console.log(`${l.name} uses language ${lang.language} and theme ${lang.theme}`);
})
//6.8
fs.promises.unlink("log.txt")
    .then((res) => console.log("log.txt deleted")
    ).catch((rej) => console.log("print error"))
//6.9
fs.promises.writeFile("note.txt", "New content here")
    .then(() => {
        fs.promises.readFile("note.txt", "utf8",).then((res) => {
            console.log(res);
        })
    })
//6.10
fs.promises.mkdir("data")
    .then(() => {
        fs.promises.writeFile("data/info.txt", "Some info").then(() => {
            console.log("create file")
        }).catch(() => { "not create file" })
    }).catch(() => {
        console.log("not create folder")
    })

