function toggleHide(id)
{
    var display = document.getElementById(id).style.display;
    if (display === "none")
    {
        show(id);
    }
    else
    {
        hide(id);
    }
}
function show(id)
{
    // may need to specify how to display in certain cases.
    document.getElementById(id).style.display = "block";
}
function hide(id)
{
    document.getElementById(id).style.display = "none";
}