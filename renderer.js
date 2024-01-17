document.getElementById('fileRead').addEventListener('click', async () => {
    const fileRead = await window.fileOperation.read()
    document.getElementById('theme-source').innerHTML = fileRead
})

document.getElementById('fileWrite').addEventListener('click', async () => {
    fileText= document.getElementById('fileText').value
    await window.fileOperation.write(fileText)
})