var dt = new Date();
document.querySelector(".date").innerHTML = dt.toLocaleDateString();


loadevents();

function loadevents(){
    document.addEventListener("keyup",submit);
    document.getElementById("clear").addEventListener("click",refresh);
    document.getElementById("list").addEventListener("click",tick_delete);
    document.getElementById("clear_complete").addEventListener("click",delete_completetask);
}

function submit(e)
{
    if(e.keyCode == 13)
    {
        let input = document.querySelector('input');
        if(input.value!='')
        {
            addTask(input.value);
        }
        input.value = '';
    }
}

function addTask(task)
{
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `<input type="checkbox"><label>${task}</label><i class="fa fa-trash" aria-hidden="true"></i>`;
    ul.appendChild(li);

    document.querySelector('.content').style.display = 'block';
}
function refresh()
{
    let ul = document.querySelector('ul');

    ul.innerHTML = '';
}

function tick_delete(e)
{
    if(e.target.className == 'fa fa-trash')
        deletetask(e);
    else
        completetask(e);
}

function deletetask(e)
{
    let remove = e.target.parentNode;
    let parent = remove.parentNode;

    parent.removeChild(remove);
}
function completetask(e)
{
    const text = e.target.nextSibling;
    //console.log(e.target);
    if(e.target.checked)
    {
        text.style.textDecoration = "line-through";
        text.style.color = "black";
    }
    else
    {
        text.style.textDecoration = "none";
        text.style.color = "black";
    }
}

function delete_completetask(e)
{
    const ul = document.querySelector('ul');
    var i = 0;
    //console.log(ul.childElementCount);
    for(i = 0;i<=ul.childElementCount;i++)
    {
//        console.log(ul.childNodes[i],ul.childNodes[i].firstChild);
//        console.log(ul.childNodes[i].firstChild.checked);

        if(ul.childNodes[i].firstChild.checked == true)
        {
            ul.removeChild(ul.childNodes[i]);
            i = i -1;
        }
    }
}
console.log(document.querySelector(".footer-container").width);