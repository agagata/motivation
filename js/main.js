$(document).ready(function() {
  $.getJSON("database/motivation.json", function(json) {
    var jsonLength = json["elements"].length;
    var randomElement = json["elements"][Math.floor(Math.random()*jsonLength)];

    if (randomElement["type"] === "quote") {
      $("#content").html("<h1>" + randomElement["content"] + "</h1>");
    }
    else if (randomElement["type"] === "image") {
      $("#content").html('<img src="' + randomElement["content"] + '">');
    }
    else if (randomElement["type"] === "youtube") {
      if (typeof randomElement["width"] !== 'undefined') {
        $("#content").html('<iframe src="' + randomElement["content"] + '" width="' + randomElement["width"] + '" height="315" frameborder="0"></iframe>');
      }
      else {
        $("#content").html('<iframe width="560" height="315" src="' + randomElement["content"] + '" frameborder="0"></iframe>');
      }
    }
    else if (randomElement["type"] === "spotify") {
      $("#content").html('<iframe src="' + randomElement["content"] + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
    }
    else { //error handling dla ubogich ;)
      $("#content").html("<h1>Real programmers spend their day fighting</h1>");
    }

    $("#description").html(randomElement["description"]);
  });
});
