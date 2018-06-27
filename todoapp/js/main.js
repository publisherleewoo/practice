var todoData = [];
var todoWrap = document.getElementById('todoWrap');
var formControl = todoWrap.querySelectorAll('.form-control')[0];
var listGroup = document.querySelectorAll('.list-group')[0]
var inputGroupBtn = todoWrap.querySelectorAll('.input-group-btn')[0];
var li = null;
var update = null;
var remove = null;

function todoAdd() {
    var inputData = formControl.value;
    if (inputData === "") { return }
    todoData.push({ value: inputData, play: false })
    listGroup.innerHTML += "<li><a href='#' class='list-group-item'>" + inputData + "<span class='glyphicon glyphicon-remove'></span></a></li>"
    li = listGroup.getElementsByTagName('li');
    update = listGroup.querySelectorAll('.glyphicon-cog');
    remove = listGroup.querySelectorAll('.glyphicon-remove');

    removeList()
    checkList()
}

function clear() {
    formControl.value = "";
}

function checkList() {
    var list = listGroup.children
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e, i) {
            e.preventDefault();
            for (var i = 0; i < list.length; i++) {
                if (list[i] === this) {
                    var a = this.querySelectorAll('a')[0]
          
                        if (a.classList[1] === "active") {
                            
                            a.classList.remove('active');
                            todoData[i].play = false;
                        } else {
                      
                            a.classList.add('active');
                            todoData[i].play = true;
                        }

                 
                }
            }
        })

    }
}
          



function removeList() {
    var removelist = listGroup.querySelectorAll('.glyphicon-remove');
    for (var i = 0; i < li.length; i++) {
        remove[i].addEventListener('click', function (e) {
            for (var i = 0; i < removelist.length; i++) {
                if (removelist[i] === this) {
                    var removeTargetli = this.parentElement.parentElement;
                    console.log(removeTargetli)
                    todoData.splice(i, 1)
                    listGroup.removeChild(removeTargetli)
                }
            }
        })
    }
}




/* create  */
inputGroupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    todoAdd();
    clear();

})
formControl.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        todoAdd();
        clear();
    }
})










