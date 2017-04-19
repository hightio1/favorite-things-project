$(function() {

    getSegaHtml = function(sega) {

        //Display the sega
        html = "";
        html += "<li>" + "<h2>" + sega.name + "</h2>" + "<p>" + " <br> " + sega.description + "<img src=" + sega.image + " " + "height='300'" + " " + "width='450'" + ">" + "</p>" + "</li>";

        return html;
    }

    getNintendoHtml = function(nintendo) {
        html = "";
        html += "<li>" + "<h2>" + nintendo.name + "</h2>" + "<p>" + " <br> "  + nintendo.description + "<img src=" + nintendo.image + " " + "height='300'" + " " + "width='450'" + ">" + "</p>" + "</li>";

        return html;
    }


    // Target is used for where to insert 
    // the data on the page
    displaySega = function(target, segaArray) {
        html = "";
        html += "<ul><h1>Sega Games</h1>";

        $.each(segaArray, function(index) {

            //console.log(segaArray[index]);
            sega = segaArray[index];
            html += getSegaHtml(sega);
        })

        html += "</ul>";
        $(target).append(html);
    }


    displayNintendo = function(target, nintendoArray) {
        html = "";
        html += "<ul><h1>Nintendo Games</h1>";

        $.each(nintendoArray, function(index) {

            //console.log(nintendoArray[index]);
            nintendo = nintendoArray[index];
            html += getNintendoHtml(nintendo);
        })
        html += "</ul>";

        $(target).append(html);
    }


    // Get the JSON data from the file and display
    $.getJSON("data.json", function(data) {
        console.log(data);
        displayNintendo(".nintendo", data.nintendo);
        displaySega(".sega", data.sega);

        //hiding stuff 
        $(".nintendo p").hide();
        $(".sega p").hide();

        //Click event to toggle 

                $(".nintendo h2").on("click", function() {
            $(this).next(".nintendo p").toggle();

        });

        
        $(".sega h2").on("click", function() {

            $(this).next(".sega p").toggle();


        });

    });

});