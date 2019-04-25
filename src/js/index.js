/* Code by Kalinovsky.
    Find me here
    mail - kalinovsky.job@gmail.com
    tg - @AlexKalinovsky 
    */

import "jquery";
import './bootstrap.min';
import "../sass/css/bootstrap.min.css";
import "../../node_modules/jquery.maskedinput/src/jquery.maskedinput";
import '../sass/index.sass';

// BEGIN CAROUSEL INIT
$('.carousel').carousel({
    interval: 0
});
// END CAROUSEL INIT


// BEGIN CAROUSEL COUNTER


function setCarCount() {
    var carCountAll = $('.case').length;
    var carCountCurrent = $('.case.active').index() + 1;
    $('.cases__pages')
        .children()
        .eq(0)
        .html('0' + carCountCurrent);
    $('.cases__pages')
        .children()
        .eq(2)
        .html('0' + carCountAll);
}
setCarCount();
$('.carousel').on('slid.bs.carousel', setCarCount);
// END CAROUSEL COUNTER

// BEGIN FORM

function setFormCount() {
    var formCountAll = $('.form__item').length;
    var formCountCurrent = $('.form__item_active').index() + 1;
    $('.form__pages')
        .children()
        .eq(0)
        .html(formCountCurrent);
    $('.form__pages')
        .children()
        .eq(2)
        .html(formCountAll);
    $('.form__progress-line')
        .css('width', (100/formCountAll)*formCountCurrent + '%')
    if(formCountCurrent === 4){
       $('.form__button_next').hide();
       $('.form__button_submit').show();       
    } else {
        $('.form__button_next').css('display', 'flex');
        $('.form__button_submit').hide(); 
    }
}
setFormCount();
function resetForm(){
    $('.form__item')
        .removeClass('form__item_active')
        .eq(0)
        .addClass('form__item_active');
    $('#form')[0].reset();
    setFormCount();
}
function checkValidateForm(){
    if(!$('.form__item_active').find('input').val()){
        return false
    } else {
        return true
    }
}
function showError(){
    $('.form__item_active').find('.form__error').addClass('form__error_active');
}
function hideError(){
    $('.form__error').removeClass('form__error_active');
}
$('.form__button_next').click(function(e){
    
    if(checkValidateForm()){
        if($('.form__item_active').next('.form__item')){
            $('.form__item_active')
                .removeClass('form__item_active')
                .next()
                .addClass('form__item_active');
            
        }
        setFormCount();
    } else {
        showError();
    }
});

$('input').keypress(hideError);
$('.form__button_submit').click(function(e){
    if(checkValidateForm()){
        
    } else {
        showError();
    }
});
$('#form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).serialize()
    }).done(function() {
        resetForm();
        $('.form__thx').css('display', 'flex');
    });
    return false;
    
});

$('.form__thx-close').click(function(){
    $('.form__thx').hide();

});

$('.input-selector').click(function(){
    $(this).blur().parent().next().toggle();
});
$('.form__selector-item').click(function(){
    $(this).parent('.form__selector').toggle().toggle().prev().children('input').val($(this).attr('data-selector'));
});


$('#tel').mask("+9 (999) 999-999-99");
// END FORM