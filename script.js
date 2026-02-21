function showMore() {
    const moreText = document.getElementById("moreText");

    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
    } else {
        moreText.classList.add("hidden");
    }
}
