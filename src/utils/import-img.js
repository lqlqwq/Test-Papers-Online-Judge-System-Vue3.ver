var fs = require('fs')    //默认该文件和图片放在一起且生成的文件也在当前文件夹下
let text = `// /////////////////////////////////////////////////\n// Design By CitrusLily\n// ////////////////////////////////////////////////\n`
fs.readdir(__dirname, function (err, files) {
    // console.log(__filename.match(/\\(?=((?!\\).)*$)/))
    const trueFiles = files.filter((i) => {
        if (i.split(".")[1] === "png" || i.split(".")[1] === "jpg") return i  //文件格式限定
    })
    const names = trueFiles.map((i) => {
        let a = i.replace(/-/g, "_")                             //将a-b的文件名的输出名转化为a_b
        a = a.split(".")[0]
        return a
    })
    trueFiles.forEach((i, index) => {
        text += `import ${names[index]} from './${i}'\n`         //文件路径  需要则在这更改
    })
    text += `\n\n\n`
    text += `export default {\n`
    names.forEach((i) => {
        text += `   ${i},\n`
    })
    text += `}`
    fs.writeFile("./output.js", text, function (e) { console.log(e) })
})