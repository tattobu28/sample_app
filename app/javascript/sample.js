$(function(){
  $('#btn1').click(function(){
    $.ajax({
      url: "/test",
      type: "POST",
      dataType: "json",
      data: { user: { name: "foo", age: 25 } }
    })
    .done((human) => {
      alert("成功")
    })
    .fail((human) => {
      console.log("失敗")
    })
    .always((human) => {
      console.log(human)
    });
  });
});