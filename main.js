let input = document.getElementById('input');
let output = document.getElementById('output');

function oink() {
    let outputList = input.value.split(" ");
    
    for (let i = 0; i < outputList.length; i++) {
        let latin = outputList[i];
        if (latin == " " || latin == "") {
            continue;
        }

        let storedSuffix = "";
        // find suffixes
        for (let j = 0; j < latin.length; j++) {
            if (latin[j] == "," || latin[j] == ".") {
                storedSuffix = latin[j];
                latin = latin.replace(latin[j], "");
            }
        }
        while (latin.includes(".")) {
            latin = latin.replace(".", "");
        }
        while (latin.includes(",")) {
            latin = latin.replace(",", "");
        }

        if (['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'].includes(latin[0])) {
            if (document.getElementById("multiculturalism").checked) {
                let potentials = ['yay', 'hay', 'way', 'say'];
                latin += potentials[Math.floor((Math.random() * potentials.length))];
            } else {
                latin += "yay";
            }
        } else {
            let subLatin = "";
            for (let j = 0; j < latin.length; j++) {
                if (['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'].includes(latin[j])) {
                    break;
                } else {
                    subLatin += latin[j];
                }
            }
            latin = latin.replace(subLatin, "");
            latin = latin + subLatin;
            latin += "ay";
        }
        latin += storedSuffix;
        outputList[i] = latin;
    }

    let outputString = "";

    for (let i = 0; i < outputList.length; i++) {
        outputString += outputList[i] + " ";
    }


    output.value = outputString;
}


function oink(string) {
    let outputList = string.split(" ");
    
    for (let i = 0; i < outputList.length; i++) {
        let latin = outputList[i];
        if (latin == " " || latin == "") {
            continue;
        }

        let storedSuffix = "";
        // find suffixes
        for (let j = 0; j < latin.length; j++) {
            if (latin[j] == "," || latin[j] == ".") {
                storedSuffix = latin[j];
                latin = latin.replace(latin[j], "");
            }
        }
        while (latin.includes(".")) {
            latin = latin.replace(".", "");
        }
        while (latin.includes(",")) {
            latin = latin.replace(",", "");
        }

        if (['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'].includes(latin[0])) {
            if (document.getElementById("multiculturalism").checked) {
                let potentials = ['yay', 'hay', 'way', 'say'];
                latin += potentials[Math.floor((Math.random() * potentials.length))];
            } else {
                latin += "yay";
            }
        } else {
            let subLatin = "";
            for (let j = 0; j < latin.length; j++) {
                if (['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'].includes(latin[j])) {
                    break;
                } else {
                    subLatin += latin[j];
                }
            }
            latin = latin.replace(subLatin, "");
            latin = latin + subLatin;
            latin += "ay";
        }
        latin += storedSuffix;
        outputList[i] = latin;
    }

    let outputString = "";

    for (let i = 0; i < outputList.length; i++) {
        outputString += outputList[i] + " ";
    }


    return outputString;
}