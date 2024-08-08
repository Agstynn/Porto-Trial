// Clear form before unload 
window.onbeforeunload = ( ) => {
    for (const form of document.getElementsByTagName("form")) {
        forms.reset();
    }
};