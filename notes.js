document.addEventListener("DOMContentLoaded", function () {
    const uploadInput = document.getElementById("pdfUpload");
    const listContainer = document.getElementById("pdfList");

    uploadInput.addEventListener("change", function (e) {
        const files = Array.from(e.target.files);

        files.forEach(file => {
            if (file.type === "application/pdf") {
                const reader = new FileReader();

                reader.onload = function () {
                    const link = document.createElement("a");
                    link.href = reader.result;
                    link.textContent = file.name;
                    link.target = "_blank";

                    const listItem = document.createElement("li");
                    listItem.appendChild(link);
                    listContainer.appendChild(listItem);
                };

                reader.readAsDataURL(file);
            } else {
                alert("Please upload only PDF files.");
            }
        });

        // Clear the file input after upload
        e.target.value = "";
    });
});

