// JavaScript source code

    function getVolume(length, width, height) {
            var volume = width * length * height;
    return volume;
}

//start process make sure var i is defined first b/c it is referenced by other variables
        function startProcess() {
            var i = 0; 
    var length = i + 2;
    var width = i + 3;
    var height = i + 4;
    var vol;
//make sure have variables that are going through iterations after the or (i = 1; i <= 10; i++)
            for (i = 1; i <= 10; i++) {

        length = i + 2;
    width = i + 3;
    height = i + 4;
    vol = getVolume(length, width, height);
  

                if (vol < 301)
                    document.write("Small Volume " + vol + "<br>");


else
                    if (vol < 601) {
            document.write("Medium Volume " + vol + "<br>");
        }
        else
                        if (vol < 1001) {
            document.write("Large Volume " + vol + "<br>");
        }
        else if (vol > 1000)
                document.write("Extra Large Volume " + vol + "<br>");
    }
}
document.getElementById("demo").innerHTML = vol;