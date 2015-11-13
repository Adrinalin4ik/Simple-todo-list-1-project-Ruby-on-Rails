// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree
//= require 'icheck'

///open add todo
$(document).ready(function() {
     $('#create_div').hide();
     $('#shadow_overlay').css('display','none');
     $('#project_title').css('display','none');


///cloase add todo
     $("#add_new_todo").click(function (event) {
       console.log("onClickEvent() called")
        $('#create_div').show();
        $('#add_new_todo').toggle();
        $('#shadow_overlay').css('display','block');

        //turn off title field
        $('#project_title').css('display','none');
      //  reset_fields();
    });

     $('#hide_new_todo').click(function (event) {
       console.log("onClickEvent() called")
        $('#create_div').hide();
        $('#add_new_todo').show();
        $('#shadow_overlay').css('display','none');

    });
    /////////////fields letters
   $('#project_title').click(function (event) {
     $('#project_title').removeAttr('value');
     $('#project_title').css('font-size', '17px');
     $('#project_title').css('color', 'black');
   });

   $('#project_text').click(function (event) {
     $('#project_text').removeAttr('value');
     $('#project_text').css('font-size', '17px');
     $('#project_text').css('color', 'black');
   });

   /////////// SELECT
   $('select').select2({
     'width': '340px',
    	placeholder: "Категория",
    	allowClear: false,
    	minimumResultsForSearch: -1
    }).on('change', function (e) {
    //var str = $("#s2id_search_code .select2-choice span").text();
    console.log("changed");
    var selected_index = document.getElementById('select_category').options.selectedIndex;
    var selected_value = document.getElementById('select_category').options[selected_index].value;
    console.log("selected index = "+selected_index+" selected value= "+selected_value);
    document.getElementById('project_title').setAttribute('value',selected_value);

    if(selected_value=='Создать новый список')
    {
      $('#project_title').css('display','block');
      document.getElementById('project_title').setAttribute('value','Заголовок');
    }
  });





/*   function reset_fields(){
     $('#project_title').setAttribute('value','Название списка');
      $('#project_text').setAttribute('value','Название задания');
     $('#project_text').css('font-size', '16px');
     $('#project_text').css('color', 'gray');
     $('#project_title').css('font-size', '16px');
     $('#project_title').css('color', 'gray');
   });*/


   //index
    var labels = document.getElementsByTagName("label");
    var submits = document.getElementsByName('commit');

  $('input').on('ifCreated', function(event){
  checking_load($(this));
  }).iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%'
  });

  function checking_load(element){
    if(element.attr('value')=="true")
    {
      var id = element.attr('id');
      //console.log(id);
      //var label = labels[element.attr('id')-1];
     //var label = labels.getAttribute('id');
    var label;
    for (var i=0;i<labels.length;i++){
        if (labels[i].getAttribute('id')==id){
          label = labels[i];
      }
    }

      label.style.textDecoration = 'line-through';
      element.iCheck('check');
      //console.log("checking element= "+ label);
      //console.log("checkBox id "+id+" label "+label.getAttribute('id'));
    }
  }

  $('input').on('ifChecked', function(event){
   var id = $(this).attr('id');
   var label;
   for (var i=0;i<labels.length;i++){
       if (labels[i].getAttribute('id')==id){
         label = labels[i];
     }
   }


   label.style.textDecoration = 'line-through';
   console.log("checked");
   $(this).iCheck('check');
   console.log("checkBox id "+id+"label "+label.getAttribute('id'));

  });

  $('input').on('ifUnchecked', function(event){
    var id = $(this).attr('id');
    var label;
    for (var i=0;i<labels.length;i++){
        if (labels[i].getAttribute('id')==id){
          label = labels[i];
      }
    }
   label.style.textDecoration = 'none';
   console.log("unchecked");
   $(this).iCheck('uncheck');

  });

  $('input').on('ifClicked', function(event){
   var id = $(this).attr('id');
   var submit;
   for (var i=0;i<submits.length;i++){
       if (submits[i].getAttribute('id')==id){
         submit = submits[i];
     }
   }

   submit.click();

  });

});
