document.getElementById('fileUpload').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        var newWidth = Math.max(20, this.offsetWidth);
        var label = this.parentElement;
        label.style.maxWidth = newWidth + 'px';
    }
});
