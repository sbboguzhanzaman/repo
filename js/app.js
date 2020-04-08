// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    deneme: function(){
      $(document).on('page:init', '.page[data-name="home"]', function (e, page) {
        var $ptrContent = page.$el.find('.ptr-content');
        $ptrContent.on('ptr:refresh', function (e) {
  setTimeout(function () {
e.detail();  //app.ptr.done();
  console.log("deneme");
}, 2000);
});
});
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

app.methods.deneme();
function funcbutton(event) {
  
  var x = document.getElementById("abc");
  event.stopPropagation();
  x.style.display = 'none';

}



function clickcheck() {
 

  var e = document.getElementById("aa");
  var m= document.getElementById("abc");
  m.style.display = 'block';
  if(e.addEventListener("click", mySecondFunction)===true)
  {
    console.log("aaaa2");
  }
     
}
function mySecondFunction() {
console.log("clicked");
}
