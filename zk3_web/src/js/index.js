$(".change").on("touchend", function() {
    let values = $(".chufa input").val();
    $(".chufa input").val($(".daoda input").val());
    $(".daoda input").val(values)
    console.log(new Date().getDate())
})
$(".btn").on("touchend", function() {
    location.href = "http://localhost:8844/html/detail.html?" + "date" + "=" + new Date().getMonth() + "-" + new Date().getDate();
})