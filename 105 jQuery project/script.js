
function createTodo(){
    console.log("Creating new Todo Form");

    let text = $("#txtTodo").val();
    console.log(text);

    let syntax = 
    `<div class="item">
        <label>${text}</label>
        <button class="btn btn-sm btn-primary"><i class="fas fa-check-double"></i></button>
        <button class="btn btn-sm btn-danger"><i class="far fa-trash-alt"></i></button>
    </div>`;

    $("#pendingList").append(syntax);

    //clear the text\\
    $("#txtTodo").val('').focus();
}

function init() {
    console.log("TODO APP");

    //hook event//
    $("#btnSave").click(createTodo)
    $("#txtTodo").keypress(function(args){
        if(args.keyCode === 13) {
            createTodo();
        }
    });
    

}


window.onload = init ;