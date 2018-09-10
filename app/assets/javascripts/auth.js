$(function(){

    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
            $('donelogin').show();
            $('#notlogin').hide();

        }else {
            $('#donelogin').hide();
            $('#notlogin').show();
        }
    });


    $('#gmaillogin').click(function(){
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            location.reload();
        }).catch(function(error) {
            console.log(error)
            alert('ログイン失敗');
        });
    });

    $('#maillogin').click(function () {
        var email = $('#email').val();
        var password = $('#password').val();

        if (!email && !password) {
            alert('Eメールアドレスとパスワードを入力し直す');
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
                location.reload();

            }).catch(function(){
                firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
                    location.reload();
                }).catch(function(error) {
                    alert('ログインできない');
                });
            })
        }
    });

    $('#signout').click(function() {
        firebase.auth().signOut().catch(function(error){
            alert('サインアウト失敗')
        });
    });
});