$(function(){

    const ref = firebase.database().ref('chat');

    ref.on('child_added', function (childSnapshot) {
        var chatmsg = $('<div></div>').text(childSnapshot.val().content);
        $('#chat').append(chatmsg);
        console.log('Firebaseからの読み込み');
    });

    $('#post').click(function (){
        var text = $('#content').val();
        var key = ref.push({content: text}).key;
        console.log(text);
        console.log(key);
        $('#content').val('');
    });
});