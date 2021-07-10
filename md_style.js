// preブロッグにコピー機能を付ける
let pre_tags = document.getElementsByTagName("pre");
let counter = 0;
while (counter < pre_tags.length ) {
    console.log(pre_tags[counter]);
    
    let code_tag = pre_tags[counter].getElementsByTagName("code")[0];

    let tag_id = "code_"+counter;
    code_tag.setAttribute("id", tag_id);

    let copy_button = document.createElement('div');
    copy_button.innerText = "　"
    let button_id = "button_" + counter;
    copy_button.setAttribute("id", button_id);
    copy_button.setAttribute("style", "position: relative; left: 80%; top: 0px;\
        border: 0px;\
        font-weight: bold;\
        pading: 0px;\
        margin: 0px;\
        width: 80px;\
        background-color: transparent;\
        border: none;\
        cursor: pointer;\
        outline: none;\
        padding: 0;\
        appearance: none;")
    copy_button.setAttribute("onClick", "selectText(\""+ tag_id +"\", \"" + button_id +"\")");

    pre_tags[counter].insertBefore(copy_button, code_tag);

    pre_tags[counter].addEventListener('mouseover', ()  => {
            copy_button.innerText = "Copy"
        }, false);
    pre_tags[counter].addEventListener('mouseleave', () => {
            copy_button.innerText = "　"
        }, false);

    counter +=1;
}
    
function selectText(tag_id, button_id) {

    let elm = document.getElementById(button_id);
    elm.textContent = 'Copied!!';

    let selection = window.getSelection();
    selection.removeAllRanges();

    var element= document.getElementById(tag_id);
    var rng = document.createRange();
    rng.selectNodeContents(element);
    window.getSelection().addRange(rng);

    document.execCommand("copy");
}
