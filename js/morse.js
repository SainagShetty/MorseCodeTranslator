function myFunction(res) {
    //var res=document.getElementById("input").innerHTML;
    console.log(res);
    var str = res.toUpperCase();
    var p = {
        'A': ".-",
        'B': "-...",
        'C': "-.-.",
        'D': "-..",
        'E': ".",
        'F': "..-.",
        'G': "--.",
        'H': "....",
        'I': "..",
        'J': ".---",
        'K': "-.-",
        'L': ".-..",
        'M': "--",
        'N': "-.",
        'O': "---",
        'P': ".--.",
        'Q': "--.-",
        'R': ".-.",
        'S': "...",
        'T': "-",
        'U': "..-",
        'V': "...-",
        'W': ".--",
        'X': "-..-",
        'Y': "-.--",
        'Z': "--..",
        '1': ".----",
        '2': "..---",
        '3': "...--",
        '4': "....-",
        '5': ".....",
        '6': "-....",
        '7': "--...",
        '8': "---..",
        '9': "----.",
        '0': "-----",
        '.': ".-.-.-",
        ',': "--..--",
        ':': "---...",
        '?': "..--..",
        '\'': ".----.",
        '-': "-....-",
        '/': "-..-.",
        '(': "-.--.-",
        ')': "-.--.-",
        '"': ".-..-.",
        '@': ".--.-.",
        '=': "-...-",
        ' ': "/"
    };
    var i;
    var flag=0;
    var txt="";
    for(i=0;i<res.length;i++){
        if(res.charAt(i)==" "||res.charAt(i)=="."||res.charAt(i)=="-"||res.charAt(i)=="/"){
            flag++;
            console.log(flag);
        }
    }
    var mor="";
    if(flag==res.length){
        console.log(res);
        for(i=0; i<=res.length;i++){
            
            if(res.charAt(i)==" "||i==res.length){
                console.log(mor);
                var x;
                for(x in p){
                    console.log(x);
                    if(mor==p[x]){txt+=x;break;}
                }           
                var mor=""; 
            }
            else{
                mor+=res.charAt(i);
            }
        }
    }
    else{
        for(i=0; i<res.length;i++){
            var x;
            for(x in p){
                if(res.charAt(i)==x){txt+=(p[x]+" ");}
            }
        }
    }
    console.log(txt);
    document.getElementById("output").innerHTML = txt;
}