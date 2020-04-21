const socket = io();
window.editor = ace.edit("editor")

// Function that updates the editor
/*function update() {
    var idoc = document.getElementById('terminal').contentWindow.document
    idoc.open()
    idoc.write(editor.getValue())
    idoc.close()
}

/*function saveToDataBase(_id) {
        socket.emit('update', {data: editor.getValue(), _id: _id})
}


socket.on('editorUpdate', (updatedData) => {
    // This should be called from the server after a 'change' has been made
    editor.setValue(updatedData) // Changes the data of the editor
})*/


// Just test socket function
socket.on('message', (message) => {
    console.log(message)
})

