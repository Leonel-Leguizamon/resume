const downloadFiles = (files) => {
    files.forEach(file => {
        const element = document.createElement("file");
        element.href = file;
        const fileName = file.substring(file.lastIndexOf('/') + 1);
        element.download = fileName;
        document.body.appendChild(element); // Requerido para que funcione en Firefox
        element.click();
        document.body.removeChild(element);
    });
};

export {
    downloadFiles,
}
